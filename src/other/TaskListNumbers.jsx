import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const TaskListNumbers = ({ data }) => {
  const [userData] = useContext(AuthContext)
  const [counts, setCounts] = useState(data.taskCounts)

  useEffect(() => {
    if (userData) {
      const currentEmployee = userData.find(emp => emp.id === data.id)
      if (currentEmployee) {
        setCounts(currentEmployee.taskCounts)
      }
    }
  }, [userData, data.id])

  return (
    <div className='flex screen mt-10 justify-between overflow-x-auto gap-5'>
      <div className='rounded-xl py-6 px-9 p-10 w-[45%] bg-[#10b183]'>
        <h2 className='text-2xl font-semibold'>{counts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl py-6 px-9 p-10 w-[45%] bg-[#0d9b86]'>
        <h2 className='text-2xl font-semibold'>{counts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl py-6 px-9 p-10 w-[45%] bg-[#35EABD]'>
        <h2 className='text-2xl text-black font-semibold'>{counts.active}</h2>
        <h3 className='text-xl font-medium text-black'>Active Task</h3>
      </div>
      <div className='rounded-xl py-6 px-9 p-10 w-[45%] bg-[#4682A9]'>
        <h2 className='text-2xl font-semibold'>{counts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers