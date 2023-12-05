import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function Review({rev}) {
  return (
    <div>
        <Accordion className="mt-3 p-2" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Review</Accordion.Header>
        <Accordion.Body>
         {
            rev.map(i=>(
              <>
                    <div>
                        <h5>{i.name}</h5>
                        <h6>{i.date}</h6>
                        <h6>{i.rating}</h6>
                        <p>{i.comments}</p>
                    </div>
                    <hr></hr>
              </>
            ))
         }
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
  )
}

export default Review