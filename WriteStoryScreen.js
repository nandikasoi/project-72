import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, ToastAndroid} from 'react-native'; 
import AppHeader from '../components/AppHeader'
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
   render(){
     return(
        <View style={style.textContainer}>
        <AppHeader/>
        <Text style={styles.text}>Story Hub</Text>

        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"pink"}]} 
            onPress={()=>this.goToReadStoryScreen}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.sumbitButton} 
            onPress={this.sumbitstory}
            >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

        </View>
     ) 
   }
}

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.ANDRIOD === "android" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const App = () => {
  const showToast = () => {
    ToastAndroid.show("Your story has been submitted", ToastAndroid.SHORT);
  };

const styles = StyleSheet.create({
    textContainer:{
      backgroundColor: 'blue',
    },
    text:{
      color: 'white',
      padding: 20,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button:{
      justifyContent : 'center',
      alignSelf : 'center',
      borderWidth : 2,
      borderRadius : 15,
      marginTop:200,
      width : 200,
      height:50,
    },
    buttonText : {
      textAlign : 'center',
      color : 'white'
    },
    sumbitButton:{ 
      backgroundColor: '#FBC02D'
      width : 100,
      height : 50
    },
    sumbitButtontext:{ 
      padding : 10, 
      textAlign : 'center',
      fontSize : 20,
      fontWeight : "bold",
      color : 'white'
    },
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    header: {
      fontSize: 36,
      marginBottom: 48
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    }
  });  
}
