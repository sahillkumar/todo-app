import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Item from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Header from "./components/Header";
import { StatusBar } from "expo-status-bar";
import ModalHandler from "./components/ModalHandler";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleVisibility = () => {
    setShowModal((prev) => !prev);
  };

  const addGoal = (goalTerm) => {
    setGoals((prev) => [
      ...prev,
      {
        key: new Date().getTime(),
        label: goalTerm,
        status: false,
      },
    ]);
  };

  const deleteItem = (item) => {
    const updated = goals.map((goal) => {
      if (goal.key === item.key) return item;
      return goal;
    });
    setGoals(updated);
  };

  const formattedDate = () => {
    const date = new Date();
    const monthIndex = date.getMonth();
    return `${monthNames[monthIndex]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <>
      <StatusBar style="dark" />
      <GoalInput
        addGoal={addGoal}
        showModal={showModal}
        toggleVisibility={toggleVisibility}
      />
      <View style={styles.container}>
        <Header title="Todo List" />
        <View style={styles.content}>
          <View style={styles.dateWrapper}>
            <Text style={styles.today}>Today</Text>
            <Text style={styles.date}>{formattedDate()}</Text>
          </View>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <Item item={item} deleteItem={deleteItem} />
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
        <ModalHandler toggleVisiblity={toggleVisibility} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
  },
  content: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
    gap: 16,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 16,
    right: 16,
    borderCurve: "circular",
    width: 50,
  },
  today: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    marginBottom: 4,
  },
  date: {
    color: "#7D7878",
  },
});
