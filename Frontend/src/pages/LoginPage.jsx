import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center align-center text-center bg-white text-xl p-4 rounded-2xl">
        <div className="text-4xl p-8">Login Form</div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
