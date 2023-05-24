import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cart.actions";
import { useLocation } from "wouter";

import * as S from "./styles";
import MenuButton from "../MenuButton";
import Container from "../Container";
import QRCode from "react-qr-code";

const ProductInfo = ({ item, meshColors, addItem, thumbnail }) => {
  const [openQrCode, setopenQrCode] = useState(false);
  const [size, setsize] = useState();
  const [location, setLocation] = useLocation();

  return (
    <Container>
      <S.ItemDetails>
        <span className="name">{item.name}</span>
        <p>StockId: 1231nkjdio89wqud8223</p>
        <span className="price">
          <b> ${item.price}</b>
        </span>
      </S.ItemDetails>
      <div style={{ width: "100%" }}>
        <h1>Choose Size</h1>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <S.SizeButton onClick={() => setsize(1)} active={size === 1}>
            small
          </S.SizeButton>
          <S.SizeButton onClick={() => setsize(2)} active={size === 2}>
            medium
          </S.SizeButton>
          <S.SizeButton onClick={() => setsize(3)} active={size === 3}>
            large
          </S.SizeButton>
        </div>
      </div>

      {meshColors && (
        <div style={{ width: "100%" }}>
          <h1>Choose Colors</h1>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {Object.keys(meshColors).map(function (color, index) {
              return (
                <svg key={index} height="50" width="50">
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="limegreen"
                    strokeWidth="1"
                    fill={meshColors[color]}
                  />
                </svg>
              );
            })}
          </div>
        </div>
      )}

      <div style={{ display: "flex" }}>
        <MenuButton
          order={2}
          text="See in AR"
          onClick={() => setopenQrCode(!openQrCode)}
        />
        <MenuButton
          order={3}
          text="Add to Cart"
          onClick={() => {
            addItem({ ...item, imageUrl: thumbnail });
            setLocation("/");
          }}
        />
      </div>

      {item.qrCode && openQrCode && (
        <div
          aria-hidden={!openQrCode}
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 190,
            width: "100%",
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={item.qrCode}
            viewBox={`0 0 256 256`}
          />
        </div>
      )}
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductInfo);
