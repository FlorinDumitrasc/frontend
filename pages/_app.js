import "../styles/globals.css";
import { Provider, createClient } from "urql";

const backendApi = process.env.NEXT_PUBLIC_BACKEND_API;
const client = createClient({ url: backendApi });

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
