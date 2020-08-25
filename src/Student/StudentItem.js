import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function StudentItem(props){
     return(
    props.statuses.map( status => {
        if (status.id===props.student.status){
            if (status.active === props.statusType){
                return <StudentActive student={props.student.name} status={String(status.active)}/>
            }
            return null
        }
    })
     )
}

function StudentActive(props){
    return(
        <li style={styles.li}>

        {props.student}
        <p>{props.status}</p>

        </li>
    )
}


StudentItem.propTypes = {
    student: PropTypes.object.isRequired,
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default StudentItem