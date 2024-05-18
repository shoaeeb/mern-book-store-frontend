import { useCreateUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallBack = () => {
  const navigate = useNavigate();
  const hasCreatedUser = useRef(false);
  const { user } = useAuth0();
  const { createUser } = useCreateUser();

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [hasCreatedUser, createUser, navigate]);

  //TODO : Skeleton
  return <div>Loading...</div>;
};

export default AuthCallBack;
