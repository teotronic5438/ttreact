// Video.jsx
import Thumbnail from './Thumbnail';
import LikeButton from './LikeButton';

export default function Video({ video }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
      <Thumbnail video={video} />
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
