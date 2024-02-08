import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Button } from "tamagui";

export default function Layout() {
  const router = useRouter();

  return (
    <Tabs>
      <Tabs.Screen
        name="tab1"
        options={{
          title: "DASBOARD FILMS",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="one-up"
                {...props}
              />
            );
          },
          headerLeft() {
            return (
              <Button
                ml="$2.5"
                style={{ backgroundColor: '#752D59' }}
                onPress={() => router.push("/")}
              >
                <MaterialCommunityIcons name="arrow-left" color={"#fff"}/>
              </Button>
            );
          }
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: "SCENES",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="two-factor-authentication"
                {...props}
              />
            );
          },
          headerLeft() {
            return (
              <Button
                ml="$2.5"
                style={{ backgroundColor: '#ff2900' }}
                onPress={() => router.push("/")}
              >
                <MaterialCommunityIcons name="arrow-left" />
              </Button>
            );
          }
        }}
      />
      <Tabs.Screen
        name="tab3"
        options={{
          title: "CHARACTERS",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="account-group"
                {...props}
              />
            );
          },
          headerLeft() {
            return (
              <Button
                ml="$2.5"
                style={{ backgroundColor: '#fff' }}
                onPress={() => router.push("/")}
              >
                <MaterialCommunityIcons name="arrow-right" />
              </Button>
            );
          }
        }}
      />
    </Tabs>
  );
}
