import React from 'react';
import { useForm } from "react-hook-form";

import './AddProducts.css';

const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
    }


    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-12 col-md-12 col-lg-12">
                        <div className="input-gap">
                            <input type="text" {...register("country" )} placeholder="country"/>
                            <input type="text" {...register("title" )} placeholder="title"/>
                            <input type="text" {...register("img" )} placeholder="img url"/>
                            <input type="number" {...register("duration")} placeholder="duration"/>
                            <input type="number" {...register("cost")} placeholder="cost"/>
                            <input className="input-btn" type="submit" value="Add Product"/>
                        </div>
                        
                </div>
                </form>
        </div>
    );
};

export default AddProducts;