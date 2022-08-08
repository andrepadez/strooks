import React, { useState, useEffect } from 'react';

var TableHead = function TableHead(_ref) {
  var columns = _ref.columns;
  return /*#__PURE__*/React.createElement("thead", {
    className: "thead-light"
  }, /*#__PURE__*/React.createElement("tr", null, columns === null || columns === void 0 ? void 0 : columns.map(function (col, idx) {
    var label = col.label || typeof col === 'string' && col || '';
    var sortKey = col.sortKey;
    return sortKey ? /*#__PURE__*/React.createElement("th", {
      key: idx,
      "data-sort": sortKey
    }, label) : /*#__PURE__*/React.createElement("th", {
      key: idx,
      "data-sort": sortKey
    }, label);
  })));
};

var TableCell = function TableCell(_ref) {
  var value = _ref.value,
      row = _ref.row,
      data = _ref.data,
      format = _ref.format,
      column = _ref.column;
  return format ? /*#__PURE__*/React.createElement("td", {
    className: column.className
  }, format(value, row, data)) : /*#__PURE__*/React.createElement("td", {
    className: column.className
  }, value === null || value === void 0 ? void 0 : value.toString());
};

var RowControls = function RowControls(_ref) {
  var onClick = _ref.onClick;
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

var TableRow = function TableRow(_ref) {
  var row = _ref.row,
      columns = _ref.columns,
      data = _ref.data,
      controller = _ref.controller;

  var onControlsClick = function onControlsClick(ev) {
    controller(ev, row);
  };

  return /*#__PURE__*/React.createElement("tr", null, columns.map(function (col, idx) {
    var _col$field;

    var value = typeof col === 'string' ? row[col] : row[col.field];
    var path = (_col$field = col.field) === null || _col$field === void 0 ? void 0 : _col$field.split('.');

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

var TableBody = function TableBody(_ref) {
  var data = _ref.data,
      columns = _ref.columns,
      controller = _ref.controller;
  return /*#__PURE__*/React.createElement("tbody", null, data.map(function (row, idx) {
    var key = row.id || row._id || JSON.stringify(row) || idx;
    return /*#__PURE__*/React.createElement(TableRow, {
      key: key,
      row: row,
      data: data,
      columns: columns,
      controller: controller
    });
  }));
};

var DataTable = function DataTable(_ref) {
  var data = _ref.data,
      columns = _ref.columns,
      show = _ref.show,
      className = _ref.className,
      controller = _ref.controller;

  var _useState = useState(),
      cols = _useState[0],
      setCols = _useState[1];

  var _useState2 = useState(),
      rows = _useState2[0],
      setRows = _useState2[1];

  useEffect(function () {
    setRows(data);
  }, [data, show]);
  useEffect(function () {
    var cols = columns || [];

    if (!columns) {
      cols = data && Object.keys(data[0]).map(function (k) {
        return {
          field: k,
          label: k
        };
      });
    } else if (typeof columns[0] === 'string') {
      cols = columns.map(function (c) {
        return {
          field: c,
          label: c
        };
      });
    }

    setCols(cols);
  }, [columns]);
  if (!data || !cols) return null;
  data = show ? data.slice(0, show) : data;
  return /*#__PURE__*/React.createElement("table", {
    className: className + " table"
  }, cols && /*#__PURE__*/React.createElement(TableHead, {
    data: data,
    columns: cols
  }), cols && rows && /*#__PURE__*/React.createElement(TableBody, {
    data: rows,
    columns: cols,
    controller: controller
  }));
};

var TableContainer = function TableContainer(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "card data-table"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "card-header border-0"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mb-0"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "table-responsive"
  }, children));
};

var ValueCard = function ValueCard(_ref) {
  var children = _ref.children,
      value = _ref.value,
      title = _ref.title,
      subtitle = _ref.subtitle,
      before = _ref.before,
      after = _ref.after;
  return /*#__PURE__*/React.createElement("div", {
    className: "card leads-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: " card-body text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-gradient text-primary"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7em'
    },
    className: "ms-n1"
  }, before), /*#__PURE__*/React.createElement("span", {
    id: "status2"
  }, children ? children : value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7em'
    },
    className: "ms-n1"
  }, after)), /*#__PURE__*/React.createElement("h6", {
    className: "mb-0 font-weight-bolder"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "opacity-8 mb-0 text-sm"
  }, subtitle)));
};

var StatusDot = function StatusDot(_ref) {
  var type = _ref.type,
      _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 1 : _ref$scale;
  return /*#__PURE__*/React.createElement("span", {
    className: "badge badge-dot"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      transform: "scale(" + scale + ")"
    },
    className: "bg-" + type
  }));
};

export { DataTable, TableContainer as DataTableContainer, StatusDot, ValueCard };
//# sourceMappingURL=index.modern.js.map
