import { ADD_POST } from "./action-types";

export const AddPost = (data) => {
  // console.log(data);
  return {
    type: ADD_POST,
    data,
  };
};
