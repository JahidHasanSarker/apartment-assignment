import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {

        const proceed = window.confirm('Are you Sure you want to deleted ?')
            if (proceed) {
                axios.delete(`http://localhost:5000/products/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingUser = products.filter(order => order._id !== id)
                    setProducts(remainingUser); 
    
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
                        <th>Product Img</th>
                        <th>Product Name</th>
                        <th>Product Location</th>
                        <th>Product Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                {
                    products.map((product, index) => 
            
                    <tr key={product._id}>
                        <td>{index + 1}</td>
                        <td><img width="150px" src={product.img} alt="" /></td>
                        <td>{product.title}</td>
                        <td>{product.location}</td>
                        <td>${product.price}</td>
                        <td><Button onClick={() => handleDelete(product._id)} variant="danger">Delete</Button></td>
                    </tr>)

                }
                    
                </tbody>
                
            </Table>
            </div>

            </Container>
        </div>
    );
};

export default ManageProducts;