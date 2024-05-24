import { Product, formatPrice } from "@/lib/utils"
import PersonIcon from "@mui/icons-material/Person"
import Image from "next/image"
import AddToCartButton from "./AddToCartButton"
import { Separator } from "./ui/separator"

const ProductReel = ({
  image,
  category,
  seats,
  description,
  price,
  id,
}: Product) => {

  return (
    <div className="flex items-center justify-center mx-auto">
      <div className="flex flex-col">
        <div className=" mt-4 relative">
          <p>{id}</p>
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
            <div className="font-bold text-2xl">{description}</div>
            <AddToCartButton product={{ id, description, price, image }}/>
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
