import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { Image } from "react-native";

function GoalInput(props) {
	const [enteredGoal, setEnteredGoal] = useState("");

	function goalInputHandler(enteredText) {
		//console.log(enteredText);
		setEnteredGoal(enteredText);
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoal);
		setEnteredGoal("");
	}

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					source={require("../assets/images/goal.png")}
					style={{ width: 100, height: 100, marginBottom: 30 }}
				/>
				<TextInput
					style={styles.TextInput}
					placeholder="Course Goal"
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.ButtonContainer}>
					<Button title="Add Goal" onPress={addGoalHandler} color="skyblue" />
					<Button title="Cancel" color="red" onPress={props.onCancel} />
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	ButtonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "65%",
		marginTop: 20,
		padding: 24,
	},
	inputContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 20,
		borderBottomColor: "grey",
		borderBottomWidth: 1,
		backgroundColor: "#4f5fa7",
	},
	TextInput: {
		width: "80%",
		borderColor: "black",
		borderWidth: 1,
		marginRight: 10,
		padding: 13,
		color: "black",
		backgroundColor: "#ffffff",
		borderRadius: 10,
	},
});

export default GoalInput;
