"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <Image
          src="/image/tsa-logo.png"
          alt="collegetsa"
          width={40}
          height={40}
          quality={100}
        />
        <input
          // value={_search}
          className="search"
          placeholder="Search . . ."
          // onChange={handleChange}
        />
        <div className="menu-icon">
          <Image
            src={showNavbar ? "/image/close.svg" : "/image/hamburger.svg"}
            alt="hamburger"
            width={25}
            height={25}
            quality={100}
            onClick={handleShowNavbar}
          />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="mb-0">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blogs">Updates</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
