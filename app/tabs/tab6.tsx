import { H5, Tabs, Text } from "tamagui";
import { MySecondaryStack } from "../../components/MyStack";
import  CardComponent  from "../../components/CardComponent";

export default function Tab6() {
  return (
    <MySecondaryStack style={{ backgroundColor: '#350A24', justifyContent: 'center' }}>
      <Tabs
        defaultValue="tab6"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.Content value="tab6">
          <Text textAlign="left" fontSize="36" fontWeight="900">DASHBOARD</Text>
          <Text textAlign="left" fontSize="36" fontWeight="900" color="#ff2900">CHARACTERS</Text>
          <CardComponent></CardComponent>
          </Tabs.Content>
      </Tabs>
    </MySecondaryStack>
  );
}

