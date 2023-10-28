import { Button } from "@/components";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";

export const Profile = () => {
  return (
    <Button
      color="primary"
      size="md"
      disabled
      startIcon={<FiUser />}
      endIcon={<MdKeyboardArrowLeft />}
    >
      ورود/ثبت نام
    </Button>
  );
};
