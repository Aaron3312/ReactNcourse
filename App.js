import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
	const [enteredGoalText, setEnteredText] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	function goalInputHandler(enteredText) {
		//console.log(enteredText);
		setEnteredText(enteredText);
	}

	function addGoalHandler() {
		console.log(enteredGoalText);
		setCourseGoals((currentGoals) => [...currentGoals, enteredGoalText]);
		console.log(courseGoals);
	}

	return (
		<View style={styles.Appcontainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.TextInput}
					placeholder="Course Goal"
					onChangeText={goalInputHandler}
				/>
				<Button title="ADD Goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.GoalsContainer}>
				{courseGoals.map((goal) => (
					<View style={styles.goalItem} key={goal}>
						<Text style={{ color: "white" }}>{goal}</Text>
					</View>
				))}
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 50,
	},
	goalItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#4f5fa7",
		borderColor: "black",
		borderWidth: 1,
		//round corners
		borderRadius: 10,
	},
	Appcontainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 20,
	},
	dummyText: {
		margin: 16,
		borderWidth: 1,
		borderColor: "blue",
		padding: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 20,
		borderBottomColor: "grey",
		borderBottomWidth: 1,
	},
	TextInput: {
		width: "70%",
		borderColor: "black",
		borderWidth: 1,
		marginRight: 10,
		padding: 10,
	},
	GoalsContainer: {
		flex: 5,
	},
});
