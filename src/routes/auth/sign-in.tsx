import { createFileRoute, useRouter } from '@tanstack/react-router'
import LoginForm from '@/components/Form/LoginForm'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { useEffect } from 'react'


export const Route = createFileRoute('/auth/sign-in')({
  component: () => {
    const currentUser = JSON.parse(localStorage.getItem("user") || "{}")
    const router = useRouter()

    useEffect(() => {
      currentUser?.accessToken && router.navigate({ to: "/" })
    },[currentUser])

    return (
     <ThirdwebProvider activeChain={ChainId.Arbitrum}> {/* Arbitrum chain ID */}
        <LoginForm />
      </ThirdwebProvider>
    )
  },
})
