import { H5, Tabs, Text } from "tamagui";
import { MySecondaryStack } from "../../components/MyStack";
import { CardScene } from "../../components/CardScenes";

export default function Tab3() {
  return (
    <MySecondaryStack style={{ backgroundColor: '#12222F', justifyContent: 'center' }}>
      <Tabs
        defaultValue="tab3"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.Content value="tab3">
        <Text textAlign="left" fontSize="36" fontWeight="900">FILM 1</Text>
          <Text textAlign="left" fontSize="36" fontWeight="900" color="#E2B550">SCENES</Text>
          <CardScene></CardScene>
        </Tabs.Content>
      </Tabs>
    </MySecondaryStack>
  );
}


