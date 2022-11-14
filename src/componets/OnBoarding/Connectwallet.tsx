import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useAppContext } from '../../context/AppContextProvider'
export const ConnectWallet =  () => {
    const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
    const {redirectLink} = useAppContext()
      const { address, connector, isConnected } = useAccount()
    const naviagate = useNavigate()

    useEffect(() => {
        if( isConnected) {
            naviagate(redirectLink)
        }
    },  [isConnected])
    
  return (
    <div className='min-h-screen w-full space-y-7 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-extrabold'>Connect wallet</h1>
    <div className='w-full p-5 max-w-md min-w-[500px] mx-auto flex flex-col bg-secondaryDark space-y-10'>
      {connectors.map((connector) => (
        <button
          className='bg-thirdDark p-6 rounded-xl'
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      ))}
 
      {error && <div>{error.message}</div>}
    </div>
    </div>
  )
}