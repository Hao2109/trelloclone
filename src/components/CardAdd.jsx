import React, { useState } from "react";
import { Plus, X } from "react-feather";

const CardAdd = (props) => {
  const [value, setValue] = useState("");
  const [card, setCard] = useState("");
  const [show, setShow] = useState(false);

  const saveCard = () => {
    if (!card) {
      return;
    }
    console.log("Adding Card:", card);
    props.getCard(card);
    setCard("");
    setShow(!show);
  };
  const closeBtn = () => {
    setCard("");
    setShow(!show);
  };
  return (
    <div>
      <div className="flex flex-col">
        {show && (
          <div>
            <textarea
              value={card}
              onChange={(e) => setCard(e.target.value)}
              placeholder="Enter Card Title..."
              name=""
              id=""
              cols="30"
              rows="2"
              className="w-full p-1 border-2 rounded-md resize-none bg-[#22272b] border-zinc-900"
            ></textarea>
            <div className="flex p-1 ">
              <button
                onClick={() => saveCard()}
                className="px-4 py-2 mr-2 text-white bg-blue-600 rounded"
              >
                Add Card
              </button>
              <button
                onClick={() => closeBtn()}
                className="p-1 rounded hover:bg-gray-600"
              >
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
