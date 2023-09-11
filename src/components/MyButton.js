import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const MyButton = ({title, textStyle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.buttonContainer}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#5C4B99',
        padding:16,
        borderRadius:20,
    },

    buttonText:{
        fontWeight:'bold',
        color:'#ffffff'
    }
});
