"use client";
import SignIn from "@/pages/sign-in";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <SignIn />
      </div>
      </Provider>
  );
}
