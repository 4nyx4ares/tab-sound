import React from "react";

export default function Pad(props) {
  const [on, setOn] = React.useState(props.on);

  function toggleOn() {
    setOn((prevOn) => !prevOn);
  }

  const btnStyle = {
    backgroundColor: !on ? "var(--dark-color)" : props.color,
  };
  return (
    <section>
      <button className="pad-button" style={btnStyle} onClick={toggleOn}>
        pad number {props.id}
      </button>
    </section>
  );
}
