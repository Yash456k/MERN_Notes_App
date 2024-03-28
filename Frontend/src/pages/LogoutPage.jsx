import { useEffect } from "react";
import authStore from "../stores/authStore";
import { useCookies } from "react-cookie";

const LogoutPage = () => {
  const store = authStore();
  const [_, setCookie, removeCookie] = useCookies(["Auth"]);

  useEffect(() => {
    store.logout();
    removeCookie("cookie-name", { path: "/" });
  }, []);
  return <div>You are now logged out</div>;
};

export default LogoutPage;
