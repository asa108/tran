import React from "react";
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
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = ({ title, value, color = "black", size = "tiny" }) => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income" value="1,000" color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Exoenses" value="681,000" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
