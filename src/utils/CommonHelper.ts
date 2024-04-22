export const getRatingFromReview = (review: string) => {
  if (review.includes('Awesome') || review.includes('Must watch')) {
    return (Math.random() * (5 - 4) + 4).toFixed(1); // Positive review, higher rating
  } else if (review.includes('Not worth') || review.includes('Disappointing')) {
    return (Math.random() * (2 - 1) + 1).toFixed(1); // Negative review, lower rating
  } else {
    return (Math.random() * (4 - 2) + 2).toFixed(1); // Neutral review, medium rating
  }
};

export const getRandomReview = () => {
  const reviews = [
    'Awesome movie! Must watch!',
    'Disappointing. Expected better.',
    'One of the best movies I have ever seen!',
    'Good storyline and great acting.',
    'Not worth the hype.',
  ];
  return reviews[Math.floor(Math.random() * reviews.length)];
};
