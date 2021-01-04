import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import firebase from "firebase";

export default class WelcomeScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            emailid: '',
            password: '',
        }
        
    }


    loginfunction = (email, password)=>{

        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
            return alert("succesfully loged in")
        })
        .catch((error)=>{
            var errorcode = error.code;
            var errormessage = error.message;
            return alert(errormessage);
        })
    }


    signupfunction = (email, password)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then((response)=>{
            return alert("user added succesfully")
        }).catch((error)=>{
            var errorcode = error.code;
            var errormessage = error.message;
            return alert(errormessage);
        })
    }


  render(){
      return (
        <View style={styles.container}>
            <TextInput
                placeholder="enter your email"
                onChangeText={(text)=>{
                    this.setState({
                        emailid: text
                    })
                }}
            ></TextInput>
            <TextInput
                placeholder="enter your password"
                secureTextEntry={true}
                onChangeText={(text)=>{
                    this.setState({
                        password: text
                    })
                }}
            ></TextInput>
            <TouchableOpacity 
            
            onPress={()=>{this.loginfunction(this.state.emailid, this.state.password)}}
            >
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            onPress={
                ()=>{this.signupfunction(email, password)}
            }>

                <Text>
                    Sign Up
                </Text>

            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
