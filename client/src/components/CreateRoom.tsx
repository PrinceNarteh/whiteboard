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
      <InputField placeholder="Name" />
      <Button fullWidth>Create Room</Button>
    </Card>
  );
};
