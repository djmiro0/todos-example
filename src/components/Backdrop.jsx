import React from "react";

export default function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick} />; // onClick={props.onClick} is the same as onClick={props.onCancel}
}
