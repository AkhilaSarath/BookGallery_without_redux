import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import About from './About';
import Review from './Review';






function BookView() {

        
        const[bookList,setBook]=useState([])
      const getData=async()=>{
       const result=await fetch('/books.json')
       result.json().then(data=>setBook(data.book))
      }  
      console.log(bookList)
      const params=useParams()
        console.log(params.id)
      const singleBook=bookList.find(i=>i.id==params.id)
      console.log(singleBook)
     //console.log(singleBook.id)


      useEffect(()=>{
        getData()
    },[])
  
  return (
    <>
      
      {
        singleBook?
        (<Row>
          <Col lg={6} md={6}>
        <img className='w-75 h-75 m-5 p-5 mt-5' src={singleBook.photograph}></img>
          </Col>
          <Col lg={6} md={6}>
          <ListGroup className='w-75 h-75 m-5 p-5 mt-5'>
      <ListGroup.Item className='text-warning'><h1>{singleBook.name}</h1></ListGroup.Item>
      <ListGroup.Item>Author :{singleBook.author}</ListGroup.Item>
      <ListGroup.Item>Price :{singleBook.price}</ListGroup.Item>
      <ListGroup.Item><About desc={singleBook}/></ListGroup.Item>
      <ListGroup.Item><Review rev={singleBook.reviews}/></ListGroup.Item>
    </ListGroup>
          
          </Col>
         
        </Row>):" "
  
        }
    </>
  )
}

export default BookView