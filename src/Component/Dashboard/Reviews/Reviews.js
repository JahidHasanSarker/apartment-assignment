
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

import './Reviews.css';

const Reviews = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/reviews', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('Data Inserted SuccessFully');
                reset();
            }
        })
        
    };

  


    return (
        <div className="middle">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <h2 className="text-center text-black fw-bold pt-3">Give Us Feedback</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           
                            
                           <div className="input-style py-3">
                                <input {...register("name", { required: true })} placeholder="Your Name"/>

                                {/* errors will return when field validation fails  */}
                                
                                {/* errors will return when field validation fails  */}
                                <textarea {...register("description", { required: true })} placeholder="Description"/>

                                <input type='number' style={{width: '150px', padding: '0 10px' }} id="quantity" name="quantity" min="1" max="5" {...register("rating", { required: true })} placeholder="rate this item"/>
                                
                                <select {...register("avatar")}>
                                    <option value="https://desklib.com/static/src/assets/images/v2/profile_1.svg"> Avatar 1</option>
                                    <option value="https://desklib.com/static/src/assets/images/v2/profile_2.svg">Avatar 2</option>
                                    <option value="https://desklib.com/static/src/assets/images/v2/profile_3.svg">Avatar 3</option>
                                </select>
                                
                                {errors.exampleRequired && <span className="text-warning">This field is required</span>}
      
                                <input className="submit-btn" type="submit" value="Submit"/>
                           </div>
                                                        
                        </form>
                    </div>
        </div>
    );
};

export default Reviews;