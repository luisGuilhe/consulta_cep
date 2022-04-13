import React, { useState } from 'react';
import {
      View, 
      KeyboardAvoidingView,
      Text,
      TextInput,
      TouchableOpacity,
      TouchableWithoutFeedback,
      Keyboard,
      Platform,
      StyleSheet
} from 'react-native';

export default function App({ navigation }){
  
  const [cep, setCEP] = useState(null);
  
  function buscaEndereco() {
    if (null != cep) {
         navigation.navigate('endereco', {
            cep: cep
        });
    } else {
      alert("Informe um CEP");
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.background}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.conteiner}>
                <TextInput style={styles.textInput} 
                    placeholder='Informe um CEP'
                    placeholderTextColor = "#808080"
                    autoCorrect={false}
                    onChangeText={value => setCEP(value)}
                    keyboardType="numeric"
                />
          
                <TouchableOpacity onPress={buscaEndereco} style={styles.btnSubmitLogin}>
                    <Text style={styles.txtSubmitLogin}>Buscar</Text>
                </TouchableOpacity>  
            </View>
          
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  conteiner:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
  },
  textInput:{
    color:'#000',
    width:'90%',
    marginBottom:10,
    borderRadius:7,
    padding:10,
    borderColor: "#000000",
    borderBottomWidth: 1,
    textAlign:"center"
  },
  btnSubmitLogin:{
    backgroundColor:'blue',
    width:'80%',
    color:'#000',
    alignItems:'center',
    fontSize:30,
    padding:10,
    borderRadius:18,
    marginBottom:15,
    marginTop:10
  },
  txtSubmitLogin:{
    color:'#FFF',
    fontSize:17
  },  
});