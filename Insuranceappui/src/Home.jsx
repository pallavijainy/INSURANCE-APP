import React from "react";
import {  Text, View } from "react-native";
import DataList from "./shared/DataList";
import SearchScreenbanner from "./SearchScreenBanner";


const Home = () => {
  return (
    <View>
      <DataList/>
  <SearchScreenbanner/>
    </View>
  );
};

export default Home;
