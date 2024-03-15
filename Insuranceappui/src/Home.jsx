import React from "react";
import {  Button, Text, View } from "react-native";
import DataList from "./shared/DataList";
import SearchScreenbanner from "./SearchScreenBanner";


const Home = ({navigation}) => {
  return (
    <View>
      <Button title="touch" onPress={()=>navigation.navigate("contact")}/>
      <DataList/>
  <SearchScreenbanner/>
    </View>
  );
};

export default Home;
