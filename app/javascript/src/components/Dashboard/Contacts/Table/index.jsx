import React from "react";

import { Table as ContactTable } from "neetoui";

import { getTableColumnData } from "./TableColumnData";

import { ContactDetails } from "../constants";

const Table = ({ showAlert }) => (
  <ContactTable
    allowRowClick
    columnData={getTableColumnData(showAlert)}
    handlePageChange={() => {}}
    rowData={ContactDetails}
    onRowClick={() => {}}
    onRowSelect={() => {}}
  />
);
export default Table;
