import HeaderLink from "./header-link";

const Header = () => {
  return (
    <div className="p-5">
      <header className="rounded-lg bg-header-background border border-header-border shadow-lg p-5">
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <HeaderLink to="/">Home</HeaderLink>
            </li>

            <li>
              <HeaderLink to="/history">History</HeaderLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
