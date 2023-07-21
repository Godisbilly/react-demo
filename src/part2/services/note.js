import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getNotes = () => {
  return axios.get(baseUrl).then((res) => res.data);
};

const createNote = (newObject) => {
  return axios.post(baseUrl, newObject).then((res) => res.data);
};

const updateNote = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).then((res) => res.data);
};

export { getNotes, createNote, updateNote };
