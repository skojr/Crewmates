import { supabase } from "../client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EditCrewmates.css";

const EditCrewmate = ({ data }) => {
  const { id } = useParams();

  const [crewmate, setCrewmate] = useState({
    id: null,
    name: "",
    speed: "",
    intellect: "",
    details: ""
  });

  useEffect(() => {
    if (data && id) {
      const found = data.find((item) => item.id === id);
      if (found) {
        setCrewmate(found);
      }
    }
  }, [data, id]);

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

  const updateCrewmate = async (event) => {
    event.preventDefault();
    await supabase
      .from("Crewmates")
      .update({
        name: crewmate.name,
        speed: crewmate.speed,
        intellect: crewmate.intellect,
        details: crewmate.details
      })
      .eq("id", id);

    window.location = "/";
  };

  const deleteCrewmate = async (event) => {
    event.preventDefault();
    await supabase.from("Crewmates").delete().eq("id", id);
    window.location = "/";
  };

  return (
    <div>
      <form onSubmit={updateCrewmate}>
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
            key={option}
            type="button"
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
            key={option}
            type="button"
            className={crewmate.intellect === option ? "selected" : ""}
            onClick={() => selectAttribute("intellect", option)}
          >
            {option}
          </button>
        ))}
        <p>Selected: {crewmate.intellect}</p>
        <br />

        <label htmlFor="details">Details</label> <br />
        <input
          type="text"
          id="details"
          name="details"
          value={crewmate.details}
          onChange={handleChange}
        />
        <br />

        <input type="submit" value="Submit" />
        <button onClick={deleteCrewmate} className="deleteButton" type="button">
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditCrewmate;

