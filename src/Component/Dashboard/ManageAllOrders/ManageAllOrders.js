import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Button, Container, Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    
    const [orders, setOrders] = useState([]);
   

    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {

        const proceed = window.confirm('Are you Sure you want to deleted ?')
            if (proceed) {
                axios.delete(`http://localhost:5000/orders/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingUser = orders.filter(order => order._id !== id)
                    setOrders(remainingUser); 
    
                }
            })
            }
    
    }

    const handleApprove = id => {
        id.status ='Approved';
        axios.put(`http://localhost:5000/orderUpdate/${id._id}`)
        .then(res => {
            if (res.data.modifiedCount) {
                
                alert('Approved Successfully');
                
            } 
        })
    }

    return (
        <div responsive="sm, md, lg, xl">
            <Container>
            <Table className="text-center align-middle" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Apartment</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) =>
                        <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.phone}</td>
                            <td>{order.address}</td>
                            <td>{order.title}</td>
                            
                            <td><Button onClick={() => handleApprove(order)} variant="primary">Update</Button>
                            
                            {/* <form onSubmit={handleSubmit(onSubmit)}>
                            <select
                                onClick={() => handleOrderId(pd?._id)}
                                {...register("status")}
                            >
                                <option value={pd?.status}>{pd?.status}</option>
                                <option value="approve">approve</option>
                                <option value="done">Done</option>
                            </select>
                            <input type="submit" />
                            </form> */}
                            
                             <Button onClick={() => handleDelete(order._id)} variant="danger">Delete</Button></td>
                            <td>{order.status}</td>
                        </tr>)

                    }
                    
                    
                </tbody>
            </Table>
            </Container>
        </div>
    );
};

export default ManageAllOrders;