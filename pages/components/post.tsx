import React from "react";
import style from "styles/components/post.module.css";

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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <div className={`${style.post}`}>
      <label htmlFor="name">名前</label>
      <input
        className={`${style.nameInput}`}
        id="name"
        type="text"
        onChange={handleChange}
        value={values.title}
        name="title"
        placeholder="ニックネーム"
      />
      <label htmlFor="comment">コメント</label>
      <textarea
        className={`${style.textArea}`}
        id="comment"
        onChange={handleChange}
        value={values.content}
        name="content"
        placeholder="コメント内容"
      />
      <button onClick={handlePost}>投稿する</button>
    </div>
  );
}

export default Post;
