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

const MainHeader = ({ title, type }) => {
  return <Header as={type}>{title}</Header>;
};

export default MainHeader;
