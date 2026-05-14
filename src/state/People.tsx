import { useState } from "react";

const initialPeople = [
  {
    userId: 1,
    id: '4',
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: '5',
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: '6',
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: '7',
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: '8',
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
];
export default function People() {
    const [people, setPeople] = useState(initialPeople);
    const handleDelete = (id: string) => {
        setPeople(people.filter((person) => person.id !== id));
      };
      const toggleCompleted = (id: string) => {
        setPeople(
          people.map((person) => {
            if (person.id === id) {
              return { ...person, completed: !person.completed };
            }
            return person;
          }),
        );
      };
    return <div>
    <h2>People List</h2>
    <ul>
      {people.map((person) => {
        return (
          <li key={person.id}>
            <div>title: {person.title}</div>
            <div>completed: {person.completed? "true": "false"}</div>
            <button onClick={() => handleDelete(person.id)}>Delete</button>
            <button onClick={() => toggleCompleted(person.id)}>
              change completed status
            </button>
          </li>
        );
      })}
    </ul>
  </div>

}