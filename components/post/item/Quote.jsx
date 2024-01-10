export default function Quote({ children }) {
  return (
    <div className="ce-block__content">
      <blockquote className="cdx-quote">
        <div className="cdx-input cdx-quote__text">{children}</div>
      </blockquote>
    </div>
  );
}
