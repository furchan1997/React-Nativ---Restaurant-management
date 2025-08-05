import { ScrollView } from "react-native";
import Btn from "../Btn";
import Header from "../Header";
import Input from "../Input";
import Layout from "../ui/Layout";
import Main from "../ui/main";

export default function SignUp() {
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: "white" }}>
      <Layout>
        <Header
          title={"הרשמה למערכת"}
          descripeion={
            "ההרשמה למערכת מיודעת עבור מנהל/בעל המסעדה בלבד, מסעדה עם חפ תוכל להרשם פעם אחת"
          }
        />
        <Main>
          <Input lable={"שם מלא"} />
          <Input lable={"שם העסק"} />
          <Input lable={"ח.פ העסק"} />
          <Input lable={"סיסמא"} />
          <Input lable={"אימייל"} />
          <Input lable={"מדינה"} />
          <Input lable={"עיר"} />
          <Input lable={"רחוב"} />
          <Input lable={"מספר"} />

          <Btn title={"הרשם"} onPress={() => {}} />
        </Main>
      </Layout>
    </ScrollView>
  );
}
