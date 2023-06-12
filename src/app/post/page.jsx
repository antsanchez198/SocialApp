"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

const Post = () => {

  const photoURLs = [];
  const [inputAmount, setInputAmount] = useState("");

  useEffect(() => {

  }, [inputAmount]);

  return (
    <div >
      <form className={styles.postContainer}>
        <input placeholder='caption'></input>
        <h3>How Many?</h3>
        <select id="amount" name="amount">
          <option value="2" onChange={(e) => console.log(e.target.value)}>2</option>
          <option value="3" onChange={(e) => setInputAmount(e.target.value)}>3</option>
          <option value="4" onChange={(e) => setInputAmount(e.target.value)}>4</option>
        </select>
      </form>
    </div>
  )
}

export default Post