import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface MarksCardProps {
  marks: number;
  totalMarks: number;
  level: "easy" | "medium" | "hard";
}

export  function StatsCard({ marks, totalMarks, level }: MarksCardProps) {
  const percentage = (marks / totalMarks) * 100;

  const colors = {
    easy: "#4caf50",
    medium: "#ffcc00",
    hard: "#f44336",
  };

  return (
    <div style={{ width: "150px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${marks} / ${totalMarks}`}
        styles={buildStyles({
          pathColor: colors[level],
          textColor: "#2f363d",
          trailColor: "#e0e0e0",
          textSize: "16px",
        })}
      />
      <div style={{ textAlign: "center", marginTop: "8px", color: colors[level] }}>
        {level.toUpperCase()}
      </div>
    </div>
  );
}



