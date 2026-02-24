import React from 'react'

const steps = [0, 10, 15, 20, 25, 30, 35, 40, 45, 50]

function nearestStep(stars) {
  const value = Math.round((stars || 0) * 10)
  return steps.reduce((a, b) => (Math.abs(b - value) < Math.abs(a - value) ? b : a), steps[0])
}

const RatingImage = ({ stars, count }) => {
  const step = nearestStep(stars)
  const src = `/images/ratings/rating-${step}.png`

  return (
    <div className="product-rating-container">
      <img className="product-rating-stars" src={src} alt={`${stars} stars`} />
      {typeof count !== 'undefined' && (
        <div className="product-rating-count link-primary">{count}</div>
      )}
    </div>
  )
}

export default RatingImage
