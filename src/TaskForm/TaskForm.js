import { React, Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class TaskForm extends Component {
    render() {
        return (
        <Form>
            <Form.Group>
              <Form.Label>Data</Form.Label>
              <Form.Control type='date'/>
            </Form.Group>
            <Form.Group style={{"width":"50%", "display":"inline-block", "boxSizing": "border-box", "paddingRight":"2px"}}>
              <Form.Label>Od</Form.Label>
              <Form.Control type='time'/>
            </Form.Group>
            <Form.Group style={{"width":"50%", "display":"inline-block", "boxSizing": "border-box", "paddingLeft":"2px"}}>
              <Form.Label>Do</Form.Label>
              <Form.Control type='time'/>
            </Form.Group>
            <Form.Group>

            </Form.Group>
            <Button>Zapisz</Button>{' '}
          </Form>

        )
    }
}

export default TaskForm