import { Button } from "@/components";
import { IButtonTypes } from "@/components/Kit/Button/Button.types";
import { useFormikContext } from "formik";
import { FC } from "react";

export const FormSubmitButton: FC<IButtonTypes> = (props) => {
  const { submitForm, isSubmitting, resetForm, setSubmitting } =
    useFormikContext();

  function handleSubmit() {
    submitForm();
    setSubmitting(false);
  }
  return (
    <Button type="submit" onClick={handleSubmit}>
      {isSubmitting ? "loading..." : props.children}
    </Button>
  );
};
