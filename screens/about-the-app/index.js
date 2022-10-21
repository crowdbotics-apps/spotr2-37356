import { RadioGroup } from "react-native-radio-buttons-group";
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const AboutTheAppScreen = params => {
  return <View style={styles.container}>
      <Text style={styles.headingTxt}>Spotr2</Text>
    <RadioGroup style={styles.tIGEwaIP} radioButtons={[{
      id: "0",
      value: "0",
      label: "Yes"
    }, {
      id: "1",
      value: "1",
      label: "No"
    }]} layout="row"></RadioGroup></View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-around"
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12,
    color: "#73e638"
  },
  tIGEwaIP: {
    left: 70,
    top: 123,
    position: "absolute",
    width: 120,
    height: 118
  }
});
export default AboutTheAppScreen;