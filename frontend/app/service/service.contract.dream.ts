import "dotenv/config"
import * as dotenv from "dotenv";
import { createPublicClient, createWalletClient, getAbiItem, http, parseAbi } from "viem"
import { arbitrumSepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"

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
		const account = privateKeyToAccount('0x7d316c484191cf49b45edebfc8e75c558c670fa952f45635e42cffe00691fda3')
	
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
		this.CONT_ADD = '0x5c23001dea064900e2d1182a4cbca4dc705c5ffe';
	}

	// Función para escribir en el contrato (escribir un valor)
	async write(age: number, cont_add?: string) : Promise<string> {
		try {
			const result = await this.client.writeContract({
			abi: this.ABI,
			address: cont_add? cont_add: this.CONT_ADD,
			functionName: 'set_value',
			args: [BigInt(age)], // Pasando el valor de 'age' como un BigInt
			});
			console.log(`Contract write result: ${result}`);
			return JSON.stringify(result);
		} catch (error) {
			console.error("Error writing to contract:", error);
			return ""; 
		}
	}

	// Función para leer el valor desde el contrato
	async read(cont_add?: string): Promise<string> {
		try {
			const result = await this.publicClient.readContract({
			abi: this.ABI,
			address: cont_add? cont_add: this.CONT_ADD,
			functionName: "get_value",
			});
			console.log(`Contract read result: ${result}`);
			return result;
		} catch (error) {
			console.error("Error reading from contract:", error);
			return "";
		}
	}
}
