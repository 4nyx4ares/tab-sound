import React from "react";

export default function Pad(props) {
  const btnStyle = {
    backgroundColor: !props.on ? "var(--dark-color)" : props.color,
  };
  return (
    <section>
      <button
        className="pad-button"
        style={btnStyle}
        onClick={() => props.toggle(props.id)}
      >
        pad number {props.id}
      </button>
    </section>
  );
}
