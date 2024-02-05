import { Github, Twitter, Swords, Film} from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack
} from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

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
          <H1 textAlign="center" >MOVIE MAKING</H1>
          <Paragraph textAlign="center">
            THE LORD OF THE RINGS
          </Paragraph>
        </YStack>
        <YStack space="$3">
          <Button onPress={() => router.push("/users/testuser")}>
            Go to user page
          </Button>
          <Button onPress={() => router.push("/tabs")}>Go to tabs page</Button>
          <Button onPress={() => router.push("/tabs")} alignSelf="center" icon={Swords} size="$5.5" theme="active" color="#fff" style={{ backgroundColor: '#752D59' }}>
        Begin
      </Button>
        </YStack>
        <YStack space="$5">
          <YGroup
            bordered
            separator={<Separator />}
            theme="green"
          >
            <YGroup.Item>
              <Link
                asChild
                href="https://twitter.com/natebirdman"
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
                href="https://github.com/tamagui/tamagui"
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
