import React from 'react'
import TableRow from '../TableRow'

const TableBody = ({ data, columns, className, controller }) => {
  return (
    <tbody>
      {data.map((row, idx) => {
        const key = row.id || row._id || JSON.stringify(row) || idx
        return (
          <TableRow key={key} row={row} data={data} columns={columns} controller={controller} />
        )
      })}
    </tbody>
  )
}

export default TableBody
