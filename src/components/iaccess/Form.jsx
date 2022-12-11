import React, { useState } from "react";
import axios from "axios";
export default function Form() {
  const [signature1, setsignature1] = useState([]);
  const [signature2, setsignature2] = useState([]);
  const [profile, setprofile] = useState([]);
  const [input, setinput] = useState("");

  const handlesign1 = (e) =>
    setsignature1(e.target.files ? e.target.files : []);
  const handlesign2 = (e) =>
    setsignature2(e.target.files ? e.target.files : []);
  const handleprofile = (e) => setprofile(e.target.files ? e.target.files : []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    const formData = new FormData();
    formData.append("signature1", signature1[0]);
    formData.append("signature2", signature2[0]);
    formData.append("avatar", profile[0]);
    formData.append("contact", input);

    axios
      .post(
        "http://localhost:8080/iaccess/editprofile",

        formData,
        {
          headers: {
            authorization:
              "berer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTIsImlhdCI6MTY3MDYwNzIwNH0.Uj5fCPzS8O6hBpRu3q7PmrASF22jV8a9U79C0nafxQg",
          },
        }
      )
      .then((res) => console.log(res.data));
  };

  const handleinput = (e) => {
    //code

    setinput(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
        <input
          type="text"
          placeholder="conatct"
          name={"contact"}
          onChange={handleinput}
          value={input}
        />
        <br />

        <input type="file" name="signature1" onChange={handlesign1} />
        <br />
        <input type="file" name="signature2" onChange={handlesign2} />
        <br />
        <input type="file" name="profile" onChange={handleprofile} />
        <button> send </button>
        <br />
        <img
          src="https://iaccess-s3.s3.us-east-2.amazonaws.com/ca50d5c3368118611373127c57740559"
          alt=""
        />
      </form>
    </div>
  );
}
