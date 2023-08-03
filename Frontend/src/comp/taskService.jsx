import WebRequestService from "./webRequestService"; // Adjust the import path

const TaskService = () => {
  const webReqService = WebRequestService();

  const createList = async (title) => {
    try {
      const response = await webReqService.post('lists', { title });
      return response.data;
    } catch (error) {
      console.error('Error creating list:', error);
      throw error;
    }
  };

  return {
    createList,
  };
};

export default TaskService;
