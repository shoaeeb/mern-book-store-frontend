import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderContext = ({ children }: { children: React.ReactNode }) => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!clientId || !domain || !redirectUri) {
    throw new Error("Cannot initialise auth");
  }

  return (
    <Auth0Provider
      clientId={clientId}
      domain={domain}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderContext;
