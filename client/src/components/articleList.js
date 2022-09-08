import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Article = (props) => (
  <tr>
    <td>{props.recordarticle.title}</td>
    <td>{props.recordarticle.author}</td>
    <td>{props.recordarticle.date}</td>
    <td>{props.recordarticle.citations}</td>
    <td>{props.recordarticle.link}</td>
    <td>{props.recordarticle.funding}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.recordarticle._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteArticle(props.recordarticle._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function ArticleList() {
  const [recordarticles, setArticles] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getArticles() {
      const response = await fetch(`http://localhost:4000/recordarticle/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const recordarticles = await response.json();
      setArticles(recordarticles);
    }

    getArticles();

    return; 
  }, [recordarticles.length]);

  // This method will delete a record
  async function deleteArticle(id) {
    await fetch(`http://localhost:4000/${id}`, {
      method: "DELETE"
    });

    const newArticle = recordarticles.filter((el) => el._id !== id);
    setArticles(newArticle);
  }

  // This method will map out the records on the table
  function ArticleList() {
    return recordarticles.map((recordarticle) => {
      return (
        <Article
          recordarticle={recordarticle}
          deleteArticle={() => deleteArticle(recordarticle._id)}
          key={recordarticle._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <div class = "text-primary p-3 mb-2 bg-secondary text-white">
      <h3>Article List</h3>
      </div>
      <table class="table table-striped table-dark table-responsive" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author     </th>
            <th>Year</th>
            <th>Citations</th>
            <th>Link</th>
            <th>Funding</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{ArticleList()}</tbody>
      </table>
    </div>
  );
}