import React from 'react';
import { Image } from 'react-native'; 
import { Swords } from "@tamagui/lucide-icons";
import { Github, Twitter,Film} from "@tamagui/lucide-icons";
import { Link, useRouter } from 'expo-router';

import {
  Button,
  Text,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack,
} from 'tamagui';

import { MySafeAreaView } from '../components/MySafeAreaView';
import { MyStack } from '../components/MyStack';

const INSTAGRAM_URL = "https://www.instagram.com/isaacsguerra_/";
const GITHUB_USER_URL = "https://github.com/isacsebastiann";
const GITHUB_TEMPLATE_URL = "https://github.com/ivopr/tamagui-expo";

export default function Home() {
  const router = useRouter();

  const imageStyle = {
    padding: 20,
    width: 277,
    height: 243,
    alignSelf: 'center',
    borderRadius: 10,
  };

  return (
    <MySafeAreaView>
      <MyStack style={styles.container}>
        <Image
          source={require("../assets/IconsImg/movie-recorder.png")}
          style={imageStyle}
        />
        <TitleAndSubtitle />
        <CreateButton onPress={() => router.push("/tabs")} />
        <SocialLinks />
      </MyStack>
    </MySafeAreaView>
  );
}

const TitleAndSubtitle = () => (
  <YStack space="$3">
    <Text textAlign="center" fontSize="48px" fontWeight="900">MAKE</Text>
    <Text textAlign="center" fontSize="50px" fontWeight="900">RINGS</Text>
    <Paragraph textAlign="center">THE LORD OF THE RINGS</Paragraph>
  </YStack>
);

const CreateButton = ({ onPress }) => (
  <Button
    onPress={onPress}
    alignSelf="center"
    icon={Swords}
    size="$6"
    theme="red"
    color="#fff"
    style={styles.createButton}
  >
    CREATE
  </Button>
);

const SocialLinks = () => (
  <YStack space="$5">
    <YGroup bordered separator={<Separator />} theme="red">
      <SocialLinkItem href={INSTAGRAM_URL} title="Nate" icon={Twitter} />
      <SocialLinkItem href={GITHUB_USER_URL} title="Tamagui" icon={Github} />
      <SocialLinkItem href={GITHUB_TEMPLATE_URL} title="This Template" icon={Github} />
    </YGroup>
  </YStack>
);

const SocialLinkItem = ({ href, title, icon }) => (
  <Link asChild href={href} target="_blank">
    <ListItem hoverTheme pressTheme title={title} icon={icon} />
  </Link>
);

const styles = {
  container: {
    backgroundColor: '#350A24',
  },
  createButton: {
    backgroundColor: '#752D59',
  },
};
