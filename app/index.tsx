import React from 'react';
import { Image } from 'react-native'; 
import { Link, useRouter } from 'expo-router';
import { Github, Twitter, Swords, Film} from "@tamagui/lucide-icons";
import {
  Button,
  H1,
  Text,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack,
} from 'tamagui';

import { MySafeAreaView } from '../components/MySafeAreaView';
import { MyStack } from '../components/MyStack';

export default function Home() {
  const router = useRouter();
  return (
    <MySafeAreaView>
      <MyStack style={{ backgroundColor: '#350A24' }}>
        <YStack
          space="$4"
          maxWidth={400}
          alignSelf="center"
        >
        </YStack>
        <YStack space="$3">
          <Image
            source={require("../assets/IconsImg/movie-recorder.png")}
            style={{
              width: 277,
              height: 243,
              alignSelf: 'center',
              borderRadius: 10,
            }}
          />
          <Text textAlign="center" fontSize="48px" fontWeight="900">MAKE</Text>
          <Text textAlign="center" fontSize="50px" fontWeight="900">RINGS</Text>
         {/* <H1 textAlign="center" >MAKE</H1>
          <H1 textAlign="center">RINGS</H1>*/}
          <Paragraph textAlign="center">
            THE LORD OF THE RINGS
          </Paragraph>
          {/*<Button onPress={() => router.push("/users/testuser")}>
            Go to user page
          </Button>*/}
       {/*<Button onPress={() => router.push("/tabs")}>Go to tabs page</Button>*/}
          <Button onPress={() => router.push("/tabs")} alignSelf="center" icon={Swords} size="$6" theme="red" color="#fff" style={{ backgroundColor: '#752D59' }}>
            CREATE
          </Button >
        </YStack>
        <YStack space="$5">
          <YGroup
            bordered
            separator={<Separator />}
            theme="red"
          >
            <YGroup.Item>
              <Link
                asChild
                href="https://www.instagram.com/isaacsguerra_/"
                target="_blank"
              >
                <ListItem
                  hoverTheme
                  title="Nate"
                  pressTheme
                  icon={Twitter}
                />
              </Link>
            </YGroup.Item>
            <YGroup.Item>
              <Link
                asChild
                href="https://github.com/isacsebastiann"
                target="_blank"
              >
                <ListItem
                  hoverTheme
                  pressTheme
                  title="Tamagui"
                  icon={Github}
                />
              </Link>
            </YGroup.Item>
            <YGroup.Item>
              <Link
                asChild
                href="https://github.com/ivopr/tamagui-expo"
                target="_blank"
              >
                <ListItem
                  hoverTheme
                  pressTheme
                  title="This Template"
                  icon={Github}
                />
              </Link>
            </YGroup.Item>
          </YGroup>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}
