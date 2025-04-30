import React from 'react'
import { Form, Row, Col, Button, FormGroup, FormLabel, FormCheck, FormControl } from 'react-bootstrap'

const NewBook = () => {
  return (
    <div className='new-book-page'>
        <Form className='new-book-form'>
            <h4>Nuevo Libro</h4>
            <Row>
                <FormGroup>
                    <FormLabel>Titulo</FormLabel>
                    <FormControl type='text' ></FormControl>
                </FormGroup>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <FormLabel>Autor</FormLabel>
                        <FormControl type='text' ></FormControl>
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup>
                        <FormLabel>Páginas</FormLabel>
                        <FormControl type='number' ></FormControl>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <FormGroup>
                    <FormLabel>Géneros</FormLabel>
                    <FormControl></FormControl>
                </FormGroup>
            </Row>
            <Row>
                <FormGroup>
                    <FormLabel>Resumen</FormLabel>
                    <FormControl type='text' ></FormControl>
                </FormGroup>
            </Row>
            <Row>
                    <FormGroup>
                        <FormLabel>Link de imagen</FormLabel>
                        <FormControl type='text' ></FormControl>
                    </FormGroup>
            </Row>
            <br />
            <Row>
                <Button>Añadir</Button>
            </Row>
        </Form>
    </div>
  )
}

export default NewBook