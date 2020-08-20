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
    <li style={styles.li}>
      
        {props.student.name}
            {props.statuses.map(status => {
                if (status.id===props.student.status){
                    console.log(status.active)
                    return <p>{String(status.active)}</p>
                }
            })}
        
            
           

    </li>
    )
}

StudentItem.propTypes = {
    student: PropTypes.object.isRequired,
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired
    // status: PropTypes.object.isRequired,
}

export default StudentItem