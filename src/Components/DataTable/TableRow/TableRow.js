import React from 'react'
import TableCell from '../TableCell'
import RowControls from '../RowControls'

const TableRow = ({ row, columns, data, controller }) => {
  const onControlsClick = ev => {
    controller(ev, row)
  }
  return (
    <tr>
      {columns.map((col, idx) => {
        let value = typeof col === 'string' ? row[col] : row[col.field]

        const path = col.field?.split('.')
        if (path?.length > 1) {
          value = row[path.shift()]
          while (value && path.length) {
            value = value[path.shift()]
          }
        }

        return (
          <TableCell
            key={idx}
            value={value}
            column={col}
            row={row}
            data={data}
            format={col.format}
          />
        )
      })}
      {typeof controller === 'function' && (
        <td>
          <RowControls onClick={onControlsClick} />
        </td>
      )}
    </tr>
  )
}

export default TableRow
