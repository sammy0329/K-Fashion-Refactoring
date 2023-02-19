import React from "react";
import Layout from "../layouts/Layout";

// about에 대한 멘트 수정 필요
const About = () => {
  return (
    <Layout>
      <br />
      <figure className="text-center">
        <h2>
          <b>어떻게 동작하는 것인가요?🤔</b>
        </h2>
        <blockquote className="blockquote">
          <p className="mb-0">
            사용자가 업로드한 이미지를 이미 학습된 딥러닝 모델이 여러 스타일
            label들과의 연관성을 계산하여 제일 비슷한 스타일로 분류합니다.
            모델에 넣기전 sementic segmentation 기술을 적용하여 사람 부분만
            이미지를 크롭하는 것이 중요하며, 스타일을 분류할 때 가중치를
            확인하여 여러 label들과의 연관성을 퍼센트(%)로 나타내는 것이
            특징입니다.
          </p>
        </blockquote>
      </figure>
    </Layout>
  );
};

export default About;
