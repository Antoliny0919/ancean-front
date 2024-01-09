export default function Warning({ message, title }) {
  return (
    <div className="ce-block__content">
      <div className="cdx-block cdx-warning">
        <div className="cdx-block cdx-warning__title">{title}</div>
        <div className="cdx-input cdx-warning__message">{message}</div>
      </div>
    </div>
  );
}
