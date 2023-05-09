import React from "react";
import style from "styles/components/thread.module.css";

function Thread() {
  return (
    <div className={`${style.thread}`}>
      <h3 className={`${style.threadTitle}`}>xxxx掲示板</h3>
      <div>
        <p>投稿日</p>
        <p>投稿内容のテキスト挿入</p>
      </div>
    </div>
  );
}

export default Thread;
