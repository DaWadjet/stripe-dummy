import { Center, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CartItem, { ItemData } from "../components/CartItem.tsx";
import TotalFooter from "../components/TotalFooter.tsx";
import { Subscriptions } from "../data.ts";
import CustomerDetails from "../components/CartDetails.tsx";

function SubscriptionWithTrial() {
  const [items] = useState<ItemData[]>(Subscriptions);
  return (
    <>
      <Center h={"100vh"} color="black">
        <VStack spacing="24px">
          <Heading>New Subscription With Trial Example</Heading>
          {items.map((elem) => {
            return <CartItem key={elem.id} data={elem} mode={"subscription"} />;
          })}
          <TotalFooter total={4.99} mode={"trial"} />
          <CustomerDetails data={items} endpoint={"/subscriptions/trial"} />
        </VStack>
      </Center>
    </>
  );
}

export default SubscriptionWithTrial;
