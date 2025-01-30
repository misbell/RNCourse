import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function addGoalHandlerProxy() {
        props.onAddGoal(enteredGoalText);
        // setEnteredGoalText('');
    }


    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    return (
        <Modal>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={goalInputHandler}
                    placeholder='your course goal'
                    style={styles.textInput}
                    value={enteredGoalText}
                />
                <Button
                    onPress={addGoalHandlerProxy}
                    title='Add Goal'
                />
                <Button title='Cancel'
                    color='red'
                    onPress={props.onCancel}>
                </Button>
            </View>
        </Modal>
    );

};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',

    },
    textInput: {
        borderWidth: 1,
        borderColor: 'blue',
        width: '80%',
        marginRight: 8,
    },
});