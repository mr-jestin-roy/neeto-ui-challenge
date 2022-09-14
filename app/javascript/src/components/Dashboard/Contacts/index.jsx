import React, { useState } from "react";

import { Button, Pagination, Alert, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import ContactPane from "./Create";
import MenuBar from "./MenuBar";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleDeleteAlert = () => {
    setShowDeleteAlert(showDeleteAlert => !showDeleteAlert);
  };

  const handleSubmit = () => {
    setShowDeleteAlert(showDeleteAlert => !showDeleteAlert);
    Toastr.success("Contact deleted successfully.");
  };

  return (
    <>
      <MenuBar />
      <Container>
        <Header
          menuBarToggle
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contacts"
              onClick={() => setShowNewContactPane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: "Search Name, Email, etc..",
          }}
        />
        <Table showAlert={() => handleDeleteAlert()} />
        <div className="mt-8 mb-8 flex w-full flex-row justify-end">
          <Pagination count={80} navigate={() => {}} pageNo={3} pageSize={8} />
        </div>
        <Alert
          isOpen={showDeleteAlert}
          message="Are you sure you want to delete contact? These changes cannot be undone."
          title="Delete Contact"
          onClose={() => setShowDeleteAlert(false)}
          onSubmit={() => handleSubmit()}
        />
        <ContactPane
          showPane={showNewContactPane}
          onClose={() => {
            setShowNewContactPane(false);
          }}
        />
      </Container>
    </>
  );
};

export default Contacts;
