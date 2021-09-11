import React from "react";
import {
  Container,
  Grid,
  Header,
  Segment,
  Statistic,
  Icon,
  Form,
  Button,
  Modal
} from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = ({
  isOpen,
  setIsOpen,
  value,
  description,
  isExpense,
  setDescription,
  setIsExpense,
  setValue
}) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          value={value}
          description={description}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} positive>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
