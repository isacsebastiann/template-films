import type { CardProps } from "tamagui";
import { Card, H2, Image, Paragraph, XStack } from "tamagui";
import ButtonIcons from "../components/ButtonIcons";
import { XCircle, CheckCircle2 } from "@tamagui/lucide-icons";

export function CardDemo() {
  return (
    <XStack
      $sm={{ flexDirection: "column" }}
      paddingHorizontal="$4"
    >
      <DemoCard
        /*animation="bouncy"*/
        backgroundColor={"#570838"}
        marginTop={25}
        width={350}
        height={150}
        borderRadius={20}
      />
    </XStack>
  );
}

export function DemoCard(props: CardProps) {
  return (
    <Card
      elevate
      size="$5"
      bordered
      {...props}
    >
      <Card.Header padded>
        <H2>FILM 1</H2>
        <Paragraph theme="alt2" color={"#fff"}> DIRECTOR :</Paragraph>
        <Paragraph theme="alt2" color={"#fff"}>TIME :</Paragraph>
        <Paragraph theme="alt2" color={"#fff"}>RATING:</Paragraph>
        <Paragraph theme="alt2" >TRAILER :</Paragraph>
      </Card.Header>

      <Card.Footer padded>
        <XStack flex={1} />
        <ButtonIcons icon={CheckCircle2}/>
        <ButtonIcons icon={XCircle}/>
      </Card.Footer>

      <Card.Background>
        <Image
          resizeMode="cover" 
          alignSelf="center"
          source={{
            width: 350,
            height: 150,
           uri: "https://media.giphy.com/media/lfWPfhYmHhLP2/giphy.gif" 
          }}
        />
      </Card.Background>
    </Card>
  );
}
