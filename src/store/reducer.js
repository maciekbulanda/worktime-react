import * as actions from './actions'

const initState = {
    days: [],
    error: {
        error: false,
        message: ""
    }
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.ADD_RECORD:
            if (validate(action.value))
                return addRecord(state, action.value)
            else
                return {
                    ...state,
                    error: {
                        error: true,
                        message: "Błąd danych"
                    }
                }
        default: return state
    }
}


const validate = (record) => {
    console.log(record)
    return compareTime(record.from, record.to) < 0
}

const compareTime = (from, to) => {
    let fromHours = from.substring(0, 2)
    let fromMinutes = from.substring(3)
    let toHours = to.substring(0, 2)
    let toMinutes = to.substring(3)
    return (fromHours * 60 + fromMinutes) - (toHours * 60 + toMinutes)
}

const addRecord = (oldState, record) => {
    let newState = []
    let found = false
    for (const day of oldState.days) {
        if (day.date === record.date) {
            found = true
            try {
                day.tasks = addTime(day.tasks, { from: record.from, to: record.to, topic: record.topic })
            }
            catch (e) {
                newState.error = { error: true, message: e }
            }
        }
    }

    if (!found) {
        newState = {
            ...oldState,
            days: [...oldState.days, {
                date: record.date,
                tasks: [
                    {
                        from: record.from,
                        to: record.to,
                        topic: record.topic
                    }
                ]
            }],
            error: {
                error: false,
                message: ""
            }
        }
    }
    return newState
}

const addTime = (destination, source) => {
    let newDestination = []
    for (let i = 0; i < destination.length; i++) {
        if (destination[i].from) { }
    }
    return newDestination
}