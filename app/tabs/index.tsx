import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { Link } from 'expo-router'

const ScreenPrincipal = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Link style={GlobalStyles.titulo} href={'./'}>Log Out</Link>
    </View>
  )
}

export default ScreenPrincipal