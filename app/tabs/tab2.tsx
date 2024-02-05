
import { H5, Tabs, Text } from "tamagui";
import { MySecondaryStack } from "../../components/MyStack";
import { CardDemo } from "../../components/Card";

export default function Tab2() {
  return (
    <MySecondaryStack style={{ backgroundColor: '#350A24', justifyContent: 'center' }}>
      <Tabs
        defaultValue="tab2"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.List style={{ justifyContent: 'center' }}>
          <Tabs.Tab value="tab1">
            <Text>FILMS</Text>
          </Tabs.Tab>
          <Tabs.Tab value="tab2" >
            <Text>FILMS 1</Text>
          </Tabs.Tab>
          <Tabs.Tab value="tab3">
            <Text >SCENE 1</Text>
          </Tabs.Tab>
        </Tabs.List>

      
        <Tabs.Content value="tab2">
        <Text textAlign="left" fontSize="36px" fontWeight="900">FILM 1</Text>
          <Text textAlign="left" fontSize="36px" fontWeight="900" color="#ff2900">SCENES</Text>
          <CardDemo>HOLA</CardDemo>
          <CardDemo></CardDemo>
          <CardDemo></CardDemo>
        </Tabs.Content>

        <Tabs.Content value="tab3">
          <Text textAlign="left" fontSize="36px" fontWeight="900">SCENE 1</Text>
          <Text textAlign="left" fontSize="36px" fontWeight="900" color="#ff2900">CHARACTER</Text>
          <CardDemo></CardDemo>
          <CardDemo></CardDemo>
          <CardDemo></CardDemo>
        </Tabs.Content>
      </Tabs>
    </MySecondaryStack>
  );
}