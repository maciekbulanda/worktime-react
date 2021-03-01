import { React, Component } from "react";
import { connect } from 'react-redux';
import { Button, Col, Container, Row, Card, Form } from 'react-bootstrap';
import TaskForm from "../TaskForm/TaskForm";

class MainPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className='col-12 col-sm-6 col-md-5 my-4 ml-auto'>
            <TaskForm />
          </Col>
          <Col className='col-12 col-sm-6 col-md-5 my-4 mr-auto'>
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