import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ModalHandler = ({ toggleVisiblity }) => {
  return (
    <TouchableOpacity onPress={toggleVisiblity}>
      <View
        style={{
          backgroundColor: "#0AB6AB",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          position: "absolute",
          bottom: 32,
          right: 32,
          height: 64,
          width: 64,
        }}
      >
        <Text style={{ color: "whitesmoke", fontSize: 24, fontWeight: "bold" }}>
          +
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModalHandler;
