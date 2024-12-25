import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { TouchableOpacity } from 'react-native';
const Index = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/Kyrolatest.jpg')} />
      
      <TouchableOpacity style={styles.touchbutton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.start}>Start The Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchbutton} onPress={() => navigation.navigate('about')}>
        <Text style={styles.start}>About Kyro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(17, 18, 18)',
    alignItems: 'center',
  },
  image: {
    height: 400,
    width: 400,
    resizeMode: 'contain',
    marginTop: 100,
  },
  touchbutton:{
    backgroundColor:'orange',
    height:80,
    width:200,
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:50,
    marginTop:10,
  },
  start:{
    color:'black',
    fontStyle:'italic',
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
  }
});

export default Index;