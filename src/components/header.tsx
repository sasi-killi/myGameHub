import Logo from "./logo";
import Search from "./search";

function Header() {
  return (
    <div className="p-5 flex gap-4">
      <Logo img={"src/assets/react.svg"} />
      <Search />
    </div>
  );
}

export default Header;
