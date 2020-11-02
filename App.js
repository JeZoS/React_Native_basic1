import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [isAdd,setIsAdd] = useState(false)
  const goalHandler = (goali) => {
    setAllGoals((allGoals) => [
      ...allGoals,
      { key: Math.random().toString(), value: goali },
    ]);
    setIsAdd(false)
  };

  const goalRemover = id => {
    setAllGoals(allGoals=>{
      return allGoals.filter((goals)=> goals.key !== id)
    })
  }

  const onCancel = () => {
    setIsAdd(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add something" onPress={()=>setIsAdd(true)}/>
      <GoalInput vis={isAdd} onCance={onCancel} forButton={goalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={allGoals}
        renderItem={(itemdata) => (
          <GoalItem id={itemdata.item.key} onDelete={goalRemover} title={itemdata.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
