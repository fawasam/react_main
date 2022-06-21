import React, { useState } from "react";
import { getFirestore, collection, deleteDoc, doc } from "firebase/firestore";

const DeleteBooks = () => {
  const [id, setId] = useState("");
  //init services
  const db = getFirestore();

  //collection ref
  const colRef = collection(db, "books");

  //delete books
  const deleteBooks = (e) => {
    e.preventDefault();
    const docRef = doc(db, "books", id);
    deleteDoc(docRef)
      .then(() => {
        setId("");
        window.alert("item deleted");
      })
      .catch((err) => {
        window.alert("something error");
      });
  };
  return (
    <div>
      <h2>Add new books</h2>
      <form action="" onSubmit={deleteBooks}>
        <label htmlFor="">ID</label>
        <input
          type="text"
          name="id"
          value={id}
          required
          onChange={(e) => setId(e.target.value)}
        />{" "}
        <br />
        <button>Delete Book</button>
      </form>
    </div>
  );
};

export default DeleteBooks;
