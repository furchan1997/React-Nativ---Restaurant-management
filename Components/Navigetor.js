import { useNavigation } from "@react-navigation/native";
import Btn from "./Btn";
import Layout from "./ui/Layout";
import Header from "./Header";
import Main from "./ui/main";

export default function Navigetor() {
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
