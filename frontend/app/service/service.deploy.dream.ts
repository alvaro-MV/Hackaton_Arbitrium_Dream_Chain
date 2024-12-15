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

	constructor() {
	}


	async deployContract(): Promise<string> {
		try {
			const response = await fetch("/api/deploy", {
				method: "POST",
			});
			if (!response.ok) {
				throw new Error("Error al desplegar el contrato");
			}
			const data = await response.json();
			console.log("Contract Address:", data.contractAddress);
			return data.contractAddress;
			} catch (error) {
			console.error("Error al llamar a la API:", error);
			return "";
			}
	}
	async deployContractMetaMask(): Promise<string> {
		if (typeof window.ethereum === "undefined") {
			alert("MetaMask no está instalado. Por favor, instálalo para continuar.");
			return "";
		  }
		try {
			const [account] = await window.ethereum.request({
				method: "eth_requestAccounts",
			});

			const response = await fetch("/api/deploy-metamask", {
				method: "POST",
			});
			if (!response.ok) {
				throw new Error("Error al desplegar el contrato");
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
			const txResponse = await signer.sendTransaction(tx);

			const receipt = await txResponse.wait();
			return receipt?.contractAddress?.toString() || "";
		} catch (error) {
			console.error("Error al llamar a la API:", error);
			return "";
		}
	}
}

