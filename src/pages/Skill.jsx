import React from "react";

function Skill() {
  return (
    <div className="bg-neutral-600">
      <div className="container mx-auto">
        <h1 className="text-4xl text-blue-700 flex justify-center py-4 font-extrabold">
          Our Skill
        </h1>
        <p className="text-gray-300 flex justify-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          adipisci officia. Aspernatur animi eveniet eaque sint laboriosam, aut
          cumque pariatur natus, iure sed iste praesentium. Earum porro modi ab
          ipsum.
        </p>
        <div className="py-10 justify-around flex">
          <div className="w-[40%] ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
              className="h-96"
              alt=""
            />
          </div>
          <div className="text-lg text-gray-200 w-[50%]">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            praesentium aspernatur laborum odit fuga expedita facilis unde
            laudantium rerum, perspiciatis repellendus, illo consequatur
            deleniti necessitatibus iste non explicabo dolor doloremque dolorem
            ex a quam suscipit. Quisquam, nostrum iusto. Officiis, eum.
          </div>
        </div>
        <div className="py-10 justify-around flex">
          <div className="text-lg text-gray-200 w-[50%]">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            praesentium aspernatur laborum odit fuga expedita facilis unde
            laudantium rerum, perspiciatis repellendus, illo consequatur
            deleniti necessitatibus iste non explicabo dolor doloremque dolorem
            ex a quam suscipit. Quisquam, nostrum iusto. Officiis, eum.
          </div>
        
        <div className="w-[40%] ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
            className="h-96"
            alt=""
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
