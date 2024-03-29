import { Center, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CartItem, { ItemData } from "../components/CartItem.tsx";
import TotalFooter from "../components/TotalFooter.tsx";
import { Products } from "../data.ts";
import CustomerDetails from "../components/CartDetails.tsx";

function HostedCheckout() {
  const [items] = useState<ItemData[]>(Products);
  return (
    <>
      <Center h={"100vh"} color="black">
        <VStack spacing="24px">
          <Heading>Hosted Checkout Example</Heading>
          {items.map((elem) => {
            return <CartItem data={elem} key={elem.id} mode={"checkout"} />;
          })}
          <TotalFooter total={30} mode={"checkout"} />
          <CustomerDetails data={items} endpoint={"/checkout/hosted"} />
        </VStack>
      </Center>
    </>
  );
}

export default HostedCheckout;
