import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

function HomeScreen() {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        async function fetchproducts() {
            const { data } = await axios.get('http://localhost:8000/api/products/')
            setProducts(data)
        }
        fetchproducts()
    },[])
    return (
        <div>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen