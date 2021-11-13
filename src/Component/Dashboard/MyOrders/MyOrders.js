import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import useAuth from '../../../Hook/useAuth';

const MyOrders = () => {

    const {user} = useAuth();

    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {

            fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user?.email])


    const handleDelete = id => {

        const proceed = window.confirm('Are you Sure you want to deleted ?')
            if (proceed) {
                axios.delete(`http://localhost:5000/myOrders/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingUser = myOrders.filter(order => order._id !== id)
                    setMyOrders(remainingUser); 
    
                }
            })
            }
    
    }



    return (
        <div>
           <Container>
               <div responsive="sm, md, lg, xl">
                    <Table className="text-center align-middle" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Apartment</th>
                                <th>Action</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myOrders.map((myOrder, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{myOrder.name}</td>
                                    <td>{myOrder.email}</td>
                                    <td>{myOrder.address}</td>
                                    <td>{myOrder.title}</td>
                                
                                    <td><Button onClick={() => handleDelete(myOrder._id)} variant="danger">Delete</Button></td>
                                    <td>{myOrder.status}</td>
                                </tr>)
                            }
                            
                            
                            
                        </tbody>
                    </Table>
               </div>
            </Container>
        </div>
    );
};

export default MyOrders;