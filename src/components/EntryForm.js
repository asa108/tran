import React, { Fragment } from "react";
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

const EntryForm = ({
  value,
  description,
  isExpense,
  setValue,
  setIsExpense,
  setDescription
}) => {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="new thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="is expense"
          checked={isExpense}
          onChange={() => setIsExpense((oldState) => !oldState)}
        />
      </Segment>
    </Fragment>
  );
};

export default EntryForm;
