import React, { useState, useEffect } from "react";
import { Entry, Category, CategoryIcon, Price } from "styles/listStyles";
import { Wrapper } from "styles/listStyles";
import Image from "next/image";
import products from "styles/icons/products.png";
import { AiOutlineGift } from "react-icons/ai";

function List({ entrys }) {
  return (
    <Wrapper>
      {entrys.map((entry) => (
        <Entry key={entry.name}>
          <AiOutlineGift color="white" size={"1.5em"}/>
          <Category>{entry.name}</Category>
          <Price>{Number(entry.amount).toLocaleString("ru-RU", { minimumFractionDigits: 2 }) + " ₽"}</Price>
        </Entry>
      ))}
    </Wrapper>
  );
}
export { List };
