import Input from "../Input";
import Layout from "../ui/Layout";
import Btn from "../Btn";
import Header from "../Header";
import { View } from "react-native";
import Main from "../ui/main";

export default function SignIn() {
  return (
    <View style={{ flex: 1, backgroundColor: "#e6f0fa" }}>
      <Layout>
        <Header
          title={"התחבר למערכת"}
          descripeion={"ההתחברות הינה עבור חבריי ההנהלה בלבד"}
        />
        <Main>
          <Input lable={"אימייל"} />
          <Input lable={"סיסמא"} />
          <Btn title={"התחבר"} onPress={() => {}} />
        </Main>
      </Layout>
    </View>
  );
}
