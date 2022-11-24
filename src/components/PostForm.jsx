import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({create}) => {

    const [post, setPost] = React.useState({title: '', description:'', date:''});



    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', description: '', date: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder={"Заголовок"}
            />
            <MyInput
                value={post.description}
                onChange={e => setPost({...post, description: e.target.value})}
                type="text"
                placeholder={"Описание"}
            />
            <MyInput
                value={post.date}
                onChange={e => setPost({...post, date: e.target.value})}
                type="date"
                placeholder={"Дата завершения"}
            />
            <MyInput type="file"/>
            <MyButton onClick={addNewPost}>Добавить задачу</MyButton>
        </form>
    );
};

export default PostForm;