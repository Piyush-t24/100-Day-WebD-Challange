import { useState } from "react";

export default function form() {
  let [fullName, setFullName] = useState("");

  let handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  return (
    <form>
      <label htmlFor="username">Full Name</label>
      <input
        placeholder="enter full name"
        type="text"
        value={fullName}
        onChange={handleNameChange}
        id="username"
      /> 
      <button>Submit</button>
    </form>
  );
}
