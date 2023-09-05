import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
var cookie = require("@boiseitguru/cookie-cutter");

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  // console.log(cookie.get('session'));
  // const session_cookie = cookie.get('session');
  useEffect(() => {
    console.log('protected route. User :', user);
    if (document.location.pathname.includes === '/pages/login') return;
    if (!user.uid) {
      router.push("/pages/login");
    }
  }, [router, user]);

  // useEffect(() => {
  //   console.log('protected route. Cookie :', session_cookie);
  //   setTimeout(() => {
  //     if(!session_cookie) { router.push("/pages/login"); }
  //   }, 1000)
  // }, [router, session_cookie])
  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;