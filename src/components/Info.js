import React, { useState } from "react";
// import useClick from './hooks/useClick';

const InputPicture = () => {
  const [clothStyle, setClothStyle] = useState("스타일");
  const [styleSummary, setStyleSummary] = useState("어떤 스타일이다.");
  const [styleColor, setStyleColor] = useState("primary");
  // json으로 만들어보자.
  // const styleData = {
  //   style: "바캉스",
  //   녀ㅡㅡㅁ교


  // }[,"섹시","트레디셔널","스포티","보헤미안","캐주얼","페미닌","오피스룩","힙합"]

  // const clickStyle = useClick();

  return (
    <>
      <figure className="text-center">
        <blockquote className="blockquote">
          <div>
            <h4 className="mb-0">
              <b>어떤 스타일인지 분석해드려요👗👖</b>
            </h4>
            <p className="mb-0">
              <b>상하의가 포함된 패션 사진을 업로드 해주세요</b>
            </p>
          </div>
          <br />
          <div>
            <span
              className="badge rounded-pill bg-primary"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setClothStyle("바캉스");
                setStyleColor("primary");
                setStyleSummary("바캉스 스타일이다.");
              }}
            >
              바캉스
            </span>{" "}
            <span
              className="badge rounded-pill bg-secondary"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setClothStyle("섹시");
                setStyleColor("secondary");
                setStyleSummary("섹시 스타일이다.");
              }}
            >
              섹시
            </span>{" "}
            <span
              className="badge rounded-pill bg-warning"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setClothStyle("트레디셔널");
                setStyleColor("warning");
                setStyleSummary("트레디셔널 스타일이다.");
              }}
            >
              트레디셔널
            </span>{" "}
            <span
              className="badge rounded-pill bg-danger"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setClothStyle("스포티");
                setStyleColor("danger");
                setStyleSummary("스포티 스타일이다.");
              }}
            >
              스포티
            </span>{" "}
            <span
              className="badge rounded-pill bg-success"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setClothStyle("보헤미안");
                setStyleColor("success");
                setStyleSummary("보헤미안 스타일이다.");
              }}
            >
              보헤미안
            </span>{" "}
            <span
              className="badge rounded-pill bg-info"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setClothStyle("캐주얼");
                setStyleColor("info");
                setStyleSummary("캐주얼 스타일이다.");
              }}
            >
              캐주얼
            </span>{" "}
            <span
              className="badge rounded-pill bg-secondary"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setClothStyle("페미닌");
                setStyleColor("secondary");
                setStyleSummary("페미닌 스타일이다.");
              }}
            >
              페미닌
            </span>{" "}
            <span
              className="badge rounded-pill bg-light"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setClothStyle("오피스룩");
                setStyleColor("light");
                setStyleSummary("오피스룩 스타일이다.");
              }}
            >
              오피스룩
            </span>{" "}
            <span
              className="badge rounded-pill bg-black"
              style={{ textDecoration: "none" }}
              onClick={() => {
                setClothStyle("힙합");
                setStyleColor("dark");
                setStyleSummary("힙합 스타일이다.");
              }}
            >
              힙합
            </span>{" "}
          </div>
        </blockquote>
        {/* 해당 클릭에 따라 색상과 코멘트가 바뀌도록 구성하기 useState 사용하면 될듯? */}
        <div className={`alert alert-dismissible alert-${styleColor}`}>
          <h4 className="alert-heading">{clothStyle}</h4>
          <p className="mb-0">{styleSummary}</p>
        </div>
        <p className="mb-0" style={{ color: "red" }}>
          <b>👉 정면으로 찍었을때 성능이 더 좋아요 👈</b>
        </p>
      </figure>
    </>
  );
};

export default InputPicture;
