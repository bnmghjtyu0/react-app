import React, { useState } from "react";
import { Prompt } from "react-router-dom";

const Home = () => {
  const [form, setForm] = useState({ name: "" });
  const [isBlocking, setIsBlocking] = useState(false);
  const handleChangeName = e => {
    setForm({ ...form, name: e.target.value });
    setIsBlocking(e.target.value.length > 0);
  };
  return (
    <div>
      <input type="text" value={form.name} onChange={handleChangeName} />
      <Prompt
        when={isBlocking}
        message={location =>
          `Are you sure you want to go to ${location.pathname}`
        }
      />
    </div>
  );
};
export default Home;
