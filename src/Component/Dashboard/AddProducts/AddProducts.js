import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

import './AddProducts.css';

const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        axios.post('http://localhost:5000/products', data)
        .then(res => {
        if (res.data.insertedId) {
            alert('Data Inserted SuccessFully');
            reset();
        }
    })
	
    }


    return (
        <div>
           
           <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-12 col-md-12 col-lg-12">
                        <div className="input-gap">
                            <input type="text" {...register("title" )} placeholder="title"/>
                            <input type="number" {...register("price" )} placeholder="price"/>
                            <input type="number" {...register("beds" )} placeholder="beds"/>
                            <input type="number" {...register("bath" )} placeholder="bath"/>
                            <input type="number" {...register("garage" )} placeholder="garage"/>
                            <input type="number" {...register("feet" )} placeholder="feet"/>
                            <input type="text" {...register("location" )} placeholder="location"/>
                            <input type="text" {...register("img" )} placeholder="img url"/>
                            <input className="input-btn" type="submit" value="Add Product"/>
                        </div>
                        
                </div>
                </form>
        </div>
    );
};

export default AddProducts;