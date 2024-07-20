import { Route, Routes } from "react-router-dom";

import {
  CrewPage,
  DestinationPage,
  HomePage,
  NotFoundPage,
  TechnologyPage,
} from "pages";

export function Router() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<CrewPage />} path="/crew" />
      <Route element={<DestinationPage />} path="/destination" />
      <Route element={<TechnologyPage />} path="/technology" />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
}
