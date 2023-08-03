import { useState } from "react";
import TaskService from "../comp/taskService";


const NewList = () => {
  const [titleValue, setTitlevalue] = useState("");
  const handleInputChange = (event) => {
    setTitlevalue(event.target.value);
  };
  const taskService = TaskService();
  const createList = async () => {
    try {
      const response = await taskService.createList(titleValue);
      console.log(response);
      
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-primary">
      <div className="min-h-[200px] w-full max-w-xl p-9 bg-white rounded-md text-black">
        <p className="text-xl font-semibold mb-3">Create a new list</p>
        <div className="flex ">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered bg-white w-full mb-3"
            value={titleValue} onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-2 items-center justify-end">
          <a
            href="/"
            className="btn btn-sm btn-outline hover:bg-primary hover:text-white"
          >
            cancel
          </a>
          <button className="btn btn-outline bg-primary text-white" onClick={createList}>
            add list
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewList;
