import TaskService from "../comp/taskService";

const Taskview = () => {
  const taskService = TaskService(); // Create an instance of TaskService

  const createNewList = () => {
    taskService.createList("testing"); // Use the instance to call createList
    
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-primary">
      <div className="flex w-full h-full max-w-5xl max-h-[680px]">
        <div className="flex flex-col w-60 bg-white p-10 rounded-l-xl">
          <h1 className="text-primary text-2xl tracking-wide">Lists</h1>
          <div className="flex flex-col mt-4 flex-grow">
            <a
              href=""
              className="flex items-center py-2 px-4 rounded-md w-full text-slate-600 mb-1 hover:bg-slate-200 active:bg-sky-300"
            >
              list 1
            </a>
            <a
              href=""
              className="flex items-center py-2 px-4 rounded-md w-full text-slate-600 mb-1 hover:bg-slate-200 active:bg-sky-300"
            >
              list 1
            </a>
            <a
              href=""
              className="flex items-center py-2 px-4 rounded-md w-full text-slate-600 mb-1 hover:bg-slate-200 active:bg-sky-300"
            >
              list 1
            </a>
            <a
              href=""
              className="flex items-center py-2 px-4 rounded-md w-full text-slate-600 mb-1 hover:bg-slate-200 active:bg-sky-300"
            >
              list 1
            </a>
          </div>

          <button
            onClick={createNewList}
            className="bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            + New List
          </button>
        </div>
        <div className="flex flex-col flex-grow bg-secondary p-10 rounded-r-xl">
          <h1 className="text-primary text-2xl font-medium tracking-wide">
            Tasks
          </h1>

          <div className="bg-white py-4 px-5 rounded-lg mt-3 hover:shadow-2xl duration-500 cursor-pointer active:scale-90 complete">
            <p>some thing i would like to do</p>
          </div>
          <div className="bg-white py-4 px-5 rounded-lg mt-3 hover:shadow-2xl duration-500 cursor-pointer active:scale-90">
            <p>some thing i would like to do</p>
          </div>
          <div className="bg-white py-4 px-5 rounded-lg mt-3 hover:shadow-2xl duration-500 cursor-pointer active:scale-90">
            <p>some thing i would like to do</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskview;
