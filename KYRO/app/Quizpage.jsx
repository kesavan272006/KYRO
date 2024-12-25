import React, { useState } from "react";
import { SafeAreaView, Text, View, Button, StyleSheet, ScrollView, Alert } from "react-native";

const Quiz = ({ quizinfo }) => {
  const [questionindex, setquestionindex] = useState(0);
  const [selectedoption, setselectedoption] = useState('');
  const [score, setscore] = useState(0);
  const currentqn = quizinfo[questionindex];

  const handleans = (answer) => {
    setselectedoption(answer);
  };

  const handlenextqn = () => {
    if (selectedoption === '') {
      Alert.alert("Please select an option");
      return;
    }
    if (selectedoption === currentqn.correctans) {
      setscore(prevscore => prevscore + 1);
    }else{
      Alert.alert(`Wrong Answer! \nThe correct answer is ${currentqn.correctans}`);
    }

    if (questionindex + 1 < quizinfo.length) {
      setquestionindex(previndex => previndex + 1);
      setselectedoption('');
    } else {
      Showresult();
    }
  };

  function Showresult() {
    Alert.alert(`You have scored ${score+1} out of ${quizinfo.length}`);
    setquestionindex(0);
    setselectedoption('');
    setscore(0);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.out}>{questionindex+1} out of {quizinfo.length}</Text>
        <Text style={styles.question}>{questionindex + 1}.{currentqn.question}</Text>
        {currentqn.options.map((option, index) => (
          <Button
            key={index}
            title={option}
            color={selectedoption === option ? '#8BC34A' : '#FF4081'}
            onPress={() => handleans(option)}
          />
        ))}
        <View style={styles.buttonContainer}>
          <Button title="Next" onPress={handlenextqn} color="#3F51B5" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#303030',
    width: 350,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  question: {
    fontSize: 28,
    fontWeight: '700',
    color: '#F1F1F1',
    marginBottom: 20,
    fontFamily: 'Montserrat',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  out:{
    textAlign:'center',
    color:'orange',
    fontStyle:'italic',
    fontWeight:'bold',
    fontSize:20
  }
});

export default Quiz;