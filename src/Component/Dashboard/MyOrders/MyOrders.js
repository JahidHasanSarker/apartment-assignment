
import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';

const MyOrders = () => {
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
                                
                                <th>Action</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>jahidhasan1695@email.com</td>
                                <td>Dhaka, Bangladesh</td>
                            
                                <td><Button variant="danger">Delete</Button></td>
                                <td>Pending</td>
                            </tr>
                            
                            
                        </tbody>
                    </Table>
               </div>
            </Container>
        </div>
    );
};

export default MyOrders;