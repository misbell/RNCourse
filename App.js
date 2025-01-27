import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {

    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText,]);

  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler}
          placeholder='your course goal'
          style={styles.textInput}
        />
        <Button
          onPress={addGoalHandler}
          title="Add Goal"
        />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => <Text style={styles.goalItem} key={index}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 1,
    padding: 20,
  },
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: 'yellow',
    color: 'black',
  }
});
