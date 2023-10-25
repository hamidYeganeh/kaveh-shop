import * as Yup from "yup";

export const LoginFormSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  password: Yup.string().min(5, "password must be longer than 5 ").required(),
});
