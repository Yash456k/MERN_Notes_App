import { create } from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loggedIn: null,
  loginForm: {
    email: "",
    password: "",
  },

  signupForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },

  updateSignupForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },

  login: async () => {
    const { loginForm } = authStore.getState();

    const res = await axios.post("/login", loginForm);
    console.log(res);

    set({
      loggedIn: true,
      loginForm: {
        email: "",
        password: "",
      },
    });
  },

  signup: async () => {
    const { signupForm } = authStore.getState();

    const res = await axios.post("/signup", signupForm);
    console.log(res);

    const res1 = await axios.post("/login", signupForm);
    console.log(res1);

    set({
      loggedIn: true,
      signupForm: {
        email: "",
        password: "",
      },
    });
  },

  checkAuth: async () => {
    try {
      await axios.get("/checkAuth");

      set({ loggedIn: true });
    } catch (error) {
      set({ loggedIn: false });
      console.log("error in checkAUth");
      console.log(error);
    }
  },

  logout: async () => {
    await axios.get("/logout");
    set({ loggedIn: false });
  },
}));

export default authStore;
