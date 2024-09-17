import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: "#0AB6AB",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 24,
  },
});

export default Header;
