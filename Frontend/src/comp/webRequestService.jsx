
import axios from 'axios';

const WebRequestService = () => {
  const ROOT_URL = 'http://localhost:3000';

  const get = async (url) => {
    try {
      const response = await axios.get(`${ROOT_URL}/${url}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const post = async (url, payload) => {
    try {
      const response = await axios.post(`${ROOT_URL}/${url}`, payload);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

  const patch = async (url, payload) => {
    try {
      const response = await axios.patch(`${ROOT_URL}/${url}`, payload);
      return response.data;
    } catch (error) {
      console.error('Error patching data:', error);
      throw error;
    }
  };

  const remove = async (url) => {
    try {
      const response = await axios.delete(`${ROOT_URL}/${url}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  };

  return {
    get,
    post,
    patch,
    delete: remove, // "delete" is a reserved keyword, so we use "remove" instead
  };
};

export default WebRequestService;
