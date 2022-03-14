import React from 'react'
import Nav from '../../../components/Nav/Nav'
import { useState } from 'react';

export default function index() {

  const [cats, setCats] = useState([])

  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();
    setCats(data);
  }

  return (
    <div>
        <Nav />
    </div>
  )
}