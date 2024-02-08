import { H5, Tabs, Text } from "tamagui";
import { MySecondaryStack } from "../../components/MyStack";
import {DialogDemo} from "../../components/DialogDemo";

export default function sectionfilm() {
  return (
    <MySecondaryStack style={{ backgroundColor: '#ff2900', justifyContent: 'center' }}>
      <Tabs
        defaultValue="sectionfilm"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.Content value="sectionfilm">
        <Text textAlign="left" fontSize="36px" fontWeight="900">FILM 1</Text>
          <Text textAlign="left" fontSize="36px" fontWeight="900" color="#ff2900">SCENES</Text>
          <DialogDemo></DialogDemo>
        </Tabs.Content>
      </Tabs>
    </MySecondaryStack>
  );
}


