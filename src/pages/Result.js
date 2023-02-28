import React from "react";
import Layout from "../layouts/Layout";
import Cards from "../components/Cards";

function Result() {
  // 내가 받을 데이터 예시
  const Items = [
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

  return (
    <Layout>
      <br />
      <Cards CardList={Items} />
    </Layout>
  );
}

export default Result;
