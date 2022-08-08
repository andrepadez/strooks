import React from 'react'

const TableHead = ({ columns }) => {
  return (
    <thead className="thead-light">
      <tr>
        {columns?.map((col, idx) => {
          const key = col.field || col
          let label = col.label || (typeof col === 'string' && col) || ''

          const sortKey = col.sortKey

          return sortKey ? (
            <th key={idx} data-sort={sortKey}>
              {label}
            </th>
          ) : (
            <th key={idx} data-sort={sortKey}>
              {label}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default TableHead

// LEAD = {
//   salutation: 'MR',
//   first_name: 'string',
//   last_name: 'string',
//   dob: '2022-08-06',
//   lead_address: {
//     lead: 0,
//     address_line_1: 'string',
//     address_line_2: 'string',
//     city: 'string',
//     state: 'string',
//     post_code: 'string',
//     id: 0,
//     created_at: '2022-08-06T23:02:51.866Z',
//     updated_at: '2022-08-06T23:02:51.866Z',
//     created_at_human: 'string',
//     updated_at_human: 'string',
//   },
//   lead_contact: {
//     lead: 0,
//     email: 'user@example.com',
//     phone: 'string',
//     note: 'string',
//     id: 0,
//     created_at: '2022-08-06T23:02:51.866Z',
//     updated_at: '2022-08-06T23:02:51.866Z',
//     created_at_human: 'string',
//     updated_at_human: 'string',
//   },
//   lead_treatments: [
//     {
//       lead: 0,
//       treatment: 'string',
//       status: 'NEW',
//       price: 'string',
//       id: 0,
//       created_at: '2022-08-06T23:02:51.866Z',
//       updated_at: '2022-08-06T23:02:51.866Z',
//       created_at_human: 'string',
//       updated_at_human: 'string',
//     },
//   ],
//   id: 0,
//   created_at: '2022-08-06T23:02:51.866Z',
//   updated_at: '2022-08-06T23:02:51.866Z',
//   created_at_human: 'string',
//   updated_at_human: 'string',
// }

// NOTES = {
//   lead: 0,
//   note: 'CREDIT_CHECK_FAILED',
//   additional_notes: 'string',
//   treatment: 0,
//   contacted_via: 'SMS',
//   id: 0,
//   created_at: '2022-08-06T23:05:18.639Z',
//   updated_at: '2022-08-06T23:05:18.639Z',
//   created_at_human: 'string',
//   updated_at_human: 'string',
// }
