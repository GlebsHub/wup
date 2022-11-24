import React from 'react';
import MyButton from "./UI/button/MyButton";
import MyCheckBox from "./UI/checkbox/MyCheckBox";

const PostItem = (props) => {

    const current = new Date();
    const date =
        `${current.getDate()}
        /${current.getMonth()+1}
        /${current.getFullYear()}`;

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <p>{props.post.description}</p>
                <p>Выполнить до {props.post.date}</p>
            </div>
            <div className="post__btns">
                <strong className="post__release">{`Создано ${date}`}</strong>
                <MyCheckBox/>
                <MyButton onClick={() =>props.delete(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;


function getN(n) {
        return function (){
            if(n>0) {
                n--;
                console.log('yes');
            }
            console.log('no');
        }
}
let getResult = getN(3)
console.log(getResult())
console.log(getResult())
console.log(getResult())
console.log(getResult())