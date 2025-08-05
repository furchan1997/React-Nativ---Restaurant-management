import { View, Image } from "react-native";

export default function Logo({ _width, _height, alignSelfType = "center" }) {
  return (
    <View>
      <Image
        source={require("../Images/Img-Logo.png")}
        style={{
          width: _width,
          height: _height,
          alignSelf: alignSelfType,
        }}
      />
    </View>
  );
}
