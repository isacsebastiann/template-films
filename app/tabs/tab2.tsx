import React from 'react';
import { H5, Tabs, Text } from "tamagui";
import { MySecondaryStack } from "../../components/MyStack";
import { Characterpost } from "../../components/CharacterPost"; // Asegúrate de que esta importación sea correcta

export default function Tab2() {
  return (
    <MySecondaryStack style={{ backgroundColor: '#12222F', justifyContent: 'center' }}>
      <Tabs
        defaultValue="tab2"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.Content value="tab2">
          <Text textAlign="left" fontSize="36" fontWeight="900">FILM 1</Text>
          <Text textAlign="left" fontSize="36" fontWeight="900" color="#E2B550">SCENES</Text>
          <Characterpost></Characterpost>
        </Tabs.Content>
      </Tabs>
    </MySecondaryStack>
  );
}
