import * as React from "react"

const Figure = ({ image, size, caption, credits }) => {
  return (
    <figure className={size}>
      <img src={image} alt={caption} />
      <figcaption>
        <span>{caption}</span>
        <span>{credits}</span>
      </figcaption>
    </figure>
  )
}

export default Figure