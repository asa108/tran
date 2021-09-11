import React, { useState } from "react";
import {
  Container,
  Grid,
  Header,
  Segment,
  Statistic,
  Icon,
  Form,
  Button,
  Checkbox
} from "semantic-ui-react";

import ButtonSaveCancel from "./ButtonSaveCancel";
import EntryForm from "./EntryForm";

const NewEntryForm = ({
  addEntry,
  value,
  description,
  isExpense,
  setDescription,
  setIsExpense,
  setValue
}) => {
  return (
    <Form unstackable>
      <EntryForm
        value={value}
        description={description}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveCancel addEntry={addEntry} />
    </Form>
  );
};

export default NewEntryForm;
