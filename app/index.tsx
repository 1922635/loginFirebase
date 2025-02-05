import { Boton1 } from "@/components/boton1";
import { GlobalStyles } from "@/theme/GlobalStyles";
import { Link, Redirect } from "expo-router";
import { Text, TextInput, View } from "react-native";


export default function Index() {
  return (
    <View style={GlobalStyles.containerCentrado}>
        <Text style={GlobalStyles.titulo}>Login</Text>
        <TextInput placeholder="Usuario" style={GlobalStyles.textImput}></TextInput>
        <TextInput placeholder="Contraseña" style={GlobalStyles.textImput} secureTextEntry></TextInput>
        <View style={GlobalStyles.viewHorizontal}>
          <Boton1 label="Login" link="./tabs" estilo1={GlobalStyles.boton} estilo2={GlobalStyles.botonPulsado}></Boton1>
          <Boton1 label="Registrarse" link="./tabs" estilo1={GlobalStyles.boton} estilo2={GlobalStyles.botonPulsado}></Boton1>
        </View>
    </View>
    
  )
}
