import React from 'react'
import { Card, CardHeader, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'

const BookList = () => {
  return (
    <>
      <div className="list-display">

      <Card className='my-list'>
        <CardHeader className='list-title'>
          My Books
        </CardHeader>
        <div className="list-body">

        <Card className='list-sidebar'>
          <ListGroup variant='flush' >
            <ListGroupItem>
              All
            </ListGroupItem>
            <ListGroupItem>
            Read
            </ListGroupItem>
            <ListGroupItem>
            Reading
            </ListGroupItem>
            <ListGroupItem>
            Want to Read
            </ListGroupItem>
          </ListGroup>
        </Card>

        <Card className='list-items'>
          <CardHeader>
            <Row>
              <Col xs={1} className='list-item-title' >
                Cover
              </Col>
              <Col xs={3} className='list-item-title' >
                Title
              </Col>
              <Col xs={3} className='list-item-title' >
                Author
              </Col>
              <Col xs={2} className='list-item-title' >
                Rating
              </Col>
              <Col xs={3} className='list-item-title' >
                Status
              </Col>
            </Row>
            </CardHeader>
            <ListGroup>
              <ListGroupItem>
                La fila de arriba es titulo. De acá para abajo, todo esto tendría que ir mapeado xd
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col xs={1} className='list-item-title' >
                    x.jpg
                  </Col>
                  <Col xs={3} className='list-item-title' >
                    item title
                  </Col>
                  <Col xs={3} className='list-item-title' >
                    item author
                  </Col>
                  <Col xs={2} className='list-item-title' >
                    item rating
                  </Col>
                  <Col xs={3} className='list-item-title' >
                    item status
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
        </Card>
        </div>

      </Card>
      </div>
    </>
  )
}

export default BookList