import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, { title, note }]);
    setTitle("");
    setNote("");
  };
  const handleDelete = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="app">
      <h1>Notes App</h1>

      <div className="layout">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <h2 className="style">Create Notes</h2>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
            />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Note Details"
            ></textarea>
            <button type="submit">Add Note</button>
          </form>
        </div>

        <div className="notes-section">
          <h2>Recent Notes</h2>
          <div className="container">
            {notes.map((n, index) => (
              <div className="note-card" key={index}>
                <h3>{n.title}</h3>
                <p>{n.note}</p>
                <div className="actions">
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
