import "../styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
    // <AuthProvider>
    // </AuthProvider>
  );
}

export default MyApp;
