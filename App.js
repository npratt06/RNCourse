import {StyleSheet, View, TextInput, Button, Text, FlatList} from 'react-native';
import {useState} from 'react';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    return (
        <View style={styles.appContainer}>
            <GoalInput setCourseGoals={setCourseGoals}/>
            <View style={styles.goalsContainer}>
                <FlatList data={courseGoals} keyExtractor={item => item.key}
                          renderItem={itemData => {
                              return <GoalItem text={itemData.item.text}/>;
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
