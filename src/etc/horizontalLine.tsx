import React from "react";
import { View, StyleSheet } from "react-native";

const HorizontalLine = () => {
  return <View style={[styles.line, {...style}]}></View>;
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default HorizontalLine;
