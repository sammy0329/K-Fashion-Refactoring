import React, { useState } from "react";
import styleData from "./JsonData/StyleData";

const Info = () => {
  // useState를 활용하여 해당 style과 summary,color 관리
  const [clothStyle, setClothStyle] = useState("Style");
  const [styleSummary, setStyleSummary] = useState("해당 스타일이 어떤 스타일인지 설명해드려요!!");
  const [styleColor, setStyleColor] = useState("primary");
  
  return (
    <>
      <figure className="text-center">
        <blockquote className="blockquote">
          {/* 기본적인 info 작성 */}
          <div>
            <h4 className="mb-0">
              <b>어떤 스타일인지 분석해드려요👗👖</b>
            </h4>
            <p className="mb-0">
              <b>상하의가 포함된 패션 사진을 업로드 해주세요</b>
            </p>
          </div>

          <br />

          {/* json key를 하나씩 불러와 해당 컬러와 설명을 작성 */}
          <div id="style_badges">
            {Object.keys(styleData).map(function (st) {
              return (
                <span
                  key={st}
                  className={`badge rounded-pill bg-${styleData[st]["color"]}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    setClothStyle(`${ st }`);
                    if (styleData[st]["color"]==='black'){
                      setStyleColor('dark');
                    }else{
                      setStyleColor(`${styleData[st]["color"]}`);
                    }
                    setStyleSummary(`${styleData[st]["summary"]}`);
                  }}
                >
                  {st}
                </span>
              );
            })}
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

export default Info;
