import React,{useState,useEffect} from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory,
  } from "react-router-dom";



const Create = () => {
    const [authors, setAuthors] = useState([]);
    const history=useHistory();
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
        .then(res=> {
            setAuthors(res.data);
            
        } )
        .catch(err=>console.log('Error:'))
    },[]);


    const createAuthor= author => {
        axios.post('http://localhost:8000/api/author/add', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
                console.log(res);
                history.push("/");
            })

    }

    return (
        <div>
            <AuthorForm onSubmitProp={createAuthor} iName=""/>
        </div>
    );
}

export default Create;

