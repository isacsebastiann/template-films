import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Card, H2, Image, Paragraph, XStack } from 'tamagui';
import { Film, Trash } from '@tamagui/lucide-icons';

// Extendiendo CardProps para incluir propiedades adicionales específicas de DemoCard
interface DemoCardProps extends CardProps {
  id: string;
  title: string;
  director: string;
  duration: number;
  yearOfRelease: number;
  genre: string;
  rating: string;
  productionCountry: string;
  awards: string;
  synopsis: string;
}

export function CardDemo() {
}

export function DemoCard({
  id,
  title,
  director,
  duration,
  yearOfRelease,
  genre,
  rating,
  productionCountry,
  awards,
  synopsis,
  ...props
}: DemoCardProps) {
  const navigation = useNavigation();

  return (
    <Card elevate size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>{title}</H2>
        <Paragraph>{`ID: ${id}`}</Paragraph>
        <Paragraph>{`Director: ${director}`}</Paragraph>
        <Paragraph>{`Duration: ${duration} minutes`}</Paragraph>
        <Paragraph>{`Year of Release: ${yearOfRelease}`}</Paragraph>
        <Paragraph>{`Genre: ${genre}`}</Paragraph>
        <Paragraph>{`Rating: ${rating}`}</Paragraph>
        <Paragraph>{`Production Country: ${productionCountry}`}</Paragraph>
        <Paragraph>{`Awards: ${awards}`}</Paragraph>
        <Paragraph>{`Synopsis: ${synopsis}`}</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$20" ml="$2.5" icon={Film} onPress={() => navigation.navigate('tab2')}>EDIT</Button>
        <Button borderRadius="$20" ml="$2.5" icon={Trash} onPress={() => {/* Navegación o acción */}}>DELETE</Button>
      </Card.Footer>
      <Card.Background>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            width: 300,
            height: 175,
            uri: 'https://paraisofriki.es/modules/ph_simpleblog/covers/18.jpg',
          }}
        />
      </Card.Background>
    </Card>
  );
}
