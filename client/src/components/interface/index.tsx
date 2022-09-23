import React from "react";
import { DrawingBoard } from "./DrawingBoard";
import Toolbar from "./Toolbar";

export const Interface = () => {
  return (
    <div className="ml-80">
      <div className="m-10 min-h-[calc(100vh_-_80px)] flex items-stretch">
        <Toolbar />
        <DrawingBoard />
      </div>
    </div>
  );
};
