import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { Boton1 } from '@/components/boton1'

const ScreenProductos = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>Desconectarse</Text>
      <Boton1 label="Sign Out" link="../" estilo1={GlobalStyles.boton} estilo2={GlobalStyles.botonPulsado}></Boton1>
    </View>
  )
}

export default ScreenProductos