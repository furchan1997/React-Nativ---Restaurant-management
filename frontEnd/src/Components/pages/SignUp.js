import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Btn from "../Btn";
import Header from "../Header";
import Layout from "../ui/Layout";
import Main from "../ui/main";
import { Form, Formik, useFormik } from "formik";
import FormikInput from "../FormikInput";
import { useHeaderHeight } from "@react-navigation/elements";
import { useAuth } from "../../context/auth.context";
import SuccessMessage from "../ui/successMessage";
import ErrorMessage from "../ui/errorMessage";
// Sign-up component for signing-up. with LAYOUT ui for generic ui for the screen and MAIN ui for generic ui for the form. and BTN component for generic ui. ScrollView for smooth scrolling and full screen display even when the screen is full

export default function SignUp() {
  const headerHeight = useHeaderHeight();
  const { error, loading, success, signUp } = useAuth();

  return (
    <Formik
      initialValues={{
        fullName: "",
        bizName: "",
        bizId: "",
        bizPhone: "",
        email: "",
        password: "",
        address: {
          country: "",
          city: "",
          street: "",
          streetNumber: "",
        },
      }}
      onSubmit={async (values) => {
        console.log(values);
        await signUp(values);
      }}
      validate={() => {}}
    >
      {({ handleSubmit }) => (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={headerHeight || 0}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
          >
            <Layout>
              <Header title="הרשמה למערכת" />
              <Main>
                {error && <ErrorMessage message={error} />}
                {success && <SuccessMessage />}
                <FormikInput name="fullName" lable="שם מלא" />
                <FormikInput name="bizName" lable="שם העסק" />
                <FormikInput name="bizId" lable="ח.פ העסק" />
                <FormikInput name="bizPhone" lable="טלפון העסק" />
                <FormikInput name="email" lable="אימייל" />
                <FormikInput name="password" lable="סיסמה" secureTextEntry />

                {/* שדות כתובת */}
                <FormikInput name="address.country" lable="מדינה" />
                <FormikInput name="address.city" lable="עיר" />
                <FormikInput name="address.street" lable="רחוב" />
                <FormikInput name="address.streetNumber" lable="מספר" />
                <Btn title="הרשם" onPress={handleSubmit} />
              </Main>
            </Layout>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}
