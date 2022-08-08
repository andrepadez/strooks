import React from 'react'

const TableContainer = ({ title, children }) => {
  return (
    <div className="card data-table">
      {title && (
        <div className="card-header border-0">
          <h4 className="mb-0">{title}</h4>
        </div>
      )}
      <div className="table-responsive">{children}</div>
    </div>
  )
}

export default TableContainer
