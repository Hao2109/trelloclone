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
import { useContext } from "react";
import { BoardContext } from "../assets/context/BoardContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddList from "./AddList";
import Utils from "../utils/Utils";
import trellomain from "~/assets/trello-main.svg";

const Main = () => {
  const { allBoard, setAllBoard } = useContext(BoardContext);
  const bdata = allBoard.boards[allBoard.active];
  function onDragEnd(res) {
    if (!res.destination) {
      console.log("No Destination");
      return;
    }
    const newList = [...bdata.list];
    const s_id = parseInt(res.source.droppableId);
    const d_id = parseInt(res.destination.droppableId);
    const [removed] = newList[s_id - 1].items.splice(res.source.index, 1);
    newList[d_id - 1].items.splice(res.destination.index, 0, removed);

    let board_ = { ...allBoard };
    board_.boards[allBoard.active].list = newList;

    setAllBoard(board_);
  }
  const cardData = (e, ind) => {
    let newList = [...bdata.list];
    newList[ind].items.push({ id: Utils.makeid(5), title: e });
    console.log("Updated newList:", newList); // Kiểm tra `newList`

    let board_ = { ...allBoard };
    board_.boards[allBoard.active].list = newList;
    console.log("Updated board_", board_); // Kiểm tra toàn bộ `board_`

    setAllBoard(board_);
  };
  const listData = (e) => {
    let newList = [...bdata.list];
    newList.push({ id: newList.length + 1 + "", title: e, items: [] });
    console.log("Updated newList:", newList); // Kiểm tra `newList`

    let board_ = { ...allBoard };
    board_.boards[allBoard.active].list = newList;
    console.log("Updated board_", board_); // Kiểm tra toàn bộ `board_`

    setAllBoard(board_);
  };

  return (
    // <DndContext onDragEnd={handleDragEnd}>
    <div className="flex flex-col w-full ">
      {/**Board main */}
      <div className="flex justify-between p-3 overflow-x-auto bg-black">
        <div className="flex items-center space-x-3">
          <h2 className="p-1 ml-4 text-lg text-white rounded cursor-pointer hover:bg-gray-500">
            {bdata.name}
          </h2>
          <button className="p-2 rounded hover:bg-gray-500">
            <Star color="white" size={16} />
          </button>
          <button className="p-2 rounded hover:bg-gray-500">
            <Users color="white" size={16} />
          </button>
          <button className="flex items-center justify-between p-2 space-x-1 rounded hover:bg-gray-500 ">
            <img src={trellomain} alt="" />
            <span className="text-white"> Board</span>
          </button>
          <div className="flex items-center p-2 rounded hover:bg-gray-500">
            <ChevronDown color="white" size={16} />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="h-8 px-2 py-1 space-x-1 rounded hover:bg-gray-500">
            <IoRocketOutline color="white" size={16} />
          </button>
          <button className="h-8 px-2 py-1 space-x-1 rounded hover:bg-gray-500">
            <IoIosFlash color="white" />
          </button>
          <button className="flex items-center h-8 px-2 py-1 space-x-1 rounded hover:bg-gray-500">
            <IoFilter color="white" size={16} />
            <span className="text-white">Filter</span>
          </button>
          <button className="flex items-center px-2 py-1 space-x-1 text-black bg-white rounded">
            <UserPlus size={16}></UserPlus>
            <p>Share</p>
          </button>
          <button className="h-8 px-2 py-1 rounded hover:bg-gray-500">
            <MoreHorizontal color="white" size={16}></MoreHorizontal>
          </button>
        </div>
      </div>

      <div className="relative flex flex-col flex-grow w-full ">
        <div className="absolute top-0 bottom-0 left-0 right-0 flex p-3 pb-2 mb-1 overflow-x-auto">
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex w-max">
              {bdata.list &&
                bdata.list.map((x, ind) => {
                  return (
                    <div
                      key={ind}
                      className="p-2 mr-3 bg-black rounded-md w-60 h-fit"
                    >
                      {/**Header Card */}
                      <div className=" list-body">
                        <div className="flex justify-between p-1">
                          <span>{x.title}</span>
                          <button className="p-1 rounded-sm hover:bg-gray-500">
                            <MoreHorizontal size={16}></MoreHorizontal>
                          </button>
                        </div>
                        {/************/}
                        <Droppable droppableId={x.id} type="PERSON">
                          {(provided, snapshot) => (
                            <div
                              className={`p-1 ${
                                snapshot.isDraggingOver ? "bg-gray-800" : ""
                              }`}
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                            >
                              {x.items &&
                                x.items.map((item, index) => {
                                  return (
                                    <Draggable
                                      key={item.id}
                                      draggableId={item.id}
                                      index={index}
                                    >
                                      {(provided, snapshot) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <div className="flex  items-center justify-between p-1 mb-2 border-2 rounded-md cursor-pointer item bg-[#22272B] border-zinc-900 hover:border-gray-500">
                                            <span className="px-1">
                                              {item.title}
                                            </span>
                                            <span className="flex items-start justify-start">
                                              <button className="p-1 hover:bg-gray-600 rounded-s-md">
                                                <Edit2 size={16}></Edit2>
                                              </button>
                                            </span>
                                          </div>
                                        </div>
                                      )}
                                    </Draggable>
                                  );
                                })}

                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>

                        <CardAdd getCard={(e) => cardData(e, ind)} />
                      </div>
                    </div>
                  );
                })}
            </div>
          </DragDropContext>
          <AddList getlist={(e) => listData(e)} />
        </div>
      </div>
    </div>
  );
};

export default Main;
