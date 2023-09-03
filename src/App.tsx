
import { Content } from "./modules/Content/Content";
import { Aside } from "./modules/Aside/Aside";
import React from "react";

export const App: React.FC = () => {
  return (
    <>
      <div className="header" />
      <main className="main">
        <div className="container">
          <Aside />
          <Content />
        </div>
      </main>
    </>
  );
};
