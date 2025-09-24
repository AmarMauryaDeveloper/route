import React from "react";
import imm from "../assets/am.jpeg";
function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="justify-items-center pt-40">
            <h1 className="text-black text-4xl py-2 flex ">Amar Maurya</h1>
            <p className="py-4">
              Software Developer | React.js • Next.js • Node.js
            </p>
            <div className="gap-8 flex">
              <button className="bg-amber-900 text-xl text-amber-50 p-2 hover:bg-blue-600 hover:border-cyan-600 hover:rounded-3xl rounded-xl  border-2 border-amber-400">
                Connect on LinkedIn
              </button>
              <button className="bg-amber-900 text-xl text-amber-50 p-2 border-2 border-amber-400  hover:border-cyan-600 hover:rounded-3xl rounded-xl  border-2 border-amber-400">
                Email me
              </button>
            </div>
          </div>
          <div className="h-56 w-96">
            <img src={imm} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
