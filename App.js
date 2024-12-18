import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import api from './src/services/api';

export default function App(){
  const[cep, setCep] = useState('');

  return(

    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center'}}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput
        style={styles.input}
        placeholder='Ex: 12345000'
        value={cep}
        onChangeText={(texto)=>setCep(texto)}
        keyboardType="numeric"
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#1d75cd'}]}>
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#cd3e1d'}]} >
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: 123 </Text>
        <Text style={styles.itemText}>Logradouro: 123 </Text>
        <Text style={styles.itemText}>Bairro: 123 </Text>
        <Text style={styles.itemText}>Cidade: 123 </Text>
        <Text style={styles.itemText}>Estado: 123 </Text>

      </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
text:{
  marginTop:25,
  marginBottom:15,
  fontSize:25,
  fontWeight: 'bold'
},
input:{
  backgroundColor: "#fff",
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius:5,
  width:'90%',
  padding:10,
  fontSize:18
},
areaBtn:{
  alignItems:'center',
  flexDirection:'row',
  marginTop:15,
  justifyContent:'space-around'
},
btn:{
  height:50,
  justifyContent: 'center',
  alignItems:'center',
  padding:15,
  borderRadius:5,
},
btnText:{
  fontSize:22,
  color:'#fff'
},
resultado:{
  flex:1,
  justifyContent: 'center',
  alignItems:'center'
},
itemText:{
  fontSize:22
}

});
