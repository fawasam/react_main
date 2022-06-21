import React from "react";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { useEffect, useState } from "react";
const Getbooks = () => {
  const [datas, setDatas] = useState([]);
  //init services
  const db = getFirestore();

  //collection ref
  const colRef = collection(db, "books");

  //queries
  const q = query(
    colRef,
    where("author", "==", "Paulo Coelho"),
    orderBy("title", "desc")
  );

  // get collection data
  // getDocs(colRef)
  //   .then((snapshot) => {
  //     let books = [];
  //     snapshot.docs.forEach((doc) => {
  //       books.push({
  //         ...doc.data(),
  //         id: doc.id,
  //       });
  //       setDatas(books);
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // real time collection data

  onSnapshot(colRef, (snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({
        ...doc.data(),
        id: doc.id,
      });
      setDatas(books);
    });
  });

  return (
    <div className="App">
      <h1>Hello</h1>
      {datas?.map((data, index) => (
        <div key={data.id}>
          <div
            onClick={() => {
              window.alert(data.id);
            }}
          >
            <h1>{data.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Getbooks;
