import Image from "next/image";
import Title from '../components/Title'
import Browser from "@/components/Browser";
export default function Home() {
  return (
    <div className="flex flex-col max-w-screen-xl">
   <Title />  
   <Browser />
   </div>  
  );
}
