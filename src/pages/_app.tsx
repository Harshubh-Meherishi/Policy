import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignerProvider } from "state/signer";
import Layout from "../components/Layout";
import "../styles/globals.css";


const client = new ApolloClient({ cache: new InMemoryCache(), uri: "https://api.studio.thegraph.com/query/46581/policy-marketplace/0.0.1" });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SignerProvider>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ApolloProvider>
    </SignerProvider>
  );
};

export default MyApp;
