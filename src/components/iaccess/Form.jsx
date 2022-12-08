import React, { useState } from "react";
import axios from "axios";
export default function Form() {
  const [files, setFiles] = useState([]);
  const [input, setinput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    contact: "",
    employee: "",
  });
  const [file, setFile] = useState([]);

  const handleFiles = (e) => setFiles(e.target.files ? e.target.files : []);
  const handleFile = (e) => setFile(e.target.files ? e.target.files : []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length > 0) {
      const { firstname, lastname, email, username, contact, employee } = input;
      const formData = new FormData();
      formData.append("image", files[0]);
      formData.append("image", file[0]);
      formData.append("firstname", firstname);
      formData.append("lastname", lastname);
      formData.append("contact", contact);
      formData.append("username", username);
      formData.append("employee", employee);
      formData.append("email", email);

      axios
        .post(
          "http://localhost:8080/iaccess/editprofile",

          formData,
          {
            headers: {
              authorization:
                "berer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjAsIm5hbWUiOiJ2aXNoYWwiLCJsYXN0bmFtZSI6Im11bmRheSIsImVtYWlsIjoidmlzaHUuaW1AZ21haWwuY29tIiwidXNlcm5hbWUiOiJzdXBlcmFkbWluIiwib3JnYW5pemF0aW9uX2lkIjoxNSwiZW1wbG95ZV90eXBlIjoiZCIsImVtcGxveWVfaWQiOiI1NWNqampjZmZmamRkIiwiY291bnRyeSI6ImluZGlhIiwiY29udGFjdF9ubyI6Iis5MTg1NzAwOTA1NTYiLCJ1c2VyX3JvbGUiOiJzdXBlcmFkbWluIiwidG90cCI6IlRSVUUiLCJhMmYiOiJUT1RQIiwiRmlyc3RMb2dpbiI6InRydWUiLCJpYXQiOjE2NzA0MjU4NDl9.ssjY-JTChydOSicDoFocYBk4h0Cj8iuNqOMWcFApmfw",
            },
          }
        )
        .then((res) => console.log(res.data));
    }
  };

  const handleinput = (e) => {
    //code
    const { value, name } = e.target;
    setinput({ ...input, [name]: value });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
        <input
          type="text"
          placeholder="firstname"
          name={"firstname"}
          onChange={handleinput}
          value={input.firstname}
        />
        <br />
        <input
          type="text"
          placeholder="lastname"
          name={"lastname"}
          onChange={handleinput}
          value={input.lastname}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          name={"email"}
          onChange={handleinput}
          value={input.email}
        />
        <br />
        <input
          type="text"
          placeholder="username"
          name={"username"}
          onChange={handleinput}
          value={input.username}
        />
        <br />
        <input
          type="text"
          placeholder="conatct"
          name={"contact"}
          onChange={handleinput}
          value={input.contact}
        />
        <br />
        <input
          type="text"
          placeholder="employee"
          name={"employee"}
          onChange={handleinput}
          value={input.employee}
        />
        <br />

        <input type="file" name="image" onChange={handleFiles} />
        <br />
        <input type="file" name="image" onChange={handleFile} />
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
