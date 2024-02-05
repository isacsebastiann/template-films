// Card.tsx
import type { CardProps } from "tamagui";
import { Card, H2, Image, Paragraph, XStack } from "tamagui";
import { Pencil, Trash } from '@tamagui/lucide-icons';

export function CardDemo({ imageUri }: { imageUri: string }) {
  return (
    <XStack
      $sm={{ flexDirection: "column" }}
      paddingHorizontal="$4"
      alignItems="center"
    >
      <DemoCard
        backgroundColor={"#570838"}
        marginTop={25}
        width={340}
        height={150}
        borderRadius={20}
        imageUri={imageUri} 
      />
    </XStack>
  );
}

export function DemoCard({ imageUri, ...props }: CardProps & { imageUri: string }) {
  return (
    <Card elevate size="$5" bordered {...props}>
      <Card.Header padded>
        <H2>FILM 1</H2>
        <Paragraph theme="alt2" color={"#fff"}>DIRECTOR:</Paragraph>
        <Paragraph theme="alt2" color={"#fff"}>TIME:</Paragraph>
        <Paragraph theme="alt2" color={"#fff"}>RATING:</Paragraph>
      </Card.Header>

      <Card.Footer padded>
        <XStack flex={1} justifyContent="flex-end" alignItems="center">
          <Pencil/>
          <Trash color="#fff" size={28} />
        </XStack>
      </Card.Footer>

      <Card.Background>
        <Image
          resizeMode="cover" 
          alignSelf="center"
          source={{
            width: 340,
            height: 150,
            uri: imageUri 
          }}
        />
      </Card.Background>
    </Card>
  );
}
