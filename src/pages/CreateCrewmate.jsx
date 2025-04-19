import React, { useState } from "react";
import "./CreateCrewmates.css";
import { supabase } from "../client";

const CreateCrewmate = () => {
  const [crewmate, setCrewmate] = useState({
    name: "",
    speed: "",
    intellect: "",
    details: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCrewmate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectAttribute = (field, value) => {
    setCrewmate((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const createCrewMate = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase.from("Crewmates").insert({
      name: crewmate.name,
      speed: crewmate.speed,
      intellect: crewmate.intellect,
      details: crewmate.details
    });

    if (error) {
      console.error("Insert failed:", error.message);
    } else {
      console.log("Insert successful:", data);
      window.location = "/";
    }
  };

  return (
    <div>
      <form onSubmit={createCrewMate}>
        <label htmlFor="name">Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          value={crewmate.name}
          onChange={handleChange}
        />
        <br /><br />

        <label>Speed</label> <br />
        {["high", "medium", "low"].map((option) => (
          <button
            type="button"
            key={option}
            className={crewmate.speed === option ? "selected" : ""}
            onClick={() => selectAttribute("speed", option)}
          >
            {option}
          </button>
        ))}
        <p>Selected: {crewmate.speed}</p>
        <br />

        <label>Intellect</label> <br />
        {["high", "medium", "low"].map((option) => (
          <button
            type="button"
            key={option}
            className={crewmate.intellect === option ? "selected" : ""}
            onClick={() => selectAttribute("intellect", option)}
          >
            {option}
          </button>
        ))}
        <p>Selected: {crewmate.intellect}</p>
        <br />

        <label htmlFor="details">Details</label> <br />
        <textarea
          rows="3"
          cols="50"
          id="details"
          name="details"
          value={crewmate.details}
          onChange={handleChange}
        ></textarea>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateCrewmate;
