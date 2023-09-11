import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyButton from '../components/MyButton'

const Start = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Quick Quiz</Text>
        <MyButton buttonStyle={styles.buttonContainer} textStyle={styles.buttonText} title={'START'} onPress={()=>navigation.navigate('Quiz')}/>
    </SafeAreaView>
  )
}

export default Start

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    title:{
        fontSize:50,
        fontWeight:'bold',
        color:'#505050',
        marginBottom:32
    },

    buttonText:{
        fontSize:30
    }
})