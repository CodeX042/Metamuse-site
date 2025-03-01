import { createFileRoute } from '@tanstack/react-router'
import Masonry from 'react-masonry-css';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import GalleryCard from '@/components/cards/GalleryCard'
import Header from '@/components/Navs/Header';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';


const items = [
  { title: "Monochrome Megan", creator: "Artwork by XYZ", price: "1.602 ETH", timeLeft: "10:07:31", image: "/asset/img1.jpg" },
  { title: "Monochrome Megan", creator: "Artwork by XYZ", price: "1.602 ETH", timeLeft: "10:07:31", image: "/asset/img2.jpg" },
  { title: "Monochrome Megan", creator: "Artwork by XYZ", price: "1.602 ETH", timeLeft: "10:07:31", image: "/asset/img3.jpg" },
  { title: "Monochrome Megan", creator: "Artwork by XYZ", price: "1.602 ETH", timeLeft: "10:07:31", image: "/asset/img4.jpg" },
  { title: "Monochrome Megan", creator: "Artwork by XYZ", price: "1.602 ETH", timeLeft: "10:07:31", image: "/asset/img5.jpg" },
  { title: "Monochrome Megan", creator: "Artwork by XYZ", price: "1.602 ETH", timeLeft: "10:07:31", image: "/asset/img6.jpg" },
  { title: "Monochrome Megan", creator: "Artwork by XYZ", price: "1.602 ETH", timeLeft: "10:07:31", image: "/asset/img7.jpg" },
  { title: "Monochrome Megan", creator: "Artwork by XYZ", price: "1.602 ETH", timeLeft: "10:07:31", image: "/asset/img8.jpg" },
  { title: "Monochrome Megan", creator: "Artwork by XYZ", price: "1.602 ETH", timeLeft: "10:07:31", image: "/asset/img9.jpg" },
  { title: "Monochrome Megan", creator: "Artwork by XYZ", price: "1.602 ETH", timeLeft: "10:07:31", image: "/asset/img9.jpg" },
  { title: "Monochrome Megan", creator: "Artwork by XYZ", price: "1.602 ETH", timeLeft: "10:07:31", image: "/asset/img9.jpg" },
  { title: "Monochrome Megan", creator: "Artwork by XYZ", price: "1.602 ETH", timeLeft: "10:07:31", image: "/asset/img9.jpg" },
  // Add more items here
]

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

export const Route = createFileRoute('/')({
  component: () => (
    <ThirdwebProvider activeChain={ChainId.Arbitrum}> {/* Arbitrum chain ID */}
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
    <Header />
     <div className="p-8">
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex  gap-4 "
            columnClassName="pl-4"
        >
            {items.map((item, index) => (
                <GalleryCard key={index} {...item} />
            ))}
        </Masonry>
      </div>
      </div>
      </ThirdwebProvider>
)
})
