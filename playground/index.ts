import { createPublicClient, createWalletClient, getAbiItem, http, parseAbi } from "viem"
import { arbitrumSepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import "dotenv/config"
import { exit } from "process"
import { log } from "console"

const ABI = parseAbi([
  "function set_value(uint256) public",
  "function get_value() public view returns (uint256)",
])

const account = privateKeyToAccount((process as any).env.PRIVATE_KEY)


const client = createWalletClient({
  chain: arbitrumSepolia,
  transport: http(),
  account,
})

const publicClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(),
})

const CONT_ADD = (process as any).env.CONT_ADD;

async function write(arg:number) {
  const result = await client.writeContract({
    abi: ABI,
    address: '0x6fB7A455a6b6d53371B311Dbf4c319f3F2B7F53e',
    functionName: 'set_value',
    args: [
      BigInt(arg)
    ], // Passing the age as an array of bytes
  });

  console.debug(`Contract write result: ${result}`);
}

async function read() {
  const result = await publicClient.readContract({
    abi: ABI,
    address: '0x6fB7A455a6b6d53371B311Dbf4c319f3F2B7F53e',
    functionName: "get_value",
  });

  console.debug(`Contract read result: ${result}`);
}

// Example: Writing and Reading the age value (replace with actual age)
const age = 10; // Example client age
<<<<<<< HEAD
//write(age);
=======
// write(age);
>>>>>>> be56080 (amo)
read(); // ReaGd client age from contract



