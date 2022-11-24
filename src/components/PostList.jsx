import React from 'react';
import PostItem from "./PostItem";

const PostList = ({tasks, remove}) => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Список дел</h1>
            {tasks.map((task, index) =>
                <PostItem delete={remove} number={index+1} post={task} key={task.id} />
            )}
        </div>
    );
};

export default PostList;