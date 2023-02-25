// 카드들 노출시킬 컴포넌트

import React from "react";

const Cards = (props) => {
  return (
    <div className="card mb-3" style={{ textAlign: "center" }}>
      <h3 className="card-header">{props.productStore}</h3>
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
      </div>

      <div className="card-body">
        <div className="card_img">
          <img src={props.productImg} alt="productImage" />
        </div>
        <br />
        <p className="card-text">
          Price: ₩ {props.productPrice}
          <br />
          Category: {props.productCategory}
        </p>
      </div>

      <div className="card-footer text-muted">
        <div className="card-body">
          {/* 해당 상품 URL로 이동하도록 onClick 이벤트 작성(새창으로 뜨게 구현함) */}
          <button
            type="button"
            class="btn btn-info"
            onClick={() => window.open(props.productURL)}
          >
            상품 보러 바로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
