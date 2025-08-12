import Layout from "../ui/Layout";
import Btn from "../Btn";
import Header from "../Header";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import Main from "../ui/main";
import { Formik, useFormik } from "formik";
import FormikInput from "../FormikInput";
import { useEffect, useState } from "react";
import SuccessMessage from "../ui/successMessage";
import ErrorMessage from "../ui/errorMessage";
import { useAuth } from "../../context/auth.context";

// Sign-in component for signing-in. with LAYOUT ui for generic ui for the screen and MAIN ui for generic ui for the form. and BTN component for generic ui.

export default function SignIn() {
  // const [isValid, setIsValid] = useState(null);
  const { login, error, success } = useAuth();
  return (
    <Formik
      initialValues={{
        bizId: "",
        password: "",
      }}
      onSubmit={async (values) => {
        console.log(values);
        await login(values);
      }}
      validate={() => {}}
    >
      {({ handleSubmit }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{ flex: 1, backgroundColor: "#e6f0fa" }}>
            <Layout>
              <Header
                title={"התחבר למערכת"}
                descripeion={"ההתחברות הינה עבור חבריי ההנהלה בלבד"}
              />
              <Main>
                <FormikInput name={"bizId"} lable={"ח.פ"} />
                <FormikInput
                  name={"password"}
                  lable={"סיסמא"}
                  secureTextEntry
                />
                <Btn title={"התחבר"} onPress={handleSubmit} />

                {error && <ErrorMessage message={error} />}
                {success && <SuccessMessage />}
              </Main>
            </Layout>
          </View>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
}
