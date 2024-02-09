import React from 'react';
import { H5, Tabs, Text, Button } from "tamagui";
import { MySecondaryStack } from "../../components/MyStack";
import { CardDemo, DemoCard } from "../../components/CardFilm";


const styles = {
  stack: {
    backgroundColor: '#12222F',
    justifyContent: 'center',
  },
  tabContent: {
    flexDirection: 'column',
    backgroundColor: '#12222F',
    width: '100%', 
  },
  dashboardText: {
    textAlign: 'left',
    fontSize: '36',
    fontWeight: '900',
  },
  filmsText: {
    textAlign: 'left',
    fontSize: '36',
    fontWeight: '900',
    color: '#E2B550',
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
          <DemoCard></DemoCard>
        </Tabs.Content>
      </Tabs>
    </MySecondaryStack>
  );
}
