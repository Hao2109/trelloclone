import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "react-feather";
import { Popover } from "react-tiny-popover";
import png1 from "~/assets/png1.png";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showpop, setShowpop] = useState(false);
  return (
    <div
      className={`bg-blue-400 transition-all duration-100 flex-shrink-0 text-white h-[calc(100vh-3rem)] border-b border-b-slate-100  ${
        collapsed ? "w-[40px]" : "w-[260px]"
      }`}
    >
      {collapsed && (
        <div className="relative flex justify-center">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="absolute right-[-14px] align-bottom bg-slate-700 rounded-full top-3 hover:bg-slate-600 size-7 flex justify-center items-center"
          >
            <ChevronRight size={16}></ChevronRight>
          </button>
        </div>
      )}
      {!collapsed && (
        <div>
          <div className="flex justify-between p-3 border-b workspace border-b-orange-200">
            <h4>Tri Hao ww</h4>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="rounded-sm hover:bg-slate-600"
            >
              <ChevronLeft size={18}></ChevronLeft>
            </button>
          </div>
          <div className="boardlist">
            <div className="flex justify-between px-3 py-2">
              <h6>Your Boards</h6>
              <Popover
                align="start"
                isOpen={showpop}
                positions={["right", "top", "bottom", "left"]} // preferred positions by priority
                content={
                  <div className="flex flex-col items-center justify-center p-2 ml-3 bg-gray-600 rounded w-60">
                    <button
                      onClick={() => setShowpop(!showpop)}
                      className="absolute p-1 rounded right-2 top-2 hover:bg-gray-500"
                    >
                      <X size={16} />
                    </button>
                    <h4 className="pt-1">Create Board</h4>
                    <hr className="w-full mt-6" />

                    <img src={png1} alt="" className="mt-3 border w-[160px]" />
                    <div className="mt-3">
                      <label htmlFor="title">
                        Board Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full h-8 px-2 mb-2 bg-gray-700 rounded"
                      />
                      <label htmlFor="Color">Board Color</label>
                      <input
                        type="color"
                        className="w-full h-8 px-2 mb-2 bg-gray-700 rounded"
                      />
                      <button className="flex items-center justify-center w-full h-8 py-2 mt-2 bg-gray-700 rounded hover:bg-gray-500">
                        Create
                      </button>
                    </div>
                  </div>
                }
              >
                <button onClick={() => setShowpop(!showpop)}>
                  <Plus size={16} />
                </button>
              </Popover>
            </div>
          </div>
          <ul>
            <li>
              <button className="flex justify-start w-full px-3 py-2 text-sm align-baseline hover:bg-gray-500">
                <span className="w-6 mr-2 bg-red-600 rounded-sm h-max">
                  &nbsp;
                </span>
                <span>My Trello Board</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
