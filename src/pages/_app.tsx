import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import GlobalStyles from '@/pages/GlobalStyles'
import { Provider } from 'react-redux'
import { store } from '@/state/store'
import {
  EthereumClient,
  // EthereumClient,
  modalConnectors,
  walletConnectProvider
} from '@web3modal/ethereum'
// import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { goerli, polygon } from 'wagmi/chains'
import { Web3Modal } from '@web3modal/react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '@/state/store'
const projectId = '466554903a7804098efb91cec7b94390'
// 2. Configure wagmi client
const chains = [goerli, polygon]

const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId })
])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    version: '1',
    appName: 'token-locker',
    chains,
    projectId
  }),
  provider
})

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <WagmiConfig client={wagmiClient}>
            <GlobalStyles />
            <Component {...pageProps} />
          </WagmiConfig>
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </PersistGate>
      </Provider>
    </>
  )
}
