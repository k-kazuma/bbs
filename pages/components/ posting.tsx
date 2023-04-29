import React, { useState } from "react";

type Obj = {
  id: null | undefined;
  title: String;
  content: String;
};

interface Props {
  itemList: Obj[];
  getList: () => void;
}

function Posting({ itemList, getList }: Props) {
  const handleDelete = async (id: null | undefined) => {
    const delId = {
      id: id,
    };
    console.log(delId);
    await fetch("../api/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(delId),
    }).then((res) => console.log(res));
    getList();
  };
  return (
    <div>
      <ul>
        {itemList.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <button onClick={() => handleDelete(item.id)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Posting;
