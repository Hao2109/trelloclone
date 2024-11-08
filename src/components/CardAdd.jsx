import React, { useState } from "react";
import { Plus, X } from "react-feather";

const CardAdd = () => {
  const [card, setCard] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex flex-col">
        {show && (
          <div>
            <textarea
              placeholder="Enter Card Title..."
              name=""
              id=""
              cols="30"
              rows="2"
              className="w-full p-1 border-2 rounded-md resize-none bg-zinc-700 border-zinc-900"
            ></textarea>
            <div className="flex p-1 ">
              <button className="px-4 py-2 mr-2 text-white rounded bg-sky-600">
                Add Card
              </button>
              <button className="p-1 rounded hover:bg-gray-600">
                <X size={16}></X>
              </button>
            </div>
          </div>
        )}
        {!show && (
          <button
            onClick={() => setShow(!show)}
            className="flex items-center justify-start w-full h-8 p-1 mt-1 space-x-1 rounded-md hover:bg-gray-500"
          >
            <Plus size={16} /> <p>Add a card</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default CardAdd;
