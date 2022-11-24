import './App.css';
import React from "react";
import PostList from "./components/PostList";
import PostForm from './components/PostForm'

function App() {
    const [tasks, setTasks] = React.useState([
        {id:1, title:'Зарядка', description:'Растяжка на турнике',date:'2022-10-24'},
        {id:2, title:'Завтрак', description:'Приготовление блюда',date:'2022-10-24'},
        {id:3, title:'Обучение', description:'Изучение React - технологий',date:'2022-10-24'},
        {id:4, title:'Перерыв', description:'Попить чай',date:'2022-10-24'},
    ]);
    const createPost = (newPost) => {
        setTasks([...tasks, newPost])
    };
    const deletePost = (task) => {
        setTasks(tasks.filter( t => t.id !== task.id))
    };


  return (
   <div>
       <PostForm tasks={tasks} create={createPost}/>
       {tasks.length !== 0
           ?
           <PostList remove={deletePost} tasks={tasks}/>
           :
           <h1 style={{textAlign:'center'}}>Список пуст</h1>
       }
   </div>
  );
}

export default App;
