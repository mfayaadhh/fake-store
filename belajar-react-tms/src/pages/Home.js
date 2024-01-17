import React from "react";
import ContentContainer from "../components/ContentContainer";

export default function Home({addToCart}) {
  return (
    <>
      <ContentContainer addToCart={addToCart}/>
    </>
  );
}
