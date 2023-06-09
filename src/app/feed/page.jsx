import React from 'react'
import styles from './page.module.css'

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Feed = async () => {
  const posts = await getData();
  return (
    <div className={styles.feed}>
      {posts.map((item) => (
        <div className={styles.postContainer}>
          <h2>{item.caption}</h2>
          <div className={styles.imgContainer}>
            {item.image.map((item) => (
              <img
                src={item}
                className={styles.postImage}></img>
            ))}
          </div>
          <div className={styles.ratingContainer}>
            {item.likes.map((item) => (
              <div>{item}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Feed