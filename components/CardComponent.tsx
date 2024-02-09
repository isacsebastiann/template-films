import React from "react";
import { Check, Trash2 } from '@tamagui/lucide-icons';
import {
  Button,
  Card,
  H2,
  Image,
  Paragraph,
  Text,
  YStack
} from "tamagui";

interface CardComponentProps {
  title: string;
  subtitle1: string;
  subtitle2: string;
  id: string;
  name: string;
  actorName: string;
  race: string;
  alignment: string;
  backstory: string;
  appearanceInFilms: string;
  cost: number;
  stock: number;
  sceneId: number;
  imageSrc: string; 
  onEdit: () => void;
  onDelete: () => void;
}

const CardHeader: React.FC<Omit<CardComponentProps, 'onEdit' | 'onDelete' | 'imageSrc'>> = ({
  title,
  subtitle1,
  subtitle2,
  id,
  name,
  actorName,
  race,
  alignment,
  backstory,
  appearanceInFilms,
  cost,
  stock,
  sceneId,
}) => (
  <>
    <H2>{title}</H2>
    <Paragraph theme="alt2"><Text>{subtitle1}</Text></Paragraph>
    <Paragraph theme="alt2"><Text>{subtitle2}</Text></Paragraph>
    <Paragraph theme="alt2"><Text>{`ID: ${id}`}</Text></Paragraph>
    <Paragraph theme="alt2"><Text>{`Name: ${name}`}</Text></Paragraph>
    <Paragraph theme="alt2"><Text>{`Actor Name: ${actorName}`}</Text></Paragraph>
    <Paragraph theme="alt2"><Text>{`Race: ${race}`}</Text></Paragraph>
    <Paragraph theme="alt2"><Text>{`Alignment: ${alignment}`}</Text></Paragraph>
    <Paragraph theme="alt2"><Text>{`Backstory: ${backstory}`}</Text></Paragraph>
    <Paragraph theme="alt2"><Text>{`Appearance in Films: ${appearanceInFilms}`}</Text></Paragraph>
    <Paragraph theme="alt2"><Text>{`Cost: ${cost}`}</Text></Paragraph>
    <Paragraph theme="alt2"><Text>{`Stock: ${stock}`}</Text></Paragraph>
    <Paragraph theme="alt2"><Text>{`Scene ID: ${sceneId}`}</Text></Paragraph>
  </>
);

const CardFooter: React.FC<Pick<CardComponentProps, 'onEdit' | 'onDelete'>> = ({ onEdit, onDelete }) => (
  <YStack
    space="$2"
    padding="$2"
    alignItems="flex-end"
    justifyContent="flex-end"
    flexDirection="row"
  >
    <Button icon={Check} borderRadius="$10" onPress={onEdit}>Escoger</Button>
    <Button icon={Trash2} borderRadius="$10" onPress={onDelete}>Delete</Button>
  </YStack>
);

const CardComponent: React.FC<CardComponentProps> = ({
  onEdit,
  onDelete,
  imageSrc,
  ...headerProps
}) => (
  <Card
    elevate
    size="$3"
    bordered
    theme="pink"
    width="95%"
    height="auto" 
    paddingBottom="$2"
    margin="$2"
  >
    <Card.Header padded>
      <CardHeader {...headerProps} />
    </Card.Header>
    <Card.Background>
      <Image
        resizeMode="contain"
        alignSelf="center"
        source={{ uri: imageSrc }} 
        style={{ width: '100%', height: 200 }} 
      />
    </Card.Background>
    <Card.Footer>
      <CardFooter onEdit={onEdit} onDelete={onDelete} />
    </Card.Footer>
  </Card>
);

export default CardComponent;
