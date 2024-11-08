import {
  ChevronDown,
  Edit2,
  MoreHorizontal,
  Star,
  UserPlus,
  Users,
} from "react-feather";
import CardAdd from "./CardAdd";
import trelloboard from "~/assets/trello-board.svg";
import { IoFilter, IoRocketOutline } from "react-icons/io5";
import { IoIosFlash } from "react-icons/io";

const Main = () => {
  return (
    <div className="flex flex-col w-full bg-slate-900">
      {/**Board main */}
      <div className="flex justify-between p-3 bg-black">
        <div className="flex space-x-6">
          <h2 className="ml-4 text-lg">My Trello Board</h2>
          <button>
            <Star size={16} />
          </button>
          <button>
            <Users size={16} />
          </button>
          <button className="flex items-center justify-between space-x-1">
            <img src={trelloboard} alt="" className="" />
            <span>Board</span>
          </button>
          <div className="flex items-center">
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="h-8 px-2 py-1 space-x-1 rounded  hover:bg-gray-500">
            <IoRocketOutline size={16} />
          </button>
          <button className="h-8 px-2 py-1 space-x-1 rounded hover:bg-gray-500">
            <IoIosFlash />
          </button>
          <button className="flex items-center h-8 px-2 py-1 space-x-1 rounded hover:bg-gray-500">
            <IoFilter size={16} />
            <span>Filter</span>
          </button>
          <button className="flex items-center px-2 py-1 space-x-1 text-black bg-white rounded">
            <UserPlus size={16}></UserPlus>
            <p>Share</p>
          </button>
          <button className="h-8 px-2 py-1 rounded hover:bg-gray-500">
            <MoreHorizontal size={16}></MoreHorizontal>
          </button>
        </div>
      </div>

      <div className="relative flex flex-col w-full">
        <div className="absolute top-0 bottom-0 left-0 right-0 p-3 pb-2 mb-1">
          <div className="p-2 mr-3 bg-black rounded-md w-60 h-fit">
            <div className="list-body">
              <div className="flex justify-between p-1">
                <span>Todo</span>
                <button className="p-1 rounded-sm hover:bg-gray-500">
                  <MoreHorizontal size={16}></MoreHorizontal>
                </button>
              </div>
              <div className="flex items-center justify-between p-1 mb-2 border-2 rounded-md cursor-pointer item bg-zinc-700 border-zinc-900 hover:border-gray-500">
                <span className="px-1">Project Description</span>
                <span className="flex items-start justify-start">
                  <button className="p-1 hover:bg-gray-600 rounded-s-md">
                    <Edit2 size={16}></Edit2>
                  </button>
                </span>
              </div>
              <CardAdd />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
