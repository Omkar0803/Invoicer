import React from "react";
import { useSelector } from "react-redux/es/exports";
import PostCard from "./PostCard";

const PostItems = () => {
  const { postList } = useSelector((state) => state.posts);
  // console.log(postList);
  return (
    <div className="item-list">
      {postList.length ? (
        postList.map((items) => {
          return <PostCard items={items} /*notifySuccess={notifySuccess} */ />;
        })
      ) : (
        <div className="empty-list empty-list mx-auto w-96 bg-blue-100 rounded-lg mt-20 flex flex-col justify-center items-center p-4">
          <img
            src={require("../assets/emptyList.png")}
            className="w-60 mb-3"
            alt="Empty List"
          />
          <label className="text-[1.3rem]">Uh Oh! Your list is empty</label>
        </div>
      )}
    </div>
  );
};

export default PostItems;
