import { ScrollView } from "react-native";
import Btn from "../Btn";
import Header from "../Header";
import Input from "../Input";
import Layout from "../ui/Layout";
import Main from "../ui/main";

// Sign-up component for signing-up. with LAYOUT ui for generic ui for the screen and MAIN ui for generic ui for the form. and BTN component for generic ui. ScrollView for smooth scrolling and full screen display even when the screen is full

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
