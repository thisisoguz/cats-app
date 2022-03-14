import React from 'react'
import Nav from '../../../components/Nav/Nav'

export default function index() {

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
