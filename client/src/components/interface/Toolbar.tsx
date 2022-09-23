import React from "react";
import { BiUndo, BiRedo, BiRectangle } from "react-icons/bi";
import { ImPencil2 } from "react-icons/im";
import { GiStraightPipe } from "react-icons/gi";
import { AiOutlineClear } from "react-icons/ai";
import { Tool } from "./Tool";

const Toolbar = () => {
  return (
    <div className="relative basis-12 border border-gray-400 flex flex-col items-center justify-between  py-5">
      <div className="space-y-5">
        <Tool label="Undo">
          <BiUndo />
        </Tool>
        <Tool label="Redo">
          <BiRedo />
        </Tool>
        <Tool label="Pencil" additionalClass="text-2xl">
          <ImPencil2 />
        </Tool>
        <Tool label="Line">
          <GiStraightPipe />
        </Tool>
        <Tool label="Rectangle">
          <BiRectangle />
        </Tool>
        <Tool label="Color Picker">
          <input type="color" name="" id="" className="w-8" />
        </Tool>
      </div>
      <Tool label="Clear">
        <AiOutlineClear />
      </Tool>
    </div>
  );
};

export default Toolbar;
