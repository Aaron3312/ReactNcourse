import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

function GoalItem(props) {
	return (
		<View style={styles.GoalsContainer}>
			<View style={styles.goalItem}>
				<Pressable
					android_ripple={{ color: "#ffffff" }}
					onPress={props.onDeleteItem.bind(this, props.id)}
					style={(pressData) => {
						pressData.pressed
							? { backgroundColor: "red" }
							: { backgroundColor: "blue" };
					}}
				>
					<Text style={styles.goalText}>{props.text}</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		marginVertical: 10,
		backgroundColor: "#4f5fa7",
		borderColor: "black",
		borderWidth: 1,
		//round corners
		borderRadius: 10,
	},
	GoalsContainer: {
		flex: 5,
	},
	goalText: {
		color: "white",
		padding: 8,
	},
});
