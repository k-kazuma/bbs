import React from "react";
import style from "styles/components/header.module.css";

function Header() {
  return (
    <header className={`${style.header}`}>
      <h2 className={`${style.headline}`}>城ドラ掲示板</h2>
    </header>
  );
}

export default Header;
