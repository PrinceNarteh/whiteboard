import React from "react";
import Button from "./Button";
import InputField from "./InputField";
import { Card } from "./Card";
import CardTitle from "./CardTitle";

export const CreateRoom = () => {
  return (
    <Card>
      <CardTitle text="Create Room" />
      <InputField placeholder="Name" />
      <div className="flex space-x-1 items-center">
        <InputField placeholder="Name" className="flex-1" />
        <button className="bg-cyan-500 py-2 px-3 rounded text-white hover:bg-cyan-600 duration-300">
          Generate
        </button>
        <button className="border border-fuchsia-500 text-fuchsia-500 py-1.5 px-3 rounded hover:bg-fuchsia-500 hover:text-white duration-200">
          Copy
        </button>
      </div>
      <Button fullWidth>Create Room</Button>
    </Card>
  );
};
