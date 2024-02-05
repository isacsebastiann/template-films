
import { H5, Tabs, Text } from "tamagui";
import { MySecondaryStack } from "../../components/MyStack";
import { CardDemo } from "../../components/Card";

export default function Tab1() {
  return (
    <MySecondaryStack style={{ backgroundColor: '#350A24', justifyContent: 'center' }}>
      <Tabs
        defaultValue="tab1"
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

        <Tabs.Content value="tab1">
          <H5>Dashboard</H5>
          <CardDemo></CardDemo>
          <CardDemo></CardDemo>
          <CardDemo></CardDemo>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <H5>Scenes</H5>
          <CardDemo></CardDemo>
          <CardDemo></CardDemo>
          <CardDemo></CardDemo>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <H5>Character</H5>
          <CardDemo></CardDemo>
          <CardDemo></CardDemo>
          <CardDemo></CardDemo>
        </Tabs.Content>
      </Tabs>
    </MySecondaryStack>
  );
}