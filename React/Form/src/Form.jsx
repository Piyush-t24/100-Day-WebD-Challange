import { useState } from "react";

export default function form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  // let handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };

  let handleInputChange = () => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;

    setFormData((currData) => {
      // currData[fieldName] = newValue;
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit =(event)=>{
    event.preventDefault();
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Full Name</label>
      <input
        placeholder="enter full name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullName"
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="username">Username</label>
      <input
        placeholder="enter username"
        type="text"
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"
      />
      <button>Submit</button>
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        placeholder="enter password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <button>Submit</button>
    </form>
  );
}
