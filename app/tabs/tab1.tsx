import React from 'react';
import { H5, Tabs, Text, Button } from "tamagui";
import { MySecondaryStack } from "../../components/MyStack";
import { CardDemo } from "../../components/Card";

const styles = {
  stack: {
    backgroundColor: '#350A24',
    justifyContent: 'center',
  },
  tabContent: {
    flexDirection: 'column',
    width: '100%', 
  },
  dashboardText: {
    textAlign: 'left',
    fontSize: '36px',
    fontWeight: '900',
  },
  filmsText: {
    textAlign: 'left',
    fontSize: '36px',
    fontWeight: '900',
    color: '#ff2900',
  },
};

export default function Tab1() {
  return (
    <MySecondaryStack style={styles.stack}>
      <Tabs
        defaultValue="tab1"
        orientation="horizontal"
        style={styles.tabContent}
      >
        <Tabs.Content value="tab1">
          <Text style={styles.dashboardText}>DASHBOARD</Text>
          <Text style={styles.filmsText}>FILMS</Text>
          <CardDemo />
        </Tabs.Content>
      </Tabs>
    </MySecondaryStack>
  );
}
