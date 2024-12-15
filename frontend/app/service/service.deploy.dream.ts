import { createPublicClient, createWalletClient, getAbiItem, http, parseAbi } from "viem"
import { arbitrumSepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import "dotenv/config"
import { exit } from "process"
import { log } from "console"
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

import { ethers } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();


export class DeployDream {
	private state: string = "idle";
	constructor() {
	}
	getState() {
		return this.state;
	}
	setState(newState: string) {
		this.state = newState;
	}
	
	async deployContract(): Promise<string> {
		try {
			this.setState("loading");

			const response = await fetch("/api/deploy", {
				method: "POST",
			});
			if (!response.ok) {
				throw new Error("Error al desplegar el contrato");
			}
			const data = await response.json();
			console.log("Contract Address:", data.contractAddress);
			this.setState("complete");

			return data.contractAddress;
		} catch (error) {
			console.error("Error al llamar a la API:", error);
			this.setState("error");
			return "";
		}
	}

	async deployContractMetaMask(): Promise<string | null> {
		this.setState("loading");

		if (typeof window.ethereum === "undefined") {
			alert("MetaMask no está instalado. Por favor, instálalo para continuar.");
			return "";
		  }
		try {
			const [account] = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			if (!account) {
				console.debug("Error al conectar con metamask");
				return null;
			}
			const response = await fetch("/api/deploy-metamask", {
				method: "POST",
			});
			if (!response.ok) {
				console.debug ("Error pedir el bytecode del contrato");
				return null;
			}
			const data = await response.json();

			// Desplegar el contrato
			const provider = new ethers.BrowserProvider(window.ethereum);	
			const signer = await provider.getSigner();
			const tx = {
				from: account,
				data: data.data,
			};
			
			console.log("Desplegando contrato...");
			let  txResponse;
			try {
				txResponse = await signer.sendTransaction(tx);
			}catch (er: any) {
				return null;
			}
			const receipt = await txResponse?.wait();
			this.setState("complete");
			return receipt?.contractAddress?.toString() || "";
		} catch (error) {
			this.setState("error");
			return null;
		}
	}
}

