import { useState, useEffect } from 'react';

const TableHead = ({
  columns
}) => {
  return /*#__PURE__*/React.createElement("thead", {
    className: "thead-light"
  }, /*#__PURE__*/React.createElement("tr", null, columns === null || columns === void 0 ? void 0 : columns.map((col, idx) => {
    let label = col.label || typeof col === 'string' && col || '';
    const sortKey = col.sortKey;
    return sortKey ? /*#__PURE__*/React.createElement("th", {
      key: idx,
      "data-sort": sortKey
    }, label) : /*#__PURE__*/React.createElement("th", {
      key: idx,
      "data-sort": sortKey
    }, label);
  })));
};

const TableCell = ({
  value,
  row,
  data,
  format,
  column
}) => {
  return format ? /*#__PURE__*/React.createElement("td", {
    className: column.className
  }, format(value, row, data)) : /*#__PURE__*/React.createElement("td", {
    className: column.className
  }, value === null || value === void 0 ? void 0 : value.toString());
};

const RowControls = ({
  onClick
}) => {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: "controls flex gap-3 align-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ni ni-settings",
    role: "edit"
  }), /*#__PURE__*/React.createElement("i", {
    className: "ni ni-fat-remove",
    role: "delete"
  }));
};

const TableRow = ({
  row,
  columns,
  data,
  controller
}) => {
  const onControlsClick = ev => {
    controller(ev, row);
  };

  return /*#__PURE__*/React.createElement("tr", null, columns.map((col, idx) => {
    var _col$field;

    let value = typeof col === 'string' ? row[col] : row[col.field];
    const path = (_col$field = col.field) === null || _col$field === void 0 ? void 0 : _col$field.split('.');

    if ((path === null || path === void 0 ? void 0 : path.length) > 1) {
      value = row[path.shift()];

      while (value && path.length) {
        value = value[path.shift()];
      }
    }

    return /*#__PURE__*/React.createElement(TableCell, {
      key: idx,
      value: value,
      column: col,
      row: row,
      data: data,
      format: col.format
    });
  }), typeof controller === 'function' && /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(RowControls, {
    onClick: onControlsClick
  })));
};

const TableBody = ({
  data,
  columns,
  className,
  controller
}) => {
  return /*#__PURE__*/React.createElement("tbody", null, data.map((row, idx) => {
    const key = row.id || row._id || JSON.stringify(row) || idx;
    return /*#__PURE__*/React.createElement(TableRow, {
      key: key,
      row: row,
      data: data,
      columns: columns,
      controller: controller
    });
  }));
};

const DataTable = ({
  title,
  data,
  columns,
  show,
  className,
  controller
}) => {
  const [cols, setCols] = useState();
  const [rows, setRows] = useState();
  useEffect(() => {
    setRows(data);
  }, [data, show]);
  useEffect(() => {
    let cols = columns || [];

    if (!columns) {
      cols = data && Object.keys(data[0]).map(k => ({
        field: k,
        label: k
      }));
    } else if (typeof columns[0] === 'string') {
      cols = columns.map(c => ({
        field: c,
        label: c
      }));
    }

    setCols(cols);
  }, [columns]);
  if (!data || !cols) return null;
  data = show ? data.slice(0, show) : data;
  return /*#__PURE__*/React.createElement("table", {
    className: `${className} table`
  }, cols && /*#__PURE__*/React.createElement(TableHead, {
    data: data,
    columns: cols
  }), cols && rows && /*#__PURE__*/React.createElement(TableBody, {
    data: rows,
    columns: cols,
    controller: controller
  }));
};

export { DataTable };
//# sourceMappingURL=index.modern.js.map
