import React from "react";

import { Table as ContactTable } from "neetoui";

import { getTableColumnData } from "./TableColumnData";

import { ContactDetails } from "../constants";

const Table = ({ showAlert }) => (
  <ContactTable
    allowRowClick
    ColumnData={getTableColumnData(showAlert)}
    rowData={ContactDetails}
  />
);
export default Table;
