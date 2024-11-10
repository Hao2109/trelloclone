import React, { useState } from "react";
import { Plus, X } from "react-feather";

const AddList = (props) => {
  const [value, setValue] = useState("");
  const [list, setList] = useState("");
  const [show, setShow] = useState(false);

  const savelist = () => {
    if (!list) {
      return;
    }
    console.log("Adding Card:", list);
    props.getlist(list);
    setList("");
    setShow(!show);
  };
  const closeBtn = () => {
    setList("");
    setShow(!show);
  };
  return (
    <div>
      <div className="flex flex-col flex-shrink-0 p-2 mr-3 bg-black rounded-md h-fit w-60">
        {show && (
          <div>
            <textarea
              value={list}
              onChange={(e) => setList(e.target.value)}
              placeholder="Enter List Title..."
              name=""
              id=""
              cols="30"
              rows="2"
              className="w-full p-1 border-2 rounded-md resize-none bg-[#22272b] border-zinc-900"
            ></textarea>
            <div className="flex p-1 ">
              <button
                onClick={() => savelist()}
                className="px-4 py-2 mr-2 text-white rounded bg-sky-600"
              >
                Add List
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
            className="flex items-center justify-center w-full h-8 p-1 mt-1 space-x-1 rounded-md hover:bg-gray-500"
          >
            <Plus size={16} /> <p>Add a list</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default AddList;
