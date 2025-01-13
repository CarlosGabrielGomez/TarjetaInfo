import "./Button.css";

function Button({ text, link }) {
  if (!link) {
    return null;
  } else {
    return (
      <div className="Card-Button">
        <a href={link}>
          <button>{text}</button>
        </a>
      </div>
    );
  }
}

export { Button };
