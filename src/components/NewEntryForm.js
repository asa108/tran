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
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../actions/entries.actions";

import ButtonSaveCancel from "./ButtonSaveCancel";
import EntryForm from "./EntryForm";
import { v4 as uuidv4 } from "uuid";

const NewEntryForm = () => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch();

  const addEntry = () => {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense
      })
    );
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

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
