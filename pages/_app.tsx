import "../styles/global.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppContextProvider } from "hooks/useAppContext";
const queryClient = new QueryClient();

export default function YouSetApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </QueryClientProvider>
  );
}
