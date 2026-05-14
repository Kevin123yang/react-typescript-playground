import { useState, type ReactNode } from "react";
import Counter from "./counter";
import Parent from "./unnecessry";
import { ShowHide } from "./ShowHide";
import People from "./People";
export default function Day13() {
  return (
    <div>
      <Counter />
      <Parent />
      <ShowHide/>
      <People/>
    </div>
  );
}
