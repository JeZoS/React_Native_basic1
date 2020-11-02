import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";

export default function GoalInput(props) {
  const [goal, setGoal] = useState("");

  const inputHandler = (text) => {
    setGoal(text);
  };

  const addButton = () => {
    props.forButton(goal);
    setGoal("");
  };

  return (
    <Modal visible={props.vis} animationType="slide">
      <View style={styles.t_B}>
        <TextInput
          placeholder="Add Goal"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={goal}
        />
        <View style={styles.button}>
          <View style={{ width: "40%" }}>
            <Button
              title="CANCLE"
              color="red"
              onPress={props.onCance.bind(this)}
            />
          </View>
          <View style={{ width: "40%" }}>
            <Button title="ADD" onPress={addButton} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  t_B: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    padding: 10,
    width: "80%",
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
  },
});
