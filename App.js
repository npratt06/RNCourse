import {StyleSheet, View, TextInput, Button, Text, FlatList} from 'react-native';
import {useState} from 'react';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = (enteredGoalText) => {
        if (enteredGoalText === '') return;
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
            id: Math.random().toString(),
            text: enteredGoalText
        }]);
    }

    const deleteGoalHandler = (goalId) => {
        setCourseGoals(currentCourseGoals => currentCourseGoals.filter((goal) => {
            return goal.id !== goalId
        }));
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput addGoalHandler={addGoalHandler}/>
            <View style={styles.goalsContainer}>
                <FlatList data={courseGoals} keyExtractor={(item, index) => {
                    return item.id;
                }}
                          renderItem={itemData => {
                              return <GoalItem text={itemData.item.text} id={itemData.item.id}
                                               onDelete={deleteGoalHandler}/>;
                          }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
    goalsContainer: {
        flex: 5,
    },
});
