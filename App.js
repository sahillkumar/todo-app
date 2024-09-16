import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Item from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (goalTerm) => {
    setGoals((prev) => [
      ...prev,
      {
        key: new Date().getTime(),
        label: goalTerm,
      },
    ]);
  };

  const deleteItem = (key) => {
    setGoals((prev) => prev.filter((item) => item.key !== key));
  };

  return (
    <View style={styles.container}>
      <GoalInput addGoal={addGoal} />
      <FlatList
        style={styles.listWrapper}
        data={goals}
        renderItem={({ item }) => <Item item={item} deleteItem={deleteItem} />}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 24,
    backgroundColor: "#333",
  },
  listWrapper: {
    flex: 4,
    backgroundColor: "#333",
  },
});
