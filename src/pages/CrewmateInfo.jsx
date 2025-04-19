import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";

const CrewmateInfo = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState({ name: "", details: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from("Crewmates")
        .select("name, details")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching crewmate:", error.message);
        setCrewmate({ name: "Unknown", details: "Details not found." });
      } else {
        setCrewmate({
          name: data.name || "Unnamed",
          details: data.details || "No details provided.",
        });
      }

      setLoading(false);
    };

    fetchCrewmate();
  }, [id]);

  return (
    <div className="CrewmateInfo">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>More About {crewmate.name}: </h1>
          <h1>{crewmate.details}</h1>
          <br />
          <Link to={`/edit/${id}`}>
            <button className="editButton">Edit {crewmate.name}</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CrewmateInfo;


