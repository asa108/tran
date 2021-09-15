import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../actions/modals.actions";
import useEntryDetails from "../hooks/useEntryDetails";

const ModalEdit = ({ isOpen, value, description, isExpense, id }) => {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          value={entryUpdate.value}
          description={entryUpdate.description}
          isExpense={entryUpdate.isExpense}
          setDescription={entryUpdate.setDescription}
          setValue={entryUpdate.setValue}
          setIsExpense={entryUpdate.setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} positive>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
