import { createPublicClient, createWalletClient, getAbiItem, http, parseAbi } from "viem"
import { arbitrumSepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import "dotenv/config"
import { exit } from "process"
import { log } from "console"
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

import { ethers, Transaction } from "ethers";
import * as dotenv from "dotenv";
import { TransactionContract } from "../interface/interface.formdata"

dotenv.config();


export class DeployDream {

	constructor() {
	}


	async deployContract(): Promise<TransactionContract> {
		try {
			const addres = localStorage.getItem('user')
			const response = await fetch("/api/deploy", {
				method: "POST",
				headers: {
					"Content-Type": "application/json", // Indica que el cuerpo es JSON
				  },
				  body: JSON.stringify({
					address: addres?.toString()
				})
			});
			if (!response.ok) {
				throw new Error("Error al desplegar el contrato");
			}
			const data = await response.json();
			
			console.log("Contract Address:", data.hash);

			return {
				hash: data.hash,
				from: data.from,
				contractAddress: data.contractAddress,
				blockHash: data.blockHash,
			  };
		} catch (error) {
			console.error("Error al llamar a la API:", error);
			return {
				hash: "",
				from: "",
				contractAddress: "",
				blockHash: "",
			  };
		}
	}
}

