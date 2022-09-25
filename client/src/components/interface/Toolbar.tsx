import React, { useState } from "react";
import { BiUndo, BiRedo, BiRectangle } from "react-icons/bi";
import { ImPencil2 } from "react-icons/im";
import { GiStraightPipe } from "react-icons/gi";
import { AiOutlineClear } from "react-icons/ai";
import { Tool } from "./Tool";

const Toolbar = () => {
  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("#000000");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTool(e.target.value);
  };

  return (
    <div className="relative basis-12 border border-gray-400 flex flex-col items-center justify-between  py-5">
      <div className="space-y-5">
        <Tool label="Undo">
          <BiUndo />
        </Tool>
        <Tool label="Redo">
          <BiRedo />
        </Tool>
        <Tool label="Pencil" additionalClass="text-2xl" onClick={() => {}}>
          <label htmlFor="pencil">
            <input
              type="radio"
              name="tool"
              id="pencil"
              value="pencil"
              onChange={handleChange}
              className="absolute top-0 left-0 inset-0 appearance-none cursor-pointer"
            />
            <ImPencil2 />
          </label>
        </Tool>
        <Tool label="Line">
          <label htmlFor="line" className="">
            <input
              type="radio"
              name="tool"
              id="line"
              value="line"
              onChange={handleChange}
              className="absolute top-0 left-0 inset-0 appearance-none cursor-pointer"
            />
            <GiStraightPipe />
          </label>
        </Tool>
        <Tool label="Rectangle">
          <label htmlFor="rectangle">
            <input
              type="radio"
              name="tool"
              id="rectangle"
              value="rectangle"
              onChange={handleChange}
              className="absolute top-0 left-0 inset-0 appearance-none cursor-pointer"
            />
            <BiRectangle />
          </label>
        </Tool>
        <Tool label="Color Picker">
          <input
            type="color"
            name="color"
            id="color"
            className="w-8"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Tool>
      </div>
      <Tool label="Clear">
        <AiOutlineClear />
      </Tool>
    </div>
  );
};

export default Toolbar;
