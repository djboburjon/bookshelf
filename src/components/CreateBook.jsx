import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AiOutlineLink } from "react-icons/ai";

function CreateBook({ setCreate, changed, setChanged }) {
  const [shtrix, setShtrix] = useState();

  const createData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Key", "Mason");
    myHeaders.append("Sign", "c916a691bcfaa5689db68fc0dc2f0cf5");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      isbn: shtrix,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://no23.lavina.tech/books", requestOptions)
      .then((response) => {
        response.json();
        if (response.status === 200) {
          setChanged(!changed);
          setCreate(false);
        } else {
          alert("There is a problem");
        }
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-black bg-opacity-75 z-50 fixed h-screen w-screen">
      <div className="rounded-xl bg-white w-96 py-5 px-6 m-auto mt-40">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl text-[#151515]">Create a book</h2>
          <button
            onClick={() => {
              setCreate(false);
            }}
          >
            <IoCloseCircleOutline />
          </button>
        </div>
        <h3 className="text-sm text-[#151515] font-medium">ISBN</h3>
        <label
          htmlFor=""
          className="mb-6 py-3 px-4 border border-gray-400 rounded-md flex items-center gap-3"
        >
          <AiOutlineLink />
          <input
            type="text"
            className="outline-none border-none w-full"
            onChange={(e) => {
              setShtrix(e.target.value);
            }}
            placeholder="______________"
            required
          />
        </label>
        <div className="flex items-center justify-between">
          <button
            className=" border rounded-md border-purple-950 text-[#6200EE] py-2 px-6"
            onClick={() => {
              setCreate(false);
            }}
          >
            Close
          </button>
          <button
            className=" border rounded-md border-purple-950 bg-[#6200EE] text-white py-2 px-6"
            onClick={createData}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBook;
