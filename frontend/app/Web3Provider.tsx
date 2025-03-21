"use client"

import "@rainbow-me/rainbowkit/styles.css"
import { type ReactNode } from "react"

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { WagmiProvider } from "wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { arbitrumSepolia } from "viem/chains"
import React from "react"

const config = getDefaultConfig({
  appName: "42TemplateEarnHack",
  projectId: "1c292f1868d3093656521f4e0f9eb5f8",
  chains: [arbitrumSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
})

const queryClient = new QueryClient()

export default function Web3Provider({ children }: {children: any}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
