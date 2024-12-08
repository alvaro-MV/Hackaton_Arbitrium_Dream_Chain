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

async function write(age: number) {
  if (age < 0 || age > 255) {
    throw new Error("Age must be a number between 0 and 255.");
  }



  const result = await client.writeContract({
    abi: ABI,
    address: CONT_ADD,
    functionName: 'set_value',
    args: [
      BigInt(age)
    ], // Passing the age as an array of bytes
  });

  console.debug(`Contract write result: ${result}`);
}

async function read() {
  const result = await publicClient.readContract({
    abi: ABI,
    address: CONT_ADD,
    functionName: "get_value",
  });

  console.debug(`Contract read result: ${result}`);
}

// Example: Writing and Reading the age value (replace with actual age)
const age = 30; // Example client age
write(age); // Write client age to contract
read(); // Read client age from contract
