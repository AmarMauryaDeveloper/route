import React from "react";
import Card from "../components/Card";

function About({img,title}) {
  return (
    <div className="bg-violet-400">
      <div className="container mx-auto">
        <div className="pt-36" >
          <p className="py-4 text-2xl font-bold ">Introduction</p>
          <h1 className=" text-6xl font-extrabold py-4 text-white">Overview.</h1>
          <p className="text-lg w-[54%]">
            I'm a skilled software developer with expertise in React.js,
            Next.js, Node.js, Express.js, Firebase, Google Cloud, and MongoDB.
            With strong problem-solving abilities and a solid foundation in data
            structures, algorithms, and data analytics, I build efficient,
            scalable, and user-friendly solutions. I'm a quick learner and
            collaborate closely with clients to turn ideas into reality. Let’s
            build something amazing together!
          </p>
          <div className="flex gap-8">
            <Card img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"title="React.js"/>
            <Card img=""title=""/>
            <Card img=""title=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
