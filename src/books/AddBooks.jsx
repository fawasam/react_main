import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [datas, setDatas] = useState([]);
  //init services
  const db = getFirestore();

  //collection ref
  const colRef = collection(db, "books");

  //add books
  const addBooks = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
    }).then(() => {
      setTitle("");
      setAuthor("");
    });
    console.log(title, author);
  };

  return (
    <div>
      <h2>Add new books</h2>
      <form action="" onSubmit={addBooks}>
        <label htmlFor="">Title </label>
        <input
          type="text"
          name="title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">Author </label>
        <input
          type="text"
          name="author"
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        />{" "}
        <br />
        <button>Add new Book</button>
      </form>
    </div>
  );
};

export default AddBooks;
