import { Rating } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";

import './Reviews.css';

const Reviews = () => {
    const [value, setValue] = React.useState(2);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                                
                                <select {...register("avatar")}>
                                    <option value="female">Avatar 1</option>
                                    <option value="male">Avatar 2</option>
                                    <option value="other">Avatar 3</option>
                                </select>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                {errors.exampleRequired && <span className="text-warning">This field is required</span>}
      
                                <input className="submit-btn" type="submit" value="Submit"/>
                           </div>
                                                        
                        </form>
                    </div>
        </div>
    );
};

export default Reviews;