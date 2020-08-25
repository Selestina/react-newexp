import React, {useEffect} from 'react'
import StudentTab from './Student/StudentTab'
import Loader from './Loader'

function App() {
  const [students, setStudents] = React.useState([])
  const [statuses, setStatuses] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const statusTypes = [
    {title: `True`, studentActive: true},
    {title: `False`, studentActive: false},
  ]

useEffect(() => {
  fetch('https://my-json-server.typicode.com/paraplancrm/api/students')
  .then(response => response.json())
  .then(students => {
    setStudents(students)
    setLoading(false)
  }) 

  fetch('https://my-json-server.typicode.com/paraplancrm/api/statuses')
  .then(response => response.json())
  .then(statuses => {
    setStatuses(statuses)
    setLoading(false)
  }) 
}, [])

  return (
    
      <div className='wrapper'>
        <h1>Students</h1>

        {/* { loading && <Loader />} */}
        
        <StudentTab statusTypes={statusTypes} students={students} statuses={statuses} />
        {/* {students.length ? (<StudentList students={students} statuses={statuses}/> 
        ) : (
          loading ? null : <p>No Student</p>
        )} */}
        
        
    </div>
    
  );
}

export default App;
