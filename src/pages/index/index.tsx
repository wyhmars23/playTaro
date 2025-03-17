import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
// import SearchBox from '../../components/SearchBox'
import cartoon from "../../assets/头像 女孩.png";
import Card from "../../components/Card";
import { useState } from "react";
import { Input, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
// import { AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

const SearchBox = ({
  placeholder = "请输入搜索内容",
  onSearch,
}: {
  placeholder?: string;
  onSearch?: (query: string) => void;
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.detail.value);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    } else {
      Taro.navigateTo({ url: `/pages/searchResult/index?query=${value}` });
    }
  };

  return (
    <View className="search-box">
      <Input
        className="search-input"
        type="text"
        value={value}
        placeholder={placeholder}
        onInput={handleChange}
      />
      {value && (
        <Button className="clear-btn" onClick={handleClear}>
          ×
        </Button>
      )}
      <Button className="search-btn" onClick={handleSearch}>
        搜索
      </Button>
    </View>
  );
};

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="<%= pageName %>">
        <Text>Hello world!</Text>
        {/* <AtButton type='primary'>I need Taro UI</AtButton> */}
        <Text>Taro UI 支持 Vue 了吗？</Text>
        {/* <AtButton type='primary' circle={true}>支持</AtButton> */}
        <Text>共建？</Text>
        {/* <AtButton type='secondary' circle={true}>来</AtButton> */}
        <SearchBox />
        <Card
          url={cartoon}
          title="标题"
          label="标签"
        />
      </View>
    );
  }
}
