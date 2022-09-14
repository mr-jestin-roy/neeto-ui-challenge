import React from "react";

import { Pane, Typography } from "neetoui";

import ContactForm from "./Pane/Form";

const ContactPane = ({ showPane, onClose }) => (
  <Pane isOpen={showPane} onClose={onClose}>
    <Pane.Header>
      <Typography style="h2" weight="semibold">
        Add New Contact
      </Typography>
    </Pane.Header>
    <ContactForm onClose={onClose} />
  </Pane>
);

export default ContactPane;
