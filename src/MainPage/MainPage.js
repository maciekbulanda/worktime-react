import { React, Component } from "react";
import { Button, Col, Container, Row, Alert, Card } from 'react-bootstrap';

class MainPage extends Component {
    render() {
        return (
            <Container fluid>
            <Row>
              <Col className='col-12 col-sm-6 my-4'>
                <Alert variant={'primary'}>
                  To jest Alert
                </Alert>
                  <Button>Ok</Button>{' '}
                  <Button>Cancel</Button>
              </Col>
              <Col className='col-12 col-sm-6 my-4'>
                <Card>
                  <Card.Header>
                    Tytuł
                  </Card.Header>
                  <Card.Body>
                    Taki sobie tekścik.
                  </Card.Body>
                </Card>
                
              </Col>
            </Row>
            <Row>
              <Col className='col-12'>
  
              </Col>
            </Row>
          </Container>
          )
    }
}

export default MainPage