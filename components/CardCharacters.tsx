import React from 'react';
// Importaciones necesarias de Tamagui y expo-router
import { Card, H2, Paragraph, XStack, Button, Image } from 'tamagui';
import { UserRoundCheck, Trash, Pencil } from '@tamagui/lucide-icons';
import { useRouter } from "expo-router";
import type { CardProps } from 'tamagui';

export function CardCharacter(props: CardProps) {
  const router = useRouter(); // Usar useRouter para la navegación

  // Funciones para manejar la navegación
  const handleButtonClick = () => {
    router.push("/components/Forms"); 
  };
  
  const handleCardClick = () => {
    router.push("/tabs/tab2"); // Navegar a la pestaña 2
  };

  // Función para navegar al DialogDemo
  const navigateToDialogDemo = () => {
    router.push("../components/DialogDemo"); // Ajusta esta ruta según tu configuración
  };

  return (
    <Card elevate size="$4" bordered {...props} onPress={handleCardClick}>

      <Card.Header padded>
        <H2>Legolas</H2>
        <Paragraph theme="alt2">Now available</Paragraph>
        <Paragraph>id</Paragraph>
        <Paragraph>name</Paragraph>
        <Paragraph>actor_name</Paragraph>
        <Paragraph>race</Paragraph>
        <Paragraph>alignment</Paragraph>
        <Paragraph>backstory</Paragraph>
        <Paragraph>appearance_in_films</Paragraph>
        <Paragraph>cost</Paragraph>
        <Paragraph>stock</Paragraph>
        <Paragraph>scene_id</Paragraph>

      </Card.Header>

      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$20" ml="$2.5" icon={UserRoundCheck} onPress={handleButtonClick}>SELECT</Button>
        <Button icon={Pencil} onPress={navigateToDialogDemo}></Button>
      </Card.Footer>

      <Card.Background>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            width: 100,
            height: 100,
            uri: 'https://static.wikia.nocookie.net/bibliotecadelatierramedia/images/c/c0/Legolas.jpg/revision/latest?cb=20140322121446&path-prefix=es',
          }}
        />
      </Card.Background>

    </Card>
  );
}
