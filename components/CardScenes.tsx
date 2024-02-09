import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Card, H2, Image, Paragraph, XStack } from 'tamagui';
import { Pencil, Trash } from '@tamagui/lucide-icons';
import type { CardProps } from 'tamagui';

interface SceneProps {
  id: number;
  description: string;
  budget: number;
  minutes: number;
  location: string;
  filmingDate: Date;
  keyCharacters: string;
  filmId: number;
}

interface CardSceneProps extends CardProps, SceneProps {}

export function CardDemoScene() {
  return (
    <XStack $sm={{ flexDirection: 'column' }} alignItems="center" paddingHorizontal="$4" space>
      <CardScene
        id={1}
        description="Example scene description"
        budget={100000}
        minutes={5}
        location="New Zealand"
        filmingDate={new Date()}
        keyCharacters="Character A, Character B"
        filmId={101}
        size="$5"
        width={350}
        height={150}
      />
    </XStack>
  );
}

export function CardScene({
  id,
  description,
  budget,
  minutes,
  location,
  filmingDate,
  keyCharacters,
  filmId,
  ...props
}: CardSceneProps) {
  const navigation = useNavigation();

  return (
    <Card elevate size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>Scene One</H2>
        <Paragraph>{`ID: ${id}`}</Paragraph>
        <Paragraph>{`Description: ${description}`}</Paragraph>
        <Paragraph>{`Budget: ${budget}`}</Paragraph>
        <Paragraph>{`Minutes: ${minutes}`}</Paragraph>
        <Paragraph>{`Location: ${location}`}</Paragraph>
        {/*<Paragraph>{`Filming Date: ${filmingDate.toDateString()}`}</Paragraph>*/}
        <Paragraph>{`Key Characters: ${keyCharacters}`}</Paragraph>
        <Paragraph>{`Film ID: ${filmId}`}</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$20" ml="$2.5" icon={Pencil} onPress={() => navigation.navigate('tab4')}>EDIT</Button>
        <Button borderRadius="$20" ml="$2.5" icon={Trash} onPress={() => navigation.navigate('tab4', { sceneId: id })}>DELETE</Button>
      </Card.Footer>
      <Card.Background>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            uri: 'https://variety.com/wp-content/uploads/2023/01/The-Lord-of-the-Rings-Fellowship-of-the-Ring.jpg',
          }}
        />
      </Card.Background>
    </Card>
  );
}
