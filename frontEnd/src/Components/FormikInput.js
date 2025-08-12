import { useFormikContext } from "formik";
import Input from "./Input";

export default function FormikInput({ name, ...otherProps }) {
  const { values, handleChange } = useFormikContext();

  return (
    <Input
      values={values[name]}
      onChangeText={handleChange(name)}
      {...otherProps}
    />
  );
}
