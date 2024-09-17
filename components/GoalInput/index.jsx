import React, { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Header from "../Header";

const GoalInput = ({ addGoal, showModal, toggleVisibility }) => {
  const [goalTerm, setGoalTerm] = useState("");
  const onChange = (value) => {
    setGoalTerm(value);
  };

  const addGoalHandler = () => {
    if (!goalTerm?.trim().length) {
      Alert.alert("Error", "Goal name cannot be empty");
      return;
    }
    addGoal(goalTerm);
    onCancel();
  };

  const onCancel = () => {
    setGoalTerm("");
    toggleVisibility();
  };

  return (
    <Modal
      visible={showModal}
      animationType="slide"
      transparent
      statusBarTranslucent
    >
      <Header title="Add Goal" />
      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <TextInput
            value={goalTerm}
            style={styles.inputBox}
            onChangeText={onChange}
            placeholder="Enter Task"
            placeholderTextColor={"whitesmoke"}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="transparent" />
          </View>
          <View style={styles.button}>
            <Button title="+ Add" onPress={addGoalHandler} color="#0AB6AB" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#151515",
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 32,
  },
  inputWrapper: {},
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: 8,
    color: "whitesmoke",
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 32,
  },
  button: {
    flex: 1,
  },
});

export default GoalInput;
