import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await store.login();

    navigate("/");
  };

  return (
    <div className="w-full flex justify-center align-center p-4">
      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          onChange={store.updateLoginForm}
          value={store.loginForm.email}
          type="email"
          name="email"
          placeholder="email"
          className="border-black border-2 w-full p-2 my-5 rounded-2xl"
        />

        <input
          onChange={store.updateLoginForm}
          value={store.loginForm.password}
          type="password"
          name="password"
          placeholder="password"
          className="border-black border-2 w-full p-2 my-5 rounded-2xl mb-10"
        />

        <button
          type="submit"
          className="text-3xl mt-6 bg-black p-2 rounded-2xl"
        >
          <div className="text-white">Login</div>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
