import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./app-routes";

export default function Content() {
  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route exact key={path} path={path} component={component} />
      ))}
      <Navigate to={"/Items"} />
    </Routes>
  );
}
