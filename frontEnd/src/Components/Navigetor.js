import { useNavigation } from "@react-navigation/native";
import Btn from "./Btn";
import Layout from "./ui/Layout";
import Header from "./Header";
import Main from "./ui/main";

// This is a navigator component.

export default function Navigetor() {
  // A navigation function in an application that accepts the screen name as a parameter.

  const navigation = useNavigation();

  const navigateTo = (page) => {
    navigation.navigate(page);
  };

  return (
    <Layout>
      <Header
        title={"ברוכים הבאים לאפלקציית ניהול מסעדות"}
        descripeion={
          "כאן תוכלו לעשות מגוון פעולות בתור חברי ההנהלה, כמו: הרשמה, התחברות, ניהול עובדים, ניהול מלאי, ניהול תפריטים, חומרי גלם וסחורה."
        }
      />
      <Main>
        <Btn title={"התחבר"} onPress={() => navigateTo("SignIn")} />
        <Btn title={"הרשם"} onPress={() => navigateTo("SignUp")} />
      </Main>
    </Layout>
  );
}
