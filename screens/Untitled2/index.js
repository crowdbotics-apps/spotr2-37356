import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1,
      justifyContent: "center"
    }} style={styles.LwVrAUoX}><Text style={styles.gUIXdlqB}>Lorem ipsum…</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#1b33a1"
  },
  pHWsyJlc: {
    flex: 1
  },
  rSEXhCIN: {
    flex: 1
  },
  LtjtClQs: {
    flex: 1
  },
  gUIXdlqB: {
    width: 197,
    height: 50,
    lineHeight: 14,
    fontSize: 28,
    borderRadius: 0,
    opacity: 1,
    fontWeight: "700",
    textAlign: "center",
    top: 261.5,
    left: 80,
    position: "absolute"
  },
  LwVrAUoX: {
    width: 357,
    height: 573
  }
});
export default Untitled2;