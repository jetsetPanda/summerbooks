import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      <i className="fa fa-trash"></i> Delete
    </span>
  );
}

export default DeleteBtn;
