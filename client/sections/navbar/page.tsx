import React from "react";
import Image from "next/image";
import logo from "../../public/Logo-02.png";
import Button from '../../components/button/page'

const page = () => {
  return (
    <div className="w-full h-24 flex justify-between">
      <div className="logo h-full w-1/4">
        <img className="h-full object-cover" src="Logo-02.png" alt="logo"></img>
      </div>
      <div className="links flex">
        <p>donar</p>
        <Button buttontext="camen" link="google.com"/>
      </div>
    </div>
  );
};

export default page;
