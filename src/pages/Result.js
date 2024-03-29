// import React, { useState, useEffect} from "react";
import Layout from "../layouts/Layout";
import Cards from "../components/Cards";
import Styles from "../components/Styles";
import { useLocation } from 'react-router-dom';
// import axios from 'axios';

const Result = () => {
  // 사용자의 input 사진 넘겨주기 styles 컴포넌트로 넘겨주기
  const {fileImage, resultData} = useLocation().state;
  console.log(fileImage,resultData);
  
  // 내가 받을 데이터 예시
  const CardList = [
    {
      productName: "맨투맨1",
      productStore: "1번 상점",
      productImg: "https://i.ibb.co/R6RwNxx/grape.jpg",
      productPrice: "132000",
      productCategory: "상의",
      productURL: "https://sammy0329.tistory.com/62",
    },
    {
      productName: "맨투맨2",
      productStore: "2번 상점",
      productImg: "https://i.ibb.co/R6RwNxx/grape.jpg",
      productPrice: "180000",
      productCategory: "상의",
      productURL: "https://sammy0329.tistory.com/62",
    },
    {
      productName: "맨투맨3",
      productStore: "3번 상점",
      productImg: "https://i.ibb.co/R6RwNxx/grape.jpg",
      productPrice: "122000",
      productCategory: "상의",
      productURL: "https://sammy0329.tistory.com/62",
    },
    {
      productName: "맨투맨4",
      productStore: "4번 상점",
      productImg: "https://i.ibb.co/R6RwNxx/grape.jpg",
      productPrice: "1122000",
      productCategory: "상의",
      productURL: "https://sammy0329.tistory.com/62",
    },
    {
      productName: "맨투맨5",
      productStore: "5번 상점",
      productImg: "https://i.ibb.co/R6RwNxx/grape.jpg",
      productPrice: "131000",
      productCategory: "상의",
      productURL: "https://sammy0329.tistory.com/62",
    },
    {
      productName: "맨투맨6",
      productStore: "6번 상점",
      productImg: "https://i.ibb.co/R6RwNxx/grape.jpg",
      productPrice: "111000",
      productCategory: "상의",
      productURL: "https://sammy0329.tistory.com/62",
    },
  ];

  const StyleList = [
    { styleName: "섹시", styleRate: "70" },
    { styleName: "스포티", styleRate: "46" },
    { styleName: "바캉스", styleRate: "33" },
  ];

  return (
    <Layout>
      <br />
      <Styles StyleList={StyleList} fileImage={fileImage}/>
      <br />
      <Cards CardList={CardList} />
    </Layout>
  );
}

export default Result;
