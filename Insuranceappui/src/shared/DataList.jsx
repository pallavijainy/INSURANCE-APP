import React from 'react'
import { ScrollView } from 'react-native'
import VehicleCard from './VehicleCard';

const DataList = () => {
    const vehicleData = [
        {
          vehicleNumber: "ABC123",
          vehicleName: "Toyota Camry",
          insuranceValidUpto: "2023/05/15"
        },
        {
          vehicleNumber: "XYZ456",
          vehicleName: "Honda Civic",
          insuranceValidUpto: "2023/09/30"
        },
        {
          vehicleNumber: "DEF789",
          vehicleName: "Ford Mustang",
          insuranceValidUpto: "2023/07/20"
        },
        {
          vehicleNumber: "GHI012",
          vehicleName: "Chevrolet Silverado",
          insuranceValidUpto: "2023/12/10"
        },
        {
          vehicleNumber: "JKL345",
          vehicleName: "BMW X5",
          insuranceValidUpto: "2023/11/05"
        }
      ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
      {vehicleData.map((el)=>(

    <VehicleCard {...el}/>
      ))}
    </ScrollView>
  )
}

export default DataList
