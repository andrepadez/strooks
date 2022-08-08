import React from 'react'

const RowControls = ({ onClick }) => {
  return (
    <div onClick={onClick} className="controls flex gap-3 align-center">
      <i className="ni ni-settings" role="edit"></i>
      <i className="ni ni-fat-remove" role="delete"></i>
    </div>
  )
}

export default RowControls
