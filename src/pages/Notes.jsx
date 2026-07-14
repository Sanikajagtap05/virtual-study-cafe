import { useEffect, useState, useRef } from "react";
import banner from "../assets/notes-banner.jpg";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  // Refs
  const createNoteRef = useRef(null);
  const titleInputRef = useRef(null);

  // Load Notes
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save Notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Start Writing Button
  const handleStartWriting = () => {
    createNoteRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      titleInputRef.current?.focus();
    }, 500);
  };

  // Add Note
  const addNote = () => {
    if (!title.trim() || !content.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      content,
      pinned: false,
      date: new Date().toLocaleDateString(),
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  // Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Pin Note
  const togglePin = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, pinned: !note.pinned }
          : note
      )
    );
  };

  // Search
  const filteredNotes = notes
    .filter((note) => {
      return (
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase())
      );
    })
    .sort((a, b) => b.pinned - a.pinned);

  return (
    <div
      className="container py-4"
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
      }}
    >
      {/* Hero Banner */}

      <div
        className="card border-0 shadow-lg mb-5 overflow-hidden"
        style={{
          borderRadius: "25px",
        }}
      >
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 p-5">
            <h1
              style={{
                fontWeight: "700",
                color: "#3B3B98",
              }}
            >
              My Notes
            </h1>

            <p
              className="text-muted mt-3"
              style={{
                fontSize: "17px",
              }}
            >
              Capture ideas, lecture notes, reminders and everything important
              in one beautiful place.
            </p>

            <button
              onClick={handleStartWriting}
              className="btn mt-3"
              style={{
                background: "#6366F1",
                color: "white",
                borderRadius: "12px",
                padding: "10px 24px",
              }}
            >
              📒 Start Writing
            </button>
          </div>

          <div className="col-lg-6">
            <img
              src={banner}
              alt="Notes Banner"
              className="img-fluid w-100"
              style={{
                height: "320px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Add Note */}

      <div
        ref={createNoteRef}
        className="card shadow border-0 p-4 mb-5"
        style={{
          borderRadius: "20px",
        }}
      >
        <h4 className="mb-4">➕ Create New Note</h4>

        <input
          ref={titleInputRef}
          type="text"
          placeholder="Title..."
          className="form-control mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="5"
          placeholder="Write something..."
          className="form-control mb-3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={addNote}
          className="btn"
          style={{
            background: "#4F46E5",
            color: "white",
            borderRadius: "12px",
          }}
        >
          Add Note
        </button>
      </div>

      {/* Search */}

      <div className="mb-4">
        <input
          className="form-control"
          placeholder="🔍 Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            borderRadius: "15px",
            padding: "12px",
          }}
        />
      </div>

      {/* Notes */}

      <div className="row">
        {filteredNotes.length === 0 ? (
          <div className="text-center py-5">
            <h3>No Notes Found</h3>

            <p className="text-muted">
              Start by creating your first note.
            </p>
          </div>
        ) : (
          filteredNotes.map((note) => (
            <div className="col-lg-4 col-md-6 mb-4" key={note.id}>
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "18px",
                  transition: ".3s",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <h5>{note.title}</h5>

                    <button
                      onClick={() => togglePin(note.id)}
                      className="btn btn-sm"
                    >
                      {note.pinned ? "📌" : "📍"}
                    </button>
                  </div>

                  <small className="text-muted mb-3">
                    {note.date}
                  </small>

                  <p style={{ flex: 1 }}>
                    {note.content}
                  </p>

                  <button
                    onClick={() => deleteNote(note.id)}
                    className="btn btn-danger mt-3"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}