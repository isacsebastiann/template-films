import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import type { CardProps } from 'tamagui';
import { Button, Card, H2, Image, Paragraph, XStack } from 'tamagui';
import { Pencil, Trash } from '@tamagui/lucide-icons';

export function CardDemoScene() {
  return (
    <XStack $sm={{ flexDirection: 'column' }} alignItems="center" paddingHorizontal="$4" space>
      <DemoCard
        animation="bouncy"
        size="$4"
        width={350}
        height={150}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
      />
      <CardScene size="$5" width={350} height={150} />
    </XStack>
  );
}

export function CardScene(props: CardProps) {
  const navigation = useNavigation(); // Usar useNavigation

  return (
    <Card elevate size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>Sony A7IV</H2>
        <Paragraph theme="alt2">Now available</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$20" ml="$2.5" icon={Pencil} onPress={() => navigation.navigate('tab3')}>EDIT</Button>
        <Button borderRadius="$20" ml="$2.5" icon={Trash} onPress={() => navigation.navigate('tab3')}>DELETE</Button>
      </Card.Footer>
      <Card.Background>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            width: 300,
            height: 300,
            uri: 'https://img.freepik.com/vector-gratis/fondo-negro-degradado-lineas-onduladas_23-2149157312.jpg',
          }}
        />
      </Card.Background>
    </Card>
  );
}
