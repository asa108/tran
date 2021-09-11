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
import EntryLine from "./EntryLine";

const EntryLines = ({ entries, deletEntry, edeitEntry }) => {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id}
          {...entry}
          deletEntry={deletEntry}
          edeitEntry={edeitEntry}
        />
      ))}
    </Container>
  );
};

export default EntryLines;
