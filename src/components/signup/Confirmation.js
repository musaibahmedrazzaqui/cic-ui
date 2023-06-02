import React from "react";

export default function Confirmation(props) {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Registration Success!</h3>
      <p style={{ textAlign: "center" }}>
        {" "}
        Thankyou for choosing IGCA. We look forward to welcoming you as a{" "}
        {props.role}!
      </p>
    </div>
  );
}
