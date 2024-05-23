import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"

const Browser = () => {
  return (
    <section className="h-screen items-center justify-center mx-auto">
      <div>
        <h1 className="text-5xl">Pick your budget</h1>
      </div>
      <div className="mx-auto justify-center items-center">
        <Drawer>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerDescription>
                <div className="flex flex-row gap-4 items-center mx-auto justify-center">
                    <Button><p className="text-2xl">&larr;</p></Button>
                    <Button><p className="text-2xl">&rarr;</p></Button>

                    

                </div>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button variant="outline" className="w-20 justify-center items-center mx-auto">Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  )
}
export default Browser
