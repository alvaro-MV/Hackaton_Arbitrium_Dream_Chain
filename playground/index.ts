import { createPublicClient, createWalletClient, getAbiItem, http, parseAbi } from "viem"
import { arbitrumSepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"
import "dotenv/config"
import { exit } from "process"
import { log } from "console"

const ABI = parseAbi([
  "function set_value(string) public",
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

async function write(desc:string) {
  const result = await client.writeContract({
    abi: ABI,
    address: CONT_ADD,
    functionName: 'set_value',
    args: [
      desc
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
const age = 5497834954795765; // Example client age
write(String(age)); 
// read(); // Read client age from contract
