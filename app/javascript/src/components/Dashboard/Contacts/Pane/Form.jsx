import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  CONTACTS_FORM_VALIDATION_SCHEMA,
  ROLES,
  CONTACTS_FORM_INITIAL_FORM_VALUES,
} from "../constants";

const ContactForm = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    Toastr.success("Contact added successfully.");
    onClose();
  };

  return (
    <Formik
      initialValues={CONTACTS_FORM_INITIAL_FORM_VALUES}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-8">
            <div className="flex w-full flex-row space-x-6">
              <Input
                required
                className="w-full flex-grow-0"
                label="First Name"
                name="firstname"
                placeholder="Enter first name"
              />
              <Input
                required
                className="w-full flex-grow-0"
                label="Last Name"
                name="lastname"
                placeholder="Enter last name"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLES}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={Check}
              label="Save Changes"
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
