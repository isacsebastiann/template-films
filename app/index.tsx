import React from 'react';
import { Image } from 'react-native';
import { Github, Twitter, Swords } from "@tamagui/lucide-icons";
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
          source={require("../assets/IconsImg/logoo.png")}
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
    <Text textAlign="center" fontSize="50" fontWeight="900">MAKE MOVIE</Text>
    <Paragraph textAlign="center" fontSize="25" theme="blue">"Un Anillo para gobernarlos a todos."
</Paragraph>
  </YStack>
);

const CreateButton = ({ onPress }) => (
  <Button
    onPress={onPress}
    alignSelf="center"
    theme="blue"    color="#333"
    icon={Swords}
    size="$6"
    style={styles.createButton}
  >
    CREATE
  </Button>
);

const SocialLinks = () => (
  <YStack space="$5">
    <YGroup bordered separator={<Separator />} theme="blue">
      <SocialLinkItem href={INSTAGRAM_URL} title="Instagram" icon={Twitter} />
      <SocialLinkItem href={GITHUB_USER_URL} title="Github" icon={Github} />
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
    backgroundColor: '#12222F',
  },
  createButton: {
    backgroundColor: '#E2B550',
  },
};
