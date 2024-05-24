import Image from "next/image";
import Title from '../components/Title'
import Browser from "@/components/Products";
export default function Home() {
  return (
    <div className="flex flex-col">
   <Title />  
   <Browser />
   </div>  
  );
}
