import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button, Pressable } from "react-native";
import { useState } from "react";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}

	function endAddGoalHandler() {
		setModalIsVisible(false);
	}

	function addGoalHandler(enteredGoalText) {
		console.log(enteredGoalText);
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoalText, key: Math.random().toString() },
		]);
		console.log(courseGoals);
		endAddGoalHandler();
	}

	function deleteGoalHandler(goalId) {
		console.log("To be deleted: ");
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.key !== goalId);
		});
	}

	return (
		<View style={styles.Appcontainer}>
			<Button title="Add Goal" color="#df9bf9" onPress={startAddGoalHandler} />
			{modalIsVisible && (
				<GoalInput
					onAddGoal={addGoalHandler}
					visible={modalIsVisible}
					onCancel={endAddGoalHandler}
				/>
			)}
			<View style={styles.GoalsContainer2}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return (
							<GoalItem
								text={itemData.item.text}
								id={itemData.item.key}
								onDeleteItem={deleteGoalHandler}
							></GoalItem>
						);
					}}
					keyExtractor={(item, index) => {
						return item.key;
					}}
				></FlatList>
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

	Appcontainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 20,
		backgroundColor: "#4f5fa7",
	},
	dummyText: {
		margin: 16,
		borderWidth: 1,
		borderColor: "blue",
		padding: 16,
	},

	GoalsContainer2: {
		flex: 5,
	},
});
