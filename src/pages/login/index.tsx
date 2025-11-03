import { useState } from "react";
import { View, Text, Image,Input } from "@tarojs/components";
import "./index.scss";
import SearchBox from "src/components/SearchBox";


const loginPage: React.FC = () => {
  const [username,setUsername] =useState('')

  return (
    <View className="page">
      <Image src=""></Image>
      <View className="login-container">
          <View className="username"></View>
          <View className="password"></View>
      </View>
      <SearchBox/>
    </View>
  );
};

export default loginPage;
