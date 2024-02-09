import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button, Input, XStack, YStack, Text, Card } from 'tamagui';
import { useRouter } from 'expo-router';
import { SkipBack, Pencil } from '@tamagui/lucide-icons';

export function Characterpost() {
  const router = useRouter();

  return (
    <YStack alignItems="center" padding="$4" space="$4">
      <Card 
        elevation={4}
        width="100%"
        maxWidth={700}
        alignSelf="center"
        paddingHorizontal="$4"
        paddingVertical="$4"
        borderRadius={20}
        backgroundColor="#12222F"
      >
        <Image source={require("../assets/IconsImg/logoo.png")} style={styles.imageStyle} />
        <Input
          placeholder="Description"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <Input
          placeholder="Cost"
          placeholderTextColor="#999"
          keyboardType="numeric"
          style={styles.input}
        />
        <Input
          placeholder="Time"
          placeholderTextColor="#999"
          keyboardType="numeric"
          style={styles.input}
        />
        <Input
          placeholder="Date"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <YStack alignItems="center" width="100%">
          <Button 
            onPress={() => router.push("/tabs/tab3")}
            icon={<Pencil size={16} color="#FFF" />} 
            style={[styles.buttonStyle, styles.createButton]}
          >
            CREATE
          </Button>
          <Button 
            onPress={() => router.push("/tabs/tab3")} 
            style={[styles.buttonStyle, styles.backButton]}
            icon={<SkipBack size={16} color="#FFF" />}
          >
            BACK
          </Button>
        </YStack>
      </Card>
    </YStack>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#12222F',
    color: '#FFF',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 7,
    borderWidth: 1,
    borderColor: '#333',
  },
  buttonStyle: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  createButton: {
backgroundColor: 'transparent',
  borderWidth: 1,
  borderRadius: 100,
  width: '50%',

  borderColor: '#FFF',
  
  },
  backButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#FFF',
    width: '30%',
    marginTop: 0,
  },
});
