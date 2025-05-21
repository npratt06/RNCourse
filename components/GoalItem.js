import {Pressable, StyleSheet, Text, View} from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                style={({pressed}) => {
                    return pressed && styles.pressedItem;
                }}
                android_ripple={{color: '#e600ff'}}
                onPress={() => props.onDelete(props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
        fontWeight: 'bold',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.2,
    }
});