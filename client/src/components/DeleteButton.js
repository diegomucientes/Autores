
import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
  const { authorId, successCallback } = props;
    const deleteAuthor = (e) => {
        axios
        .delete('http://localhost:8000/api/author/' + authorId)
        .then(res => {
            console.log(authorId);
            successCallback();
        })
        //   .catch((err) => err);
    };
    return (
    <button onClick={deleteAuthor}>Delete Author</button>
    )

};

export default DeleteButton;