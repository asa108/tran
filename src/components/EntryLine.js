import React, { useState } from "react";
import {
  Container,
  Grid,
  Header,
  Segment,
  Statistic,
  Icon,
  Form,
  Button
} from "semantic-ui-react";
import ModalEdlit from "./ModalEdit";

import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../actions/entries.actions";

import { openEditModal, closeEditModal } from "../actions/modals.actions";

const EntryLine = ({ id, description, value, isExpense = false }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              ${value}
            </Grid.Column>
            <Grid.Column widescreen={3}>
              <Icon name="edit" onClick={() => dispatch(openEditModal(id))} />
              <Icon
                onClick={() => dispatch(removeEntryRedux(id))}
                name="trash"
                bordered
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default EntryLine;
