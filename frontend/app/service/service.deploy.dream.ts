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
}

