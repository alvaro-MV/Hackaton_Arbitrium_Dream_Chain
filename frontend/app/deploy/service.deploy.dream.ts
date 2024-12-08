import { createPublicClient, createWalletClient, getAbiItem, http, parseAbi } from "viem"
import { arbitrumSepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import "dotenv/config"
import { exit } from "process"
import { log } from "console"

import { ethers } from "ethers";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();


export class DreamDeployed {
	private ABI: any;
	private CONT_ADD: string;
	private client: any;
	private publicClient: any;
	  
	constructor() {
		// Parsear el ABI
		this.ABI = parseAbi([
		  "function set_value(uint256) public",
		  "function get_value() public view returns (uint256)",
		]);
	
		// Obtener la clave privada del entorno
		const account = privateKeyToAccount('0x09cdbafe5f8ae4054f602c3c6113768c84ad9f0eae54abf88c17ea7aff510be1')
	
		// Crear un cliente para interactuar con el contrato (escritura)
		this.client = createWalletClient({
		  chain: arbitrumSepolia,
		  transport: http(),
		  account,
		});
	
		// Crear un cliente público para leer del contrato
		this.publicClient = createPublicClient({
		  chain: arbitrumSepolia,
		  transport: http(),
		});
	
		// Dirección del contrato (obtenida de las variables de entorno)
		this.CONT_ADD = '0x53a3badcf3a332f8393800e4ef9839b4618aceb8';
	}

	// Función para escribir en el contrato (escribir un valor)
	async write(age: number) : Promise<string> {
		if (age < 0 || age > 255) {
			throw new Error("Age must be a number between 0 and 255.");
		}
		try {
			const result = await this.client.writeContract({
			abi: this.ABI,
			address: this.CONT_ADD,
			functionName: 'set_value',
			args: [BigInt(age)], // Pasando el valor de 'age' como un BigInt
			});
			console.log(`Contract write result: ${result}`);
			return JSON.stringify(result);
		} catch (error) {
			console.error("Error writing to contract:", error);
			return "Error writing to contract."; 
		}
	}

	// Función para leer el valor desde el contrato
	async read() {
		try {
			const result = await this.publicClient.readContract({
			abi: this.ABI,
			address: this.CONT_ADD,
			functionName: "get_value",
			});
			console.log(`Contract read result: ${result}`);
		} catch (error) {
			console.error("Error reading from contract:", error);
		}
	}
}


export class DeployDream {
	// Configuración de la red
	private ARBITRUM_RPC;
	private PRIVATE_KEY;

	constructor() {
		this.ARBITRUM_RPC = process.env.ARBITRUM_RPC!;
		this.PRIVATE_KEY = '0x7d316c484191cf49b45edebfc8e75c558c670fa952f45635e42cffe00691fda3';
	}

	async deployContract() {
		const provider = new ethers.JsonRpcProvider(this.ARBITRUM_RPC);
		const wallet = new ethers.Wallet(this.PRIVATE_KEY, provider);

		// Cargar el contrato WASM
		const contractWasm = fs.readFileSync("../../../contract.wasm");

		console.log("Desplegando contrato...");
		// Crear una transacción para desplegar el contrato
		const tx = await wallet.sendTransaction({
		data: contractWasm.toString(), // El código WASM del contrato
		});

		const receipt = await tx.wait();
		console.log("Contrato desplegado en:", receipt?.contractAddress);

		return receipt?.contractAddress;
	}

	async interactWithContract(contractAddress: string) {
		const provider = new ethers.JsonRpcProvider(this.ARBITRUM_RPC);
		const wallet = new ethers.Wallet(this.PRIVATE_KEY, provider);

		// Interactuar con el contrato (ejemplo de llamada)
		console.log("Llamando a la función `add`...");
		const tx = await wallet.sendTransaction({
		to: contractAddress,
		data: "0x1234...", // Reemplaza con los datos de la función codificados en ABI
		});

		const receipt = await tx.wait();
		console.log("Resultado de la transacción:", receipt);
	}


}