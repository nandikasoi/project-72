import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {
      render(){
          return(
              <View style={Styles.container}>
                  <Text>Read Story</Text>
              </View>
          );
      }
}

const styles = StyleSheet.create({
    container:{
      justifyContent : 'center',
      alignSelf : 'center',
      borderWidth : 2,
      borderRadius : 15,
      marginTop:50,
      width : 200,
      height:50,
    }   
  })