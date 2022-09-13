import React from "react";

import AvatarProfile from "images/AvatarProfile"; //No need for alias  or parent
import { MenuHorizontal } from "neetoicons";
import { Typography, Avatar, Dropdown } from "neetoui";

export const getTableColumnData = showAlert => [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (name, { role }) => (
      <div className="flex space-x-2">
        <Avatar
          user={{
            imageUrl: AvatarProfile,
          }}
        />
        <div>
          <Typography style="h4">{name}</Typography>
          <Typography style="body3">{role}</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    key: "created_at",
    width: "30%",
  },
  {
    title: "",
    dataIndex: "more",
    key: "more",
    width: "10%",
    render: () => (
      <Dropdown
        buttonStyle="text"
        icon={MenuHorizontal}
        position="bottom-start"
      >
        <li className="m-1">Edit</li>
        <li className="m-1" onClick={showAlert}>
          Delete
        </li>
      </Dropdown>
    ),
  },
];

export const CONTACTS_TABLE_COLUMN_DATA = [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (name, { role }) => (
      <div className="flex space-x-2">
        <Avatar
          user={{
            imageUrl: AvatarProfile,
          }}
        />
        <div>
          <Typography style="h4">{name}</Typography>
          <Typography style="body3">{role}</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    key: "created_at",
    width: "30%",
  },
  {
    title: "",
    dataIndex: "more",
    key: "more",
    width: "10%",
    render: () => (
      <Dropdown
        buttonStyle="text"
        icon={MenuHorizontal}
        position="bottom-start"
      >
        <li className="m-1">Edit</li>
        <li className="m-1">Delete</li>
      </Dropdown>
    ),
  },
];
