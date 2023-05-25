'use client';

import { Button, Header } from "ui";
import { add } from "@bibiana/utilities";

export default function Page() {
  const addition = ()  =>{
    console.log(add(2,2))
  }

  return (
    <>
      <Header text="Web" />
       <button onClick={addition}>Add</button>
      <Button />
    </>
  );
}
