import React from "react";

export default function Pad(props) {
  console.log(props.on);
  const btnStyle = {
    backgroundColor: props.on ? "var(--dark-color)" : props.color,
  };
  return (
    <section>
      <button className="pad-button" style={btnStyle}>
        pad number {props.id}
      </button>
    </section>
  );
}
