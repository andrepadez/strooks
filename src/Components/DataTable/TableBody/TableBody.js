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

/*
<tr>
        <th scope="row">
          <span className="badge badge-dot mr-4">
            <i className="bg-success"></i>
            <span className="status">10 mins</span>
          </span>
        </th>
        <td className="budget">Jimmy</td>
        <td>aa</td>
        <td>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modal-booked"
            >
              Booked
            </button>
            <button
              type="button"
              className="btn btn-outline-warning"
              data-toggle="modal"
              data-target="#modal-not-booked"
            >
              Not Booked
            </button>
          </div>
        </td>
        <td>
          <i
            className="fas fa-phone-alt text-success fa-2x mr-3"
            data-toggle="modal"
            data-target="#modal-call"
          ></i>
          <i className="fas fa-comment-dots text-success fa-2x ml-3"></i>
        </td>
        <td className="text-right">
          <div className="dropdown">
            <a
              className="btn btn-sm btn-icon-only text-light"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
              <a className="dropdown-item" href="#">
                Detail view
              </a>
              <a
                className="dropdown-item"
                data-toggle="sweet-alert"
                data-sweet-alert="warning"
                href="#"
              >
                Delete
              </a>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <span className="badge badge-dot mr-4">
            <i className="bg-success"></i>
            <span className="status">1 days</span>
          </span>
        </th>
        <td className="budget">Jack</td>
        <td>aa</td>
        <td></td>
        <td></td>
        <td className="text-right">
          <div className="dropdown">
            <a
              className="btn btn-sm btn-icon-only text-light"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
              <a className="dropdown-item" href="#">
                Detail view
              </a>
              <a
                className="dropdown-item"
                data-toggle="sweet-alert"
                data-sweet-alert="warning"
                href="#"
              >
                Delete
              </a>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <span className="badge badge-dot mr-4">
            <i className="bg-danger"></i>
            <span className="status">3 days</span>
          </span>
        </th>
        <td className="budget">Bob</td>
        <td>aa</td>
        <td>
          <div className="d-flex align-items-center"></div>
        </td>
        <td></td>
        <td className="text-right">
          <div className="dropdown">
            <a
              className="btn btn-sm btn-icon-only text-light"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
              <a className="dropdown-item" href="#">
                Detail view
              </a>
              <a
                className="dropdown-item"
                data-toggle="sweet-alert"
                data-sweet-alert="warning"
                href="#"
              >
                Delete
              </a>
            </div>
          </div>
        </td>
      </tr>
*/

export default TableBody
