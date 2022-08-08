const TableCell = ({ value, row, data, format, column }) => {
  return format ? (
    <td className={column.className}>{format(value, row, data)}</td>
  ) : (
    <td className={column.className}>{value?.toString()}</td>
  )
}

export default TableCell
