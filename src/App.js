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
import "./styles.css";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

export default function App() {
  return (
    <Container>
      <MainHeader title="Budget" tyle="h1" />
      <DisplayBalance title="Your Balance" value="22,444" size="small" />
      <DisplayBalances />

      <MainHeader title="History" tyle="h3" />

      <EntryLine description="income" value="$10.00" />
      <EntryLine description="expense" value="$10.00" isExpense />
      <EntryLine description="income" value="$10.00" />

      <MainHeader title="Add new transaction" tyle="h3" />

      <NewEntryForm />
    </Container>
  );
}
