import { H5, Tabs, Text } from "tamagui";
import { MySecondaryStack } from "../../components/MyStack";
import { CardCharacter } from "../../components/CardCharacters";

export default function Tab3() {
  return (
    <MySecondaryStack style={{ backgroundColor: '#350A24', justifyContent: 'center' }}>
      <Tabs
        defaultValue="tab3"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.Content value="tab3">
          <Text textAlign="left" fontSize="36px" fontWeight="900">DASHBOARD</Text>
          <Text textAlign="left" fontSize="36px" fontWeight="900" color="#ff2900">CHARACTERS</Text>
          <CardCharacter></CardCharacter>
                  </Tabs.Content>
        
      </Tabs>
    </MySecondaryStack>
  );
}

