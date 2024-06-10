import React from "react";
import { RouteObject } from "react-router-dom";

import FullScreenLoader from "components/FullscreenLoader";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import VerifyEmail from "pages/VerifyEmail";
import Base from "partials/Base";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Loadable = any;

export const loadable =
  (Component: Loadable) => (props: JSX.IntrinsicAttributes) =>
    (
      <React.Suspense fallback={<FullScreenLoader />}>
        <Component {...props} />
      </React.Suspense>
    );

export const routesWithLayout: RouteObject = {
  path: "",
  element: <Base />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export const routes: RouteObject[] = [
  routesWithLayout,
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
