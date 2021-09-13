import React, { useState } from "react";
import { Form } from "semantic-ui-react";

import ButtonSaveCancel from "./ButtonSaveCancel";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

const NewEntryForm = () => {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry
  } = useEntryDetails();

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
