import { StaticImageData } from "next/image"
import Image from "next/image"
import { AspectRatio } from "./ui/aspect-ratio"
import PersonIcon from "@mui/icons-material/Person"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import AddIcon from '@mui/icons-material/Add';

interface ProductReelProps {
  image: string
  category: string
  seats: number
  description: string
  price: number
}



const ProductReel = ({
  image,
  category,
  seats,
  description,
  price,
}: ProductReelProps) => {
  return (
    <div className="flex items-center justify-center mx-auto">
      <div className="flex flex-col">
        <div className=" mt-4 relative">
          <Image
            src={image}
            alt="Car Display Card"
            width={300}
            height={450}
            className="object-cover"
            loading="eager"
          />
        </div>
        <div className="mt-2 flex flex-col">
          <div className="flex flex-row">
          <p className="font-bold text-2xl">{description}</p>
          <button className="justify-end ml-auto flex hover:bg-gray-100" >
            <AddIcon/>
            </button>
          </div>
          <Separator />
        
        </div>
        <div className="flex flex-row justify-end mt-2">
        <div className="text-lg text-muted-foreground">
            {formatPrice(price)}
          </div>
          <div className="ml-auto">
            <PersonIcon />
          </div>

          <div className="ml-2">
            <p className="text-lg">{seats}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductReel
