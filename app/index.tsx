import { Boton1 } from "@/components/boton1";
import { GlobalStyles } from "@/theme/GlobalStyles";
import { Link, Redirect, router } from "expo-router";
import { Alert, Text, TextInput, View } from "react-native";

import { useState } from "react";
import { auth } from "@/Firebaseconfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";


export default function Index() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const logIn = async () => {
    try {
      const user = await (signInWithEmailAndPassword(auth, email, password));
      if (user) router.replace('/tabs/signOut')
    } catch (error:any)
    {
      console.log(error);
      Alert.alert("Inicio de sesión incorrecto", "error.message");
    }
  }

  const register = async () => {
    try {
      const user = await (createUserWithEmailAndPassword(auth, email, password));
    } catch (error:any)
    {
      console.log(error);
      Alert.alert("Error al registrar al usuario", error.message);
    }
  }

  return (
    <View style={GlobalStyles.containerCentrado}>
        <Text style={GlobalStyles.titulo}>Login</Text>
        <TextInput placeholder="Usuario" value={email} onChangeText={setEmail} style={GlobalStyles.textImput}></TextInput>
        <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} style={GlobalStyles.textImput} secureTextEntry></TextInput>
        <View style={GlobalStyles.viewHorizontal}>
          <Boton1 label="Login" estilo1={GlobalStyles.boton} estilo2={GlobalStyles.botonPulsado} onPress={logIn}></Boton1>
          <Boton1 label="Registrarse" estilo1={GlobalStyles.boton} estilo2={GlobalStyles.botonPulsado} onPress={register}></Boton1>
        </View>
    </View>
    
  )
}
