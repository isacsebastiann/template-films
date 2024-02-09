import { H5, Tabs, Text } from "tamagui";
import { MySecondaryStack } from "../../components/MyStack";
import { CardScene } from "../../components/CardScenes";

export default function Tab5() {
  return (
    <MySecondaryStack style={{ backgroundColor: '#350A24', justifyContent: 'center' }}>
      <Tabs
        defaultValue="tab5"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.Content value="tab5">
        <Text textAlign="left" fontSize="36" fontWeight="900">FILM 1</Text>
          <Text textAlign="left" fontSize="36" fontWeight="900" color="#ff2900">SCENES</Text>
          <CardScene></CardScene>
        </Tabs.Content>
      </Tabs>
    </MySecondaryStack>
  );
}


