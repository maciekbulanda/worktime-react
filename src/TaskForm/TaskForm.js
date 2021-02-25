import { React, Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import * as actions from '../store/actions'

class TaskForm extends Component {

  addTask(e) {
    e.preventDefault();
    console.log("Add pressed")
    this.props.addTask({'date':'2021-02-25'});
  }

  render() {
    return (
    <Form onSubmit={(e) => this.addTask(e)}>
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
          <Form.Label>Temat</Form.Label>
          <Form.Control as='select'>
            <option>AAAA</option>
            <option>BBBB</option>
          </Form.Control>
        </Form.Group>
        <Button type='submit'>Dodaj</Button>
      </Form>

    )
  }
}

const mapStateToProps = state => {
  return {
      tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
      addTask : (task) => dispatch({type: actions.ADD_RECORD, value: task})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)