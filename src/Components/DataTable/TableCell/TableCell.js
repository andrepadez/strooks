import React from 'react'
import PropTypes from 'prop-types'

const TableCell = ({ value, row, data, format, column }) => {
  return format ? (
    <td className={column.className}>{format(value, row, data)}</td>
  ) : (
    <td className={column.className}>{(value || '').toString()}</td>
  )
}

TableCell.propTypes = {
  value: PropTypes.string,
  row: PropTypes.object,
  data: PropTypes.array,
  format: PropTypes.fn,
  column: PropTypes.object,
}

export default TableCell
