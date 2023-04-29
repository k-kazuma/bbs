import React from "react";

interface Props {
  values: {
    title: string;
    content: string;
  };
  setValues: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
    }>
  >;
  getList: () => void;
}

function Post({ values, setValues, getList }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const name = e.target.name;
    setValues({ ...values, [name]: val });
  };

  const handlePost = async () => {
    const data = {
      title: values.title,
      content: values.content,
    };
    await fetch("../api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("投稿しました");
        console.log(data);
      });
    setValues({ title: "", content: "" });
    getList();
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={values.title}
        name="title"
      />
      <input
        type="text"
        onChange={handleChange}
        value={values.content}
        name="content"
      />
      <button onClick={handlePost}>追加</button>
    </div>
  );
}

export default Post;
