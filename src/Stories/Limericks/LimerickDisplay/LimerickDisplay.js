import React from "react";
import ReactMarkdown from "react-markdown";
import "./LimerickDisplay.css";

export default function LimerickDisplay({ limerick }) {
  return (
    <div>
      <ReactMarkdown>{limerick}</ReactMarkdown>
    </div>
  );
}
