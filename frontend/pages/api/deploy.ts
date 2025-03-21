import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ethers } from "ethers";


 export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const ARBITRUM_RPC = 'https://sepolia-rollup.arbitrum.io/rpc';
	const PRIVATE_KEY = '7d316c484191cf49b45edebfc8e75c558c670fa952f45635e42cffe00691fda3';

	if (req.method === "POST") {

		try {
			const { address } = req.body;

			console.log("Address:", address);
		  // Construir la ruta al archivo
		  const filePath = path.join(process.cwd(),'data', 'contract.wasm');
		  const contractWasm = fs.readFileSync(filePath);
	
		  // Desplegar el contrato
		  const provider = new ethers.JsonRpcProvider(ARBITRUM_RPC);
		  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
	
		  console.log("Desplegando contrato...");
		  const tx = await wallet.sendTransaction({
			data: '0x' + contractWasm.toString('hex'),
		  });

		  const receipt = await tx.wait();
		  res.status(200).json({ 
			hash: receipt?.hash,
			from: receipt?.from,
			contractAddress: receipt?.contractAddress,
			blockHash: receipt?.blockHash
		   });
		} catch (error) {
		  console.error("Error durante el despliegue:", error);
		  res.status(500).json({ error: error });
		}
	} else {
	res.setHeader("Allow", ["POST"]);
	res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
