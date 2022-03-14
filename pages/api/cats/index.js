import React from 'react'
import Nav from '../../../components/Nav/Nav'
import { useState } from 'react';

export default function index() {

  const [cats, setcats] = useState([])

  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();
  }

  return (
    <div>
        <Nav />
    </div>
  )
}
