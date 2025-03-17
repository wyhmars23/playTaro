import { useState } from "react";
import { View, Text, Image,Swiper, SwiperItem,Input } from "@tarojs/components";

import logo from "../../assets/手机机器人.png";
import "./index.scss";

const personalCenter: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View className="page">
      <View className="header">
        <View className="left">
          <View className="title1">Hi~ 你好!</View>
          <View className="title2">有什么问题都可以问哦~</View>
        </View>
        <View className="right">
          <Image className="icon" src={logo} mode="heightFix" />
        </View>
      </View>

      <View className="search">
        <Input
          name="value"
          type="text"
          placeholder="输入您的问题..."
          value={inputValue}
        />
      </View>
      <View className="banner">
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
      </View>
      <View className="AiList"></View>
    </View>
  );
};

export default personalCenter;
