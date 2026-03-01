export default function SpotifyPlayer({linkMusica}) {
  return (
    <div style={{ maxWidth: "600px" }}>
      <iframe
        src={linkMusica}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: "12px" }}
      ></iframe>
    </div>
  );
}