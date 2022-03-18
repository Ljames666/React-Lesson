import { useSelector } from 'react-redux';

export default function ListJson() {
  const data = useSelector((state) => state.listPhone);

  return (
    <iframe
      width="492"
      height="273"
      src="https://www.youtube.com/embed/aASr5x0d3Ys"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
