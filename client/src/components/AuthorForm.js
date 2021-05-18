import React,{useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';

const AuthorForm = (props) => {

    const {iName,onSubmitProp}=props;
    const [name,setName]=useState(iName)
    return (
        <div >
          <Formik
          initialValues={{
          name : name,
          
        }}
        validationSchema={Yup.object().shape({
            name: Yup.string()
            .min(3, "El nombre del autor es muy corto")
            .required ("Por favor ingresa un nombre"),
            
          
        })}

        onSubmit={(values, {setSubmitting}) =>{
            const timeOut = setTimeout(( )=>{
                console.log(values);
                onSubmitProp(values);
                setSubmitting(false);
                clearTimeout(timeOut);
            }, 1000);
        }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                //isSubmitting,
                //validating,
                valid,
            }) =>{
        return (
            <div>
                <h1>Autores APP</h1>
                <Form className= "contact" method= "post" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="col-sm-2 col-form-label">
                            Autores
                        </label>
                        <Field id='name'type="text" className="form-control" placeholder="Nombre" name='name'onChange={e=>setName(e.target.value)}/>
                         {errors.name && touched.name && <p>{errors.name}</p>}
            
                        <button type="submit" disabled={Object.values(errors).length > 0}>Agregar Autor</button>
                        <button type="cancel"><Link to={`/`}>Cancel</Link></button>
                            
                </Form>
            </div>
        );
        }}
        </Formik>
        </div>
      );
    }
export default AuthorForm