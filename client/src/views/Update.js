 import React, { useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

const Update = (props) => {
    let { id } = useParams();
   const [author,setAuthor]=useState("");
   const [loaded, setLoaded] = useState(false);
   const history = useHistory();
   const [errors, setErrors] = useState([]);    


   useEffect(() => {
      axios.get('http://localhost:8000/api/author/'+id)
      .then(res=>{
          setAuthor(res.data);
          setLoaded(true);
      })
      .catch(err=>err)
     
   }, [id]);

   const updateAuthor = author => {
    axios
      .put("http://localhost:8000/api/author/" + id, author)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch(err=>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    }) 
  };
    return (
        <div>
            {errors.map((err, index) => <div className="alert alert-danger" role="alert">{err}</div>)}
            {loaded && <div><h2>Editar nombre de Autor</h2> <AuthorForm onSubmitProp={updateAuthor} iName={author.name} /></div>}

        </div>
    );
}

export default Update;
