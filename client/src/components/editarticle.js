import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function EditArticle() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    date: "", 
    citations: "", 
    link: "", 
    funding: "",
    recordarticles: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:4000/recordarticle/${params.id.toString()}`);

      if (!response.ok) {
        const message = `This error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recordarticle = await response.json();
      if (!recordarticle) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(recordarticle);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedArticle = {
      title: form.title,
      author: form.author,
      date: form.date,
      citations: form.citations,
      link: form.link
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:4000/updatearticle/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedArticle),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Update Article</h3>
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
        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}