import React from "react";
import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomLinearGradient from "./shared/CustomLinearGradient";
const welcomeimage = require("../assets/insuranceimg1.png");

const Login = () => {
  return (
    <View className="bg-white h-full">
      <View className="mx-4">
        <Text className="text-[30px] text-[#fd8e3d] mt-2 text-center italic">
          Welcome to Policy Sathi
        </Text>

        <Image
          source={welcomeimage}
          className="w-[100%] h-[150px] rounded-xl mt-5"
        />
        <Text className="text-[#95999F] mt-3">
          Hello!! fellows enter your Mobile number to unlock all the benefits of Policy
          Sathi 
        </Text>
        <View className="mt-5 mb-5 m-auto w-[80%]">
          <Text className="text-[#95999F] mt-5">Mobile Number</Text>
          <TextInput keyboardType="numeric" className=" h-10 rounded-[5px] border border-[#95999F]"/>
          <Text className="text-[#95999F] mt-2">Username</Text>
          <TextInput className=" h-10 rounded-[5px] border border-[#95999F]"/>
        </View>
        <CustomLinearGradient focusColor={true} style={"p-3 rounded-xl w-[200px] m-auto mt-5"}>
        <TouchableOpacity ><Text className="text-[20px] text-center text-[#fff]">Submit</Text></TouchableOpacity>
        </CustomLinearGradient>
      </View>
    </View>
  );
};

export default Login;
