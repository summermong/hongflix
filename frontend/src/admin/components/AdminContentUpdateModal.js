import axios from "axios";
import styles from "../Admin.module.css";
import React, { useState } from "react";

export default function AdminContentUpdateModal({
  setUpdateModalView,
  content,
  fetchContents,
  apiUrl,
}) {
  console.log(`contentId : ${content["id"]}`);
  const [title, setTitle] = useState(content["title"]);
  const [accessUrl, setAccessUrl] = useState(content["accessUrl"]);
  const [explanation, setExplanation] = useState(content["explanation"]);
  const inputHandler = (e, setValue) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const fileHandler = (e, setValue) => {
    console.log(e.target.files);
    setValue(e.target.files[0]);
  };
  const updateContent = async () => {
    const formData = new FormData();
    const contentUpdateReqDto = {
      title: title,
      explanation: explanation,
    };
    console.log(title, explanation);
    const blob = new Blob([JSON.stringify(contentUpdateReqDto)], {
      type: "application/json",
    });
    formData.append("file", accessUrl);
    formData.append("contentUpdateReqDto", blob, "contentUpdateReqDto.json");
    await axios
      .post(`${apiUrl}contents/${content["id"]}`, formData, {
        header: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        fetchContents();
        setUpdateModalView(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`${styles.modalContainer} flex flex-col items-center justify-center w-full h-1/3 fixed md:w-2/3 md:h-3/6 rounded-lg gap-3 border`}
    >
      <h1 className="text-3xl">콘텐츠 등록</h1>
      <form className="flex w-4/5 flex-col justify-center gap-2" action="POST">
        <label htmlFor="title">콘텐츠 제목</label>
        <input
          value={title}
          onChange={(e) => {
            inputHandler(e, setTitle);
          }}
          className="p-3 border rounded-lg"
          type="text"
        />
        <label htmlFor="content">내용</label>
        <input
          value={explanation}
          onChange={(e) => {
            inputHandler(e, setExplanation);
          }}
          className="p-3 border rounded-lg"
          type="text"
        />
        <label htmlFor="title">영상</label>

        <input
          onChange={(e) => {
            fileHandler(e, setAccessUrl);
          }}
          className="p-3 border rounded-lg"
          type="file"
        />
      </form>
      <div className="flex gap-5">
        <button
          className={`${styles.contentModalCreateBtn}`}
          onClick={() => {
            setUpdateModalView(false);
          }}
        >
          닫기
        </button>
        <button className={`${styles.contentModalCreateBtn}`}>등록</button>
      </div>
    </div>
  );
}
