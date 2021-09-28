import React from "react";
import data from "./data";
import List from "./List";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clearAll</button>
      </section>
    </main>
  );
}
