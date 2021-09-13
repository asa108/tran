import { useEffect, useState } from "react";
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
import EntryLines from "./components/EntryLines";
import ModalEdlit from "./components/ModalEdit";

export default function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState(false);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      console.log("index", index);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react
  }, [isOpen]);

  useEffect(() => {
    let totalIncom = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncom += Number(entry.value));
      // eslint-disable-next-line react-hook-/exhaustive-deps
    });
    setTotal(totalIncom - totalExpenses);
    setIncomeTotal(totalIncom);
    setExpenseTotal(totalExpenses);
  }, [entries]);

  // store.subscribe(() => {
  //   console.log("store", store.getState());
  // });

  // const payload_add = {
  //   id: 5,
  //   description: "Hello from redux",
  //   value: 100,
  //   isExpense: false
  // };

  // const payload_remove = {
  //   id: 1
  // };

  // store.dispatch(addEntryRedux(payload_add));
  // store.dispatch(removeEntryRedux(1));

  const deletEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  const edeitEntry = (id) => {
    console.log(`edeit entry id with ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense
    });
    setEntries(result);
    resetEntry();
  };
  return (
    <Container>
      <MainHeader title="Budget" tyle="h1" />
      <DisplayBalance title="Your Balance" value={total} size="small" />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" tyle="h3" />
      <EntryLines
        entries={entries}
        deletEntry={deletEntry}
        edeitEntry={edeitEntry}
      />

      <MainHeader title="Add new transaction" tyle="h3" />

      <NewEntryForm
        addEntry={addEntry}
        value={value}
        description={description}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdlit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        value={value}
        description={description}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

var initialEntries = [
  {
    id: 1,
    description: "Work Income",
    value: 10000,
    isExpense: false
  },
  {
    id: 2,
    description: "Work BIll",
    value: 20,
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: 2000,
    isExpense: true
  }
];
