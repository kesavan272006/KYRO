import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native'
const About = () => {
  const navigation = useNavigation(); 
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Image style={styles.image} source={require('../assets/Kyrolatest.jpg')}></Image>
            <Text style={styles.heading}>About This App</Text>
            <Text style={styles.para}>Kyro is a React Native-based mobile quiz application that delivers an engaging and responsive user experience. The app leverages React Navigation for seamless transitions between the index and quiz screens. Kyro dynamically manages quiz data, including questions, options, and correct answers, by passing props between components. State management is powered by React's useState hook, which tracks the current question, selected answer, and score. Kyro ensures optimal performance through efficient component rendering and state updates. Instant feedback is provided through alerts, and the UI is tailored for mobile responsiveness with a sleek, modern design.</Text>
            <Text style={styles.para}>Engineered and Developed by</Text>
            <Text style={styles.para2}>Kesavan</Text>
            <Text style={styles.para}>B.Tech CSE'28</Text>
            <Text style={styles.para}>@Indian Institute of Informational Technology, Kottayam</Text>
            <Image style={styles.kesavan} source={require('../assets/Kesavan.jpg')}></Image>
            <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate('Index')}>
                <Text style={styles.text}>Return Back to Home</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        display:'flex',
        flex:1,
        justifyContent:'center'
    },
    heading:{
        color:'orange',
        fontSize:40,
        fontStyle:'italic',
        fontWeight:'bold',
        textAlign:'center'
    },
    para:{
        textAlign:'center',
        color:'orange',
        fontWeight:'600',
        fontStyle:'italic',
        marginTop:20,
        fontSize:25,
        marginLeft:5,
        marginRight:5
    },
    touch:{
        backgroundColor:'orange',
        height:70,
        width:200,
        alignSelf:'center',
        justifyContent:'center',
        marginTop:40,
        borderRadius:50
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        fontStyle:'italic'
    },
    image:{
        height:100,
        width:300,
        marginTop:10,
        marginBottom:10,
        alignSelf:'center'
    },
    para2:{
        textAlign:'center',
        color:'#FF6347',
        fontWeight:'bold',
        fontSize: 30,

    },
    kesavan:{
        height:200,
        width:200,
        alignSelf:'center',
        borderRadius:100,
    }
})