import React, { useState, useEffect } from "react";
import Card from "../components/Card"; // Assuming Card is generic enough
import { supabase } from '../client'

const ReadCrewmates = (props) => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("Crewmates")
        .select()
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching crewmates:", error);
      } else {
        setCrewmates(data);
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="ReadCrewmates">
      {crewmates && crewmates.length > 0 ? (
        crewmates.map((mate, index) => (
          <Card
            key={mate.id}
            id={mate.id}
            name={mate.name}
            speed={mate.speed}
            intellect={mate.intellect}
          />
        ))
      ) : (
        <h2>{"No Crewmates Yet 🛸"}</h2>
      )}
    </div>
  );
};

export default ReadCrewmates;
