import { lazy } from 'react';

const Analytic = lazy(() => import("./views/dashboard/analytic"))

const RouteList = [
  /* Dashboard */
  { exact: true, path: "/dashboard/default", name: "Analytic", component: Analytic },
]


export default RouteList