import { Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <Text style={styles.goalItem}> {props.text} </Text>
        </Pressable>
    );
};



export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 20,
        padding: 20,
        borderRadius: 6,
        backgroundColor: 'red',
        color: 'white',
    }
});
