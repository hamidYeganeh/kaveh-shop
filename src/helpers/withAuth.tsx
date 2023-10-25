import { AuthContext } from "@/contexts";
import { useAuth } from "@/hooks";
import { useContext } from "react";

type IWithAuthComponentProps = any;

type IWithAuthRolesProps = "super-admin" | "admin" | "user";

const WithAuth = (
  Component: IWithAuthComponentProps,
  roles: IWithAuthRolesProps
) => {
  const AuthenticatedComponent = (props: any) => {
    // const { isAuthenticated } = useContext(AuthContext);
    const isAuthenticated = true
    if (!isAuthenticated) {
    // if (roles !== "super-admin") {
      throw new Error("No Access");
    }
    return <Component {...props} />;
  };
  return AuthenticatedComponent;
};

export default WithAuth;
