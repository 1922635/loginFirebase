import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { Boton1 } from '@/components/boton1'
import { router } from 'expo-router'

const volver = () => {
  router.replace('../')
}

const ScreenProductos = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>Desconectarse</Text>
      <Boton1 label="Sign Out" onPress={volver} estilo1={GlobalStyles.boton} estilo2={GlobalStyles.botonPulsado}></Boton1>
    </View>
  )
}

export default ScreenProductos