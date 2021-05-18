import React,{useState,useEffect} from 'react';
import axios from 'axios';
import{Link}from 'react-router-dom';
import DeleteButton from './DeleteButton';
import '../styles/AuthorList.css';

const AuthorList = () => {
    const [authors,setAuthors]=useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data));
    }, [])
    const removeFromDom=(authorId)=>{
        setAuthors(authors.filter(author=>author._id !== authorId))
    }


    return (
        <div className="wrapper">
            
            <ul>
            {authors.map((author,index)=>{
            return (
            <div key={index}>
                    <li><Link to ={`/author/`+author._id+'/edit'}>{author.name}</Link></li>
                    <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}></DeleteButton>
            </div>
            )})}
        
            </ul>
        </div>


        
    );
}

export default AuthorList;

