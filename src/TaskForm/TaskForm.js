import { React, Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import * as actions from '../store/actions'

class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      from: '',
      to: '',
      topic: ''
    }
  }

  addTask(e) {
    e.preventDefault();
    console.log("Add pressed")
    // verifyTask(this.state)
    this.props.addTask(this.state);
  }

  changeValue(e) {
    switch (e.target.id) {
      case 'date': this.setState({ date: e.target.value }); break
      case 'from': this.setState({ from: e.target.value }); break
      case 'to': this.setState({ to: e.target.value }); break
      case 'topic': this.setState({ topic: e.target.value }); break
    }
  }

  render() {
    let errorMessage
    if (this.props.register.error.error) {
      errorMessage = (<Alert variant='danger'>{this.props.register.error.message}</Alert>)
    }
    return (
      <>
        {errorMessage}
        <Form onSubmit={(e) => this.addTask(e)}>
          <Form.Group>
            <Form.Label>Data</Form.Label>
            <Form.Control value={this.state.date} onChange={(e) => this.changeValue(e)} type='date' id='date' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Temat</Form.Label>
            <Form.Control value={this.state.topic} onChange={(e) => this.changeValue(e)} as='select' id='topic'>
              <option value=''>---</option>
              <option>AAAA</option>
              <option>BBBB</option>
            </Form.Control>
          </Form.Group>
          <Form.Group style={{ "width": "50%", "display": "inline-block", "boxSizing": "border-box", "paddingRight": "2px" }}>
            <Form.Label>Od</Form.Label>
            <Form.Control onChange={(e) => this.changeValue(e)} type='time' id='from' />
          </Form.Group>
          <Form.Group style={{ "width": "50%", "display": "inline-block", "boxSizing": "border-box", "paddingLeft": "2px" }}>
            <Form.Label>Do</Form.Label>
            <Form.Control onChange={(e) => this.changeValue(e)} type='time' id='to' />
          </Form.Group>
          <Button type='submit'>Dodaj</Button>
        </Form>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    register: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: (task) => dispatch({ type: actions.ADD_RECORD, value: task })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)