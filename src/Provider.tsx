import { Auth0Provider, Auth0ProviderOptions } from "@auth0/auth0-react";

const authProviderOptions: Auth0ProviderOptions = {
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  authorizationParams: {
    redirect_uri: window.location.origin,
    // audience: `${process.env.REACT_APP_AUTH0_AUDIENCE ?? 'https://securzy.us.auth0.com/api/v2/'}`,
    scope: "openid profile email offline_access",
    useRefreshTokens: true,
    cacheLocation: "localstorage",
  },
  useRefreshTokens: true,
};

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <Auth0Provider {...authProviderOptions}>{children}</Auth0Provider>;
};

export default Provider;
