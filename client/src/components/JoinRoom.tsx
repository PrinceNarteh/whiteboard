import React from "react";
import Button from "./Button";
import { Card } from "./Card";
import CardTitle from "./CardTitle";
import InputField from "./InputField";

export const JoinRoom = () => {
  return (
    <Card>
      <CardTitle text="Join Room" />
      <InputField name="name" placeholder="Name" />
      <InputField name="roomId" placeholder="Room ID" />
      <Button fullWidth>Join Room</Button>
    </Card>
  );
};
