import { useState } from "react";
import "./App.css";

export default function IsiLittleHelper() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [percentOf, setPercentOf] = useState(0);

  const percentDiff = value1 && value2 ? (((value1 - value2) / value1) * 100).toFixed(2) : 0;
  const xPercentOf = ((percentOf * percentage) / 100).toFixed(2);
  const increased = (percentOf * (1 + percentage / 100)).toFixed(2);
  const decreased = (percentOf * (1 - percentage / 100)).toFixed(2);

  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const growthPercentage = fromValue && toValue ? (((toValue - fromValue) / fromValue) * 100).toFixed(2) : 0;

  return (
    <div className="container">
      <h1>🐱 Isi's Little Helper</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Your friendly percentage calculator with cat vibes!
      </p>

      <div className="section">
        <h2>📉 Percentage Difference</h2>
        <p style={{ fontSize: "0.85rem", color: "#666" }}>
          Quickly find out by what percentage a value has increased or decreased.
        </p>
        <input
          type="number"
          placeholder="Original Value"
          onChange={(e) => setValue1(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="New Value"
          onChange={(e) => setValue2(Number(e.target.value))}
        />
        <p>
          Change: <strong>{percentDiff}%</strong>
        </p>
      </div>

      <div className="section">
        <h2>📊 What is X% of Y?</h2>
        <p style={{ fontSize: "0.85rem", color: "#666" }}>
          Enter a percentage and a number to calculate how much that percentage represents.
        </p>
        <input
          type="number"
          placeholder="X%"
          onChange={(e) => setPercentage(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Y"
          onChange={(e) => setPercentOf(Number(e.target.value))}
        />
        <p>
          Result: <strong>{xPercentOf}</strong>
        </p>
      </div>

      <div className="section">
        <h2>🚀 Growth Calculator</h2>
        <p style={{ fontSize: "0.85rem", color: "#666" }}>
          Find out the exact percentage growth needed to go from your current value to a future target.
        </p>
        <input
          type="number"
          placeholder="Current Value (e.g. 8 mil)"
          onChange={(e) => setFromValue(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Target Value (e.g. 27 mil)"
          onChange={(e) => setToValue(Number(e.target.value))}
        />
        <p>
          Required Growth: <strong>{growthPercentage}%</strong>
        </p>
      </div>

      <img
        src="https://media1.tenor.com/m/zYNc4_kPKDsAAAAC/hive-cats.gif"
        alt="Cat working on laptop"
        className="cat-image"
      />
      <p style={{ textAlign: "center", fontSize: "0.85rem", color: "#aaa" }}>
        Made with 💻 & 🐾 for Isi
      </p>
    </div>
  );
}
