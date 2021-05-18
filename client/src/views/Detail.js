
import React,{ useEffect, useState }from 'react';
import axios from 'axios';
import {useParams,Link} from 'react-router-dom';

const Detail = (props) => {
    let { id } = useParams();
    const [author, setAuthor] = useState({});
    useEffect(() => {
        console.log({id})
        axios.get("http://localhost:8000/api/author/"+id)
       
            .then(res => setAuthor({
                ...res.data
            }))
    }, [id])
    return (
        <div>
            <p>Name:{author.name}</p>
            <button><Link to={`/`}>Cancel</Link></button>
            <button><Link to={"/author/"+author._id+"/update"}>Update </Link></button>
        </div>
    );
}

export default Detail;