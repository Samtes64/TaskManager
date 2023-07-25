import WebRequestService from "./webRequestService"; // Adjust the import path

const TaskService = () => {
  const webReqService = WebRequestService();

  const createList = (title) => {
    // Want to send a web request to create a list
    webReqService.post('lists', { title });
  };

  return {
    createList,
  };
};

export default TaskService;
