import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Gallery.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import FirstCarousal from './FirstCarousal';


// import ExampleCarouselImage from 'components/ExampleCarouselImage';






function Gallery() {
    
const [bookList,setBook]=useState([])
    const getData=async ()=>{
      const result=  await fetch('/books.json')
      result.json().then(data=>setBook(data.book))
    }
    console.log(bookList)
useEffect(()=>{
    getData()
},[])

  return (
    <> 
    <FirstCarousal/>

   <Container Container fluid>
   
          
        <Row className=' ms-5 mt-5'>
            {
                bookList.map(book=>(
                    <Col className='mt-3' lg={4} md={6}>
                        <Link style={{textDecorationLine:'none'}} to={`/singleView/${book.id}`}>
                        <Card  id="c1" className='' style={{ width: '25rem',height:'500px' }}>
                            <Card.Img  className='p-2 m-3' style={{width:'22rem', height:'24rem'}} variant="top" src={book.photograph} />
                            <Card.Body>
                                {/* {<Card.Title><strong>{book.name}</strong></Card.Title>}*/
                                <Card.Text><h3><strong>{book.author}</strong></h3>
                                </Card.Text>}
                                
                            </Card.Body>
                            </Card>
                            </Link>
                    </Col>
                ))
            }
        </Row>
        </Container>

    </>
  )
}

export default Gallery