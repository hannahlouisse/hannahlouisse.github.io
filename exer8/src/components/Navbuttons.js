export default function Navbuttons({ buttons }) {
  return (
    <ul className="navbuttons">
      {buttons.map((button, index) => (
        <div key={index}>
          <li className="navbutton" onClick={() => window.location.pathname = button.url}>
            {button.name}
          </li>
        </div>
      ))}
    </ul>
  );
}
