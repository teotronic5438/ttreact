// Thumbnail.jsx
export default function Thumbnail({ video }) {
    return (
      <img
        src={video.thumbnail}
        alt={`Miniatura de ${video.title}`}
        style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
      />
    );
  }
  