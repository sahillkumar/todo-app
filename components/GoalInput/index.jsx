import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoal }) => {
  const [goalTerm, setGoalTerm] = useState("");
  const onChange = (value) => {
    setGoalTerm(value);
  };

  const addGoalHandler = () => {
    addGoal(goalTerm);
    setGoalTerm("");
  };

  return (
    <View style={styles.form}>
      <View style={styles.inputWrapper}>
        <TextInput
          value={goalTerm}
          style={styles.inputText}
          onChangeText={onChange}
          placeholder="Enter Goal..."
          placeholderTextColor={"#ccc"}
        />
      </View>
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    gap: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 24,
  },
  inputWrapper: {
    flex: 1,
  },
  inputText: {
    padding: 8,
    color: "#ccc",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default GoalInput;
