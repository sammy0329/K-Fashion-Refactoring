import React from "react";
import Layout from "../layouts/Layout";
import Cards from "../components/Cards";

function Result() {
  return (
    <Layout>
      <br />
      <Cards
        productStore="SJ스토어"
        productName="SJ 맨투맨"
        productImg="https://i.ibb.co/R6RwNxx/grape.jpg"
        productPrice="12000"
        productCategory="상의"
        productURL="https://sammy0329.tistory.com/62"
      />
      <br />
    </Layout>
  );
}

export default Result;
