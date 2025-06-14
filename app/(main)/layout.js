import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='container my-20 mx-auto'>
        {
            children
        }
    </div>
  )
}

export default MainLayout