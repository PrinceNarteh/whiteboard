import React from "react";
import { CreateRoom } from "../components/CreateRoom";
import { JoinRoom } from "../components/JoinRoom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 to-fuchsia-600">
      <div className="max-w-5xl w-full">
        <h1 className="text-5xl mb-10 text-center text-white">
          Realtime Whiteboard Sharing App
        </h1>
        <div className="flex flex-col gap-10 w-11/12 mx-auto md:flex-row xl:w-full">
          <CreateRoom />
          <JoinRoom />
        </div>
      </div>
    </div>
  );
};

export default Home;
