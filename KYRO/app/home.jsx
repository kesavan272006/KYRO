import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Quiz from './Quizpage';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const quizinfo = [
  {
    question: "What is the capital city of Canada?",
    options: ["Vancouver", "Toronto", "Ottawa", "Montreal"],
    correctans: "Ottawa"
  },
  {
    question: "What is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correctans: "Nile",
  },
  {
    question: "Which technology is primarily used to make phone calls over the internet?",
    options: ["Bluetooth", " Wi-Fi", "VoIP", "NFC"],
    correctans: "VoIP",
  },
  {
    question: "Which programming language was created by Bjarne Stroustrup?",
    options: ["Python", "JavaScript", "C++", "Ruby"],
    correctans: "C++",
  },
  {
    question: "Which is the only country in the world that does not have a river?",
    options: ["Saudi Arabia", "Egypt", "Vatican City", "Kuwait"],
    correctans: "Saudi Arabia",
  },
  {
    question: "What was the first artificial Earth satellite launched by the Soviet Union in 1957?",
    options: [" Luna 1", "Sputnik 1", "Soyuz 1", "Vostok 1"],
    correctans: "Sputnik 1",
  },
  {
    question: "Which country invented the first modern paper money?",
    options: ["India", "China", "Japan", "Greece"],
    correctans: "China",
  },
  {
    question: "What was the original name of New York City?",
    options: ["New Amsterdam", " New Paris", "New Berlin", "New Derbin"],
    correctans: "New Amsterdam",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", " South Korea", "Thailand"],
    correctans: "Japan",
  },
  {
    question: "Which planet has the shortest day in the solar system?",
    options: ["Venus", "Jupiter", "Mercury", "Mars"],
    correctans: "Jupiter",
  },
  {
    question: "Who was the first African-American woman to win a Nobel Prize in Literature?",
    options: ["Maya Angelou", "Toni Morrison", " Alice Walker", "Zora Neale Hurston"],
    correctans: "Toni Morrison",
  },
  {
    question: "Which country was the first to grant women the right to vote?",
    options: ["United States", "New Zealand", "Sweden", "Australia"],
    correctans: "New Zealand",
  },
  {
    question: "Which element has the highest atomic number found naturally on Earth?",
    options: ["Uranium", "Plutonium", "Thorium", "Neptunium"],
    correctans: "Uranium",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1909", "1912", "1915", "1918"],
    correctans: "1912",
  },
  {
    question: "Which book holds the record for the most translated book in the world?",
    options: ["The Bible", "Don Quixote", "Harry Potter and the Philosopher’s Stone", "The Little Prince"],
    correctans: "The Bible",
  },
  {
    question: "What was the first computer virus created in 1986?",
    options: ["Brain", "Morris Worm", "Cascade", "Stuxnet"],
    correctans: "Brain",
  },
  {
    question: "What was the first city in the world to reach a population of one million?",
    options: ["Rome", "Baghdad", " New York", "Shanghai"],
    correctans: "Baghdad",
  },
  {
    question: "What is the only country that has hosted the Summer Olympics three times in the 20th century?",
    options: ["Germany", "United States", "France", "United Kingdom"],
    correctans: "United States",
  },
  {
    question: "Which human organ has the ability to regenerate to some extent if damaged?",
    options: ["Liver", "Heart", "Lungs", "Brain"],
    correctans: "Uranium",
  },
  {
    question: "Which cricketer holds the record for the highest individual score in a single Test innings, without hitting a single six?",
    options: ["Sachin Tendulkar", "Gary Kirsten", "Chris Rogers", "Alastair Cook"],
    correctans: "Gary Kirsten",
  },
];

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>Quiz Time!</Text>
        <Quiz quizinfo={quizinfo} />
        <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate('Index')}>
            <Text style={styles.text}>Return Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#212121',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 50,
    color: '#FF5722',
    fontFamily: 'Poppins',
  },
  touch:{
    height:70,
    width:200,
    backgroundColor:'orange',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:50,
  },
  text:{
    color:'black',
    fontWeight:'bold',
    fontStyle:'italic',
    fontSize:20,
    textAlign:'center'
  }
});

export default Home;