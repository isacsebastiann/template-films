import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

function OneComponent(props) {
  return (
    <View style={styles.view1}>
      <Image
        resizeMode="auto"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe142c654ce8fd71995cd939cfcff289cc721f7121c68b09b47956f966741851?",
        }}
        style={styles.image1}
      />
      <View style={styles.view2}>
        <Text>
          MOVIE
          <br />
          MAKING
        </Text>
      </View>
      <View style={styles.view3}>
        <Text>Begin</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#350A24",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    color: "#FFF",
    whiteSpace: "nowrap",
    textAlign: "center",
    margin: "0 auto",
    padding: "50px 60px",
  },
  image1: {
    alignSelf: "stretch",
    position: "relative",
    marginTop: 128,
    aspectRatio: "1.14",
  },
  view2: {
    marginTop: 106,
    width: "100%",
    font: "900 48px Inter, sans-serif ",
  },
  view3: {
    borderRadius: 15,
    backgroundColor: "#752D59",
    marginTop: 64,
    width: 199,
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 60px",
    font: "600 20px Inter, sans-serif ",
  },
});


