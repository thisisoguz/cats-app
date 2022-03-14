import React from 'react'
import styles from './Card.module.css'

export default function Card({name, phone, id, email, image}) {
  return (
    <div className={styles.Card}>
        <div className={styles["card-header"]}>
          <img src={image.url} alt={image.alt} className={styles["card-img"]}/>
        </div>
        <div>
          <h3>{name}</h3>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
    </div>
  )
}
