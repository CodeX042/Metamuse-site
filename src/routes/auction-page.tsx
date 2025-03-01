import Header from '@/components/Navs/Header';
import AuctionCard from '@/components/cards/AuctionCard';
import { createFileRoute } from '@tanstack/react-router'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

export const Route = createFileRoute('/auction-page')({
  component: () => {

  


    return (
    <div className="relative"><ThirdwebProvider activeChain={ChainId.Arbitrum}>
        <Header />
      </ThirdwebProvider>
    <div className="p-8 bg-gray-900 min-h-screen flex justify-center items-center">
      
      <AuctionCard/>
        </div>
      </div>
    )
  },
})
