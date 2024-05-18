import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderContext from "./auth/Auth0Provider.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderContext>
        <QueryClientProvider client={queryClient}>
          <App />
          <Toaster visibleToasts={1} position="top-right" richColors />
        </QueryClientProvider>
      </Auth0ProviderContext>
    </BrowserRouter>
  </React.StrictMode>
);
