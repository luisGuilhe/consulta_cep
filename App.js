import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

const UselessTextInput = () => {
  
  const [number, onChangeNumber] = React.useState(null);

  function consultaEndereco () {
    console.log("number -> " + number)
  }  
  

  return (
    <SafeAreaView style={styles.conteiner}>
      <TextInput style={styles.textInput}
        placeholder='Password'
        placeholderTextColor = "#808080"
        autoCorrect={false}
        onChangeText={value => onChangeNumber(value)}
      />

      <Button
        onPress={consultaEndereco}
        title="Buscar Endereco"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"gray"
  },
  textInput:{
    color:'#000',
    width:'40%',
    marginBottom:10,
    borderRadius:7,
    padding:10,
    borderColor: "#000000",
    borderBottomWidth: 1
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    borderRadius:25,
    borderColor: "#000000",
    borderBottomWidth: 1
  },
});

export default UselessTextInput;