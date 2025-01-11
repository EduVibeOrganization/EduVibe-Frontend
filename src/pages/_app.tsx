
import { Provider } from "react-redux";
import { store } from "@/store";
import "@/app/globals.css";

export default function App({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
