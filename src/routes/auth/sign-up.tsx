import { createFileRoute } from '@tanstack/react-router'
import SignUpForm from '@/components/Form/SignUp'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { useEffect } from 'react'
import { useRouter } from '@tanstack/react-router'


export const Route = createFileRoute('/auth/sign-up')({
  component: () => {
    const currentUser = JSON.parse(localStorage.getItem("user") || "{}")
    const router = useRouter()

    useEffect(() => {
      currentUser?.accessToken && router.navigate({ to: "/" })
    },[currentUser])

    return (
     <ThirdwebProvider activeChain={ChainId.Arbitrum}> {/* Arbitrum chain ID */}
        <SignUpForm />
      </ThirdwebProvider>
    )
  },
})
