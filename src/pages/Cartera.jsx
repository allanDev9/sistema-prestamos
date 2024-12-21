import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default function Cartera() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs='4' className='bg-primary'>
                        <h2>pasado</h2>
                    </Col>
                    <Col xs='4' className='bg-secondary'>
                        <h2>Presente</h2>
                    </Col>
                    <Col xs='4' className='bg-danger'>
                        <h2>Futuro</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
