import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateArticle() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    date: "", 
    citations: "", 
    link: "", 
    funding: ""
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:4000/recordarticle/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ title: "", author: "", date: "", citations: "", link: "", funding: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Article</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={form.author}
            onChange={(e) => updateForm({ author: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            className="form-control"
            id="date"
            value={form.date}
            onChange={(e) => updateForm({ date: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="citations">Citations</label>
          <input
            type="text"
            className="form-control"
            id="citations"
            value={form.citations}
            onChange={(e) => updateForm({ citations: e.target.value })}
          />
        </div>
        <div className="form-group">
        <label htmlFor="link">Link</label>
          <input
            type="text"
            className="form-control"
            id="link"
            value={form.link}
            onChange={(e) => updateForm({ link: e.target.value })}
          />
        </div>
        <div className="form-group">
        <label htmlFor="funding">Funding</label>
          <input
            type="text"
            className="form-control"
            id="funding"
            value={form.funding}
            onChange={(e) => updateForm({ funding: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create article"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}