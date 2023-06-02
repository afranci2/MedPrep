import React from "react";

const page = (props) => {
  return (
    <div className="rounded-lg p-8 bg-blue-400">
      <a href={props.link}>
        <p>{props.buttontext}</p>

      </a>
    </div>
  );
};

export default page; 
