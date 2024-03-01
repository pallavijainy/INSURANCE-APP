import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VehicleCard from './shared/VehicleCard'

const Home = () => {
  return (
    <View >
      <VehicleCard name="Toyota Camry" number="ABC123" expirydate="12/03/2000" />
     
    </View>
  )
}

export default Home
