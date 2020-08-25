import React from 'react'
import StudentList from './StudentList'
  
  function StudentTab(props) {
    const [ active, setActive ] = React.useState(null);
  
    const openTab = e => setActive(+e.target.dataset.index);
  
    return (
      <div>
        <div className="tab">
          {props.statusTypes.map((StatusType, i) => (
            <button
              className={`tablinks ${i === active ? 'active' : ''}`}
              onClick={openTab}
              data-index={i}
            >{StatusType.title}</button>
          ))}
        </div>
        
        <div className="tabcontent">
           
        {props.statusTypes[active] && <StudentList students = {props.students} statuses = {props.statuses} statusType = {props.statusTypes[active].studentActive}/>}
        </div>
        
      </div>
    );
  }
  
  export default StudentTab 
