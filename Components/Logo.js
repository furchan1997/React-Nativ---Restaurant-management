import { View, Image } from "react-native";

// This is a custom LOGO element, along with the option for a variable style when you move it to the area of the element where the logo itself will be.

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
