import Navbuttons from "./components/Navbuttons";
import Homepage from "./pages/Homepage";

export default function App() {
  let Page;
  switch (window.location.pathname) {
    case "/":
      Page = Homepage;
      break;
    default:
      window.location.pathname = "/";
  }

  const menus = [
    { name: "APPLIANCES", url: "/" },
    { name: "GROCERIES", url: "/" },
    { name: "GADGETS", url: "/" },
    { name: "CLOTHING", url: "/" },
  ];

  return (
    <div className="App">
      <div className="navbar">
        <p className="navtitle" onClick={() => window.location.pathname = "/"}>Lazado</p>
        <Navbuttons buttons={menus} />
      </div>
      <Page />
    </div>
  );
}
