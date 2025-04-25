// LikeButton.jsx
import { useState } from 'react';

export default function LikeButton({ video }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(video.count);
    console.log(video.count);
    console.log(count);
    
    
  const handleClick = () => {
    if (!liked) {
      setCount(count + 1);
      setLiked(true);
    } else {
      setCount(count - 1);
      setLiked(false);
    }
  };

  return (
<button onClick={handleClick}>
  {liked ? `💙 Te gusta (${count})` : `🤍 Me gusta (${count})`}
</button>

  );
}
