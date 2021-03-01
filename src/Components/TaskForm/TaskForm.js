import React, { useState } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import * as actions from '../../store/actions'

const TaskForm = (props) => {

  const [rec, setRec] = useState({date: '', from: '', to: '', topic: ''})

  const addTask = (e) => {
    e.preventDefault();
    props.addTask(rec);
  }

  const changeValue = (e) => {
    setRec({
      ...rec,
      [e.target.id] : e.target.value
    })
  }

  let errorMessage
  if (props.register.error.error) {
    errorMessage = <Alert variant='danger'>{props.register.error.message}</Alert>
  }

  const timeInputStyle = {"width": "50%", "display": "inline-block", "boxSizing": "border-box"}

  return (
    <>
      {errorMessage}
      <Form onSubmit={(e) => addTask(e)}>
        <Form.Group>
          <Form.Label>Data</Form.Label>
          <Form.Control value={rec.date} onChange={(e) => changeValue(e)} type='date' id='date' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Temat</Form.Label>
          <Form.Control value={rec.topic} onChange={(e) => changeValue(e)} as='select' id='topic'>
            <option value=''>---</option>
            <option>AAAA</option>
            <option>BBBB</option>
          </Form.Control>
        </Form.Group>
        <Form.Group style={{ ...timeInputStyle , "paddingRight": "2px" }}>
          <Form.Label>Od</Form.Label>
          <Form.Control value={rec.from} onChange={(e) => changeValue(e)} type='time' id='from' />
        </Form.Group>
        <Form.Group style={{ ...timeInputStyle, "paddingLeft": "2px" }}>
          <Form.Label>Do</Form.Label>
          <Form.Control value={rec.to} onChange={(e) => changeValue(e)} type='time' id='to' />
        </Form.Group>
        <Button type='submit'>Dodaj</Button>
      </Form>
    </>
  )
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