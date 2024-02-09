import { StyleSheet, Image} from "react-native";
import { Button, Input, TextArea, XStack, YStack, Text,H1,H5} from 'tamagui'
import { router } from 'expo-router';
import { SkipBack} from "@tamagui/lucide-icons";


export function Characterpost() {

  return (

    <YStack>
        <H1  style={styles.dashText}>CHARACTER</H1>
        <Image source={require("../assets/IconsImg/movie-recorder.png")} style={styles.imageStyle}/>
   <XStack justifyContent="center" alignItems="center">
        <H1 style={styles.text}>Description</H1>
      </XStack>
      <XStack justifyContent="center" alignItems="center">
        <Input style={{ width: '90%'}} /> 
      </XStack>

      <XStack justifyContent="space-evenly" >
        <H1 style={styles.text}>Cost</H1>
        <H1 style={styles.text}>Stock</H1>
      </XStack>
      <XStack justifyContent="space-evenly">
        <Input style={{ width: '40%'}} /> 
        <Input style={{ width: '40%'}} />
      </XStack>

      <Button
          onPress={() => router.push("/users/testuser")}
          style={styles.buttonStyle}
        > Create Character </Button>
        <Button onPress={() => router.push("/tabs/tab3")} style={styles.buttonStyle} icon={SkipBack} ></Button>   
    </YStack>
    

  )

}

const styles = StyleSheet.create({
    text: {
    color: 'orange',
    fontSize:25
      },
      buttonStyle: {
        alignSelf: 'center',
        backgroundColor: 'transparent', 
        borderWidth: 1.5, 
        borderColor: 'orange',
        borderRadius: 20, 
        padding: 10, 
        marginTop: 25,
      },
      dashText:{
        paddingTop:70,
        fontWeight: 'bold',
        color:  '#DB581D',
      },
      imageStyle: {
        width: 500, 
        height: 350, 
        alignSelf: 'center',
        resizeMode: 'center',
      }
      
  });