import React from 'react'
import PropTypes from 'prop-types'
import StudentItem from './StudentItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function StudentList(props){
    return(
        <ul style={styles.ul}>
            {props.students.map((student, index)=> {
                return <StudentItem student={student} statuses={props.statuses} key = {index} />
            })}
        </ul>
    )
}

StudentList.prototype = {
    students: PropTypes.arrayOf(PropTypes.object).isRequired,
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired
    
}

export default StudentList