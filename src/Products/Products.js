import "./Products.css";
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from "react-icons/bs";
import Card from "../components/Card";

function Products() {
  return <>
    <section className='card-container'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  </>
}

export default Products