import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "~/components/Sidebar";
import { BoardContext } from "./assets/context/BoardContext";

function App() {
  const boardData = {
    active: 0,
    boards: [
      {
        name: "My Trello Board",
        bgcolor: "#069000",
        list: [
          {
            id: "1",
            title: "To do",
            items: [{ id: "cdrFt", title: "Task 1" }],
          },
          {
            id: "2",
            title: "In Progress",
            items: [{ id: "cdrFv", title: "Task 2" }],
          },
          {
            id: "3",
            title: "Done",
            items: [{ id: "cdrFb", title: "Task 3" }],
          },
        ],
      },
    ],
  };
  const [allBoard, setAllBoard] = useState(boardData);
  return (
    <>
      <Header />
      <BoardContext.Provider value={{ allBoard, setAllBoard }}>
        <div className="flex bg-image">
          <Sidebar />
          <Main />
        </div>
      </BoardContext.Provider>
    </>
  );
}

export default App;
