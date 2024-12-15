import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ethers } from "ethers";


 export default async function handler(req: NextApiRequest, res: NextApiResponse) {

	if (req.method === "POST") {
		  // Construir la ruta al archivo
		  const filePath = path.join(process.cwd(),'data', 'contract.wasm');
		  const contractWasm = fs.readFileSync(filePath);
	
		  res.status(200).json({ data: '0x' + contractWasm.toString('hex') });
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
