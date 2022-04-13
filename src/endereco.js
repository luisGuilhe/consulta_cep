import React, {useState} from "react";
import {View , Text, StyleSheet, TouchableOpacity} from "react-native"
import {useNavigation} from "@react-navigation/native";

export default function App( props) {
    const navigation = useNavigation();

    const [ endereco, setEndereco ] = useState(null);
    const [ cep, setCEP ] = useState(props.route.params.cep);

    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

    function voltar() {
        navigation.navigate('busca');
    }

    fetch(endpoint)
      .then(resposta => resposta.json())
        .then( json => {
            const addrres = {
                bairro: json.bairro,
                cep: json.cep,
                complemento: json.complemento,
                ddd: json.ddd,
                gia: json.gia,
                ibge: json.ibge,
                localidade: json.localidade,
                logradouro: json.logradouro,
                siafi: json.siafi,
                uf: json.uf,
            };
            setEndereco(addrres);
        })
        .catch(() => {
          alert('Não foi possível retornar os dados da API');
          voltar();
        });
    return (

        <View style={styles.conteiner}>
           {endereco != null && (
                <View style={styles.conteiner_bloco}>
                    <Text style={styles.txt}>Bairro: {endereco.bairro}</Text>
                    <Text style={styles.txt}>Cep: {endereco.cep} </Text>
                    <Text style={styles.txt}>complemento: {endereco.complemento}</Text>
                    <Text style={styles.txt}>DDD: {endereco.ddd}</Text>
                    <Text style={styles.txt}>GIA: {endereco.gia}</Text>
                    <Text style={styles.txt}>IBGE: {endereco.ibge}</Text>
                    <Text style={styles.txt}>Localidade: {endereco.localidade}</Text>
                    <Text style={styles.txt}>Logradouro: {endereco.logradouro}</Text>
                    <Text style={styles.txt}>SIAFI: {endereco.siafi}</Text>
                    <Text style={styles.txt}>UF: {endereco.uf}</Text>

                    <TouchableOpacity onPress={voltar} style={styles.txt_btn}>
                    <Text style={styles.txt_btn_voltar}>Voltar</Text>
                    </TouchableOpacity>  

                </View>
            )}
        </View>

    );
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#800000",
},
conteiner_bloco:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#778899",
    width:"80%",
    height:"50%",
    borderRadius:30
  },
  txt:{
    paddingBottom:3, 
    fontWeight:"bold", 
    fontSize:20,
    color:"#fff"
  },
  txt_btn:{
    backgroundColor:'#800000',
    width:'80%',
    alignItems:'center',
    fontSize:30,
    padding:10,
    borderRadius:18,
    marginBottom:15,
    marginTop:25
  },
  txt_btn_voltar:{
    color:'#fff',
    fontSize:20,
    fontWeight:"bold", 

  },  
});

