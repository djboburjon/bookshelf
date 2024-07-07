import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import CreateBook from "../components/CreateBook";

function Home() {
  const [books, setBooks] = useState();
  const [changed, setChanged] = useState(true);
  const [create, setCreate] = useState(false);
  const bookData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Key", "Mason");
    myHeaders.append("Sign", "b3ba64687888c6de41a7091d5e9e4254");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://no23.lavina.tech/books", requestOptions)
      .then((response) => response.json())
      .then((result) => setBooks(result))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    bookData();
  }, [changed]);
  return (
    <div className="relative">
      {create && (
        <CreateBook
          setCreate={setCreate}
          changed={changed}
          setChanged={setChanged}
        />
      )}
      <Navbar />
      <div className="container m-auto py-7">
        <div className="mb-4 text-white">
          <div className="mb-3 flex items-center justify-between">
            <h1 className="text-4xl">
              You've got <span className="text-[#6200EE]">{books?.data?.length} books</span>
            </h1>
            <button className="flex items-center gap-2 py-2 px-4 rounded bg-[#6200EE] hover:bg-[#2400ee]" onClick={()=>{
              setCreate(true)
            }}>
              <FaPlus /> Create a book
            </button>
          </div>
          <p>Your books today</p>
        </div>
        <div className="flex justify-between gap-4 flex-wrap">
          {books?.data?.map((item) => {
            return (
              <div
                key={item.book.id}
                className="w-96 p-5 rounded-xl shadow-md bg-white relative group"
              >
                <div className="absolute hidden top-2 -right-8 group-hover:block">
                  <button className="bg-[#FF4D4F] mb-[2px] rounded-cardEdit w-8 h-8 flex items-center justify-center text-white">
                    <RiDeleteBin5Line />
                  </button>
                  <button className="bg-[#6200EE] rounded-cardEdit w-8 h-8 flex items-center justify-center text-white">
                    <RiEdit2Line />
                  </button>
                </div>
                <h3 className="mb-2 font-semibold text-base text-[#151515]">
                  {item.book.title}
                </h3>
                <p className="mb-1 text-sm text-[#333333]">
                  Cover:{" "}
                  <a href={item.book.cover} target="_blank">
                    http://url.to.book.cover
                  </a>
                </p>
                <p className="mb-1 text-sm text-[#333333]">
                  Pages: <span>{item.book.pages}</span>
                </p>
                <p className="mb-1 text-sm text-[#333333]">
                  Published: <span>{item.book.published}</span>
                </p>
                <p className="mb-1 text-sm text-[#333333]">
                  Isbn: <span>{item.book.isbn}</span>
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm text-[#333333]">
                    {item.book.author} / {item.book.published}
                  </p>
                  <button className="bg-[#FF0000] px-2 text-white rounded-lg hover:bg-[#ff0000d8]">
                    New
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
