/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Toast, Button} from 'native-base';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import loginUser from './loginUser';


export default function LoginScreen({ navigation }) {
    const [email, onChangeEmail] = React.useState()
    const [password, onChangePassword] = React.useState()

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => onChangePassword(text)}
        />
        <Button block success style={styles.button} 
        onPress={() => {loginUser(email, password)}}>

          <Text
            style={styles.buttonText}>
            LOGIN
          </Text>
        </Button>
        <View>
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate('Register')}>
            Don't have an account yet? Sign Up
          </Text>
        </View>
        <Image
          source={require('../../../assets/meetmytypes-logo.png')}
          style={styles.logo}
        />
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  logo: {
    marginVertical: 50,
    height: 100,
    width: 100,
  },
  inputBox: {
    width: '100%',
    height: 50,
    backgroundColor: '#E5E5E5',
    borderColor: 'gray',
    borderRadius: 2,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    marginTop: 5,
    backgroundColor: '#E53765',
  },
  buttonText: {
    color: 'white',
  },
  signUpText: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    color: '#E53765',
  },
});
