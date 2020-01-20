import React from "react";
import BrandName from "./BrandName";

function Header(props) {
  let content;

  if (!props.title) {
    content = <BrandName />;
  } else {
    content = <h1 className="brand-name">{props.title}</h1>;
  }
  return <div>{content}</div>;
}

export default Header;
