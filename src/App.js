import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./styles.css";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdlit from "./components/ModalEdit";

import { useSelector } from "react-redux";

export default function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  useEffect(() => {
    let totalIncom = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncom += Number(entry.value));
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

  // const edeitEntry = (id) => {
  //   console.log(`edeit entry id with ${id}`);
  //   if (id) {
  //     const index = entries.findIndex((entry) => entry.id === id);
  //     const entry = entries[index];
  //     setEntryId(id);
  //     setDescription(entry.description);
  //     setValue(entry.value);
  //     setIsExpense(entry.isExpense);
  //     setIsOpen(true);
  //   }
  // };

  // const addEntry = () => {
  //   const result = entries.concat({
  //     id: entries.length + 1,
  //     description,
  //     value,
  //     isExpense
  //   });
  //   // setEntries(result);
  //   resetEntry();
  // };

  // const resetEntry = () => {
  //   setDescription("");
  //   setValue("");
  //   setIsExpense(true);
  // };
  return (
    <Container>
      <MainHeader title="Budget" tyle="h1" />
      <DisplayBalance title="Your Balance" value={total} size="small" />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" tyle="h3" />
      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" tyle="h3" />

      <NewEntryForm />
      <ModalEdlit isOpen={isOpen} {...entry} />
    </Container>
  );
}

// var initialEntries = [
//   {
//     id: 1,
//     description: "Work Income",
//     value: 10000,
//     isExpense: false
//   },
//   {
//     id: 2,
//     description: "Work BIll",
//     value: 20,
//     isExpense: true
//   },
//   {
//     id: 3,
//     description: "Rent",
//     value: 2000,
//     isExpense: true
//   }
// ];
