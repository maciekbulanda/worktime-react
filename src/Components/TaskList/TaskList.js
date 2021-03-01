import { React, Component } from 'react'
import { Badge, Card, CardGroup } from 'react-bootstrap'
import { connect } from 'react-redux'

const TaskList = (props) => {
    const minutesFromText = (timeAsText) => {
        let time = parseInt(timeAsText.substring(0,2)) * 60 + parseInt(timeAsText.substring(3,5))
        return time
    }
    
    return (
        <>
            {props.records.days.map(day => (
                <Card key={day.date} className='mb-2'>
                    <Card.Header>
                        {day.date}
                    </Card.Header>
                    <Card.Body>
                        {day.tasks.map(task => (
                            <div key={task.from}>
                                {task.from} : {task.to} <Badge variant='dark'>{task.topic}</Badge><button className="close">&times;</button>
                            </div>
                        ))}
                    </Card.Body>
                    <Card.Footer >
                        Czas pracy: {(day.tasks.reduce((sum, value) => {
                            let minutes = minutesFromText(value.to) - minutesFromText(value.from)
                            return sum + minutes/60
                        },0).toFixed(2)+'h')}
                    </Card.Footer>
                </Card>
            ))}
        </>
    )
}

const mapStateToProps = state => {
    return {
        records: state
    }
}

export default connect(mapStateToProps)(TaskList)
