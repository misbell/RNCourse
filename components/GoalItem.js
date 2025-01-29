import { Text, StyleSheet } from 'react-native';

function GoalItem(props) {
    return (
        <Text style={styles.goalItem}> {props.text} </Text>
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
