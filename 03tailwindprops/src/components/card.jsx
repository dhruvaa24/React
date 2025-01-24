import React from "react";

function Card({ username, btnText = "Visit me" }) {
  console.log(username);
  return (
    <div className="p-5 mb-5 container py-10 mx-auto flex flex-col items-center justify-center rounded-md bg-white">
      <section className="flex flex-col text-center">
        <h1 className="max-w-xl text-6xl font-bold text-black">
          Beautiful Doodles to Tell Your Story {username}
        </h1>
        <p className="text-xl text-gray-600">
          Beautiful Doodles to Tell Your Story {username}
        </p>
      </section>

      {/* button section  */}
      <section className=" flex justify-around">
        <button className="mx-1 flex items-center justify-center rounded-lg bg-indigo-600   px-8 py-3 text-lg ">
          {btnText}
        </button>
      </section>

      <div>
        <img className="w-100 p-5 rounded-md" src="src/me.jpg" alt="image" />
      </div>
    </div>
  );
}

export default Card;
