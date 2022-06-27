import { ADD_POST } from "./action-types";

// const initialList = () => {
//   const list = localStorage.getItem("post-list");
//   let items = [];
//   if (list) {
//     items = JSON.parse(list);
//     // console.log(expense);
//   }
//   return items;
// };

const initialState = {
  postList: [],
  // postList: initialList(),
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      // localStorage.setItem(
      //   "post-list",
      //   JSON.stringify([...state.postList, action.data])
      // );
      return {
        ...state,
        postList: [...state.postList, action.data],
      };
    }
    default:
      return state;
  }
};
