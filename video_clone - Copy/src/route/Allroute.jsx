import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Dashboard";
import { SingleVideo } from "../layout/SingleVideo";

export const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/video/:id" element={<SingleVideo />} />
    </Routes>
  );
};
