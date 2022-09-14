import * as yup from "yup";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  role: null,
};
export const ContactDetails = [
  {
    id: 0,
    name: "Ronald Richards",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Sep 13, 2022",
  },
  {
    id: 1,
    name: "Jacob Jones",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Sep 13, 2022",
  },
  {
    id: 2,
    name: "Ronald Richards",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Sep 13, 2022",
  },
  {
    id: 3,
    name: "Jacob Jones",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Sep 13, 2022",
  },
  {
    id: 4,
    name: "Ronald Richards",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Sep 13, 2022",
  },
  {
    id: 5,
    name: "Jacob Jones",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Sep 13, 2022",
  },
  {
    id: 6,
    name: "Ronald Richards",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Sep 13, 2022",
  },
  {
    id: 7,
    name: "Jacob Jones",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Sep 13, 2022",
  },
];

export const MenuBarBlocks = {
  main: [
    {
      label: "All",
      count: 0,
      active: true,
    },
    {
      label: "Archived",
      count: 0,
      active: false,
    },
    {
      label: "Completed",
      count: 0,
      active: false,
    },
    {
      label: "Phase 2",
      count: 0,
      active: false,
    },
  ],
  segments: [],
  tags: [],
};
export const ROLES = [
  {
    label: "Owner",
    value: "owner",
  },
  {
    label: "Employee",
    value: "employee",
  },
];

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup.string().required("Email address is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    })
    .required("Role is required"),
});
