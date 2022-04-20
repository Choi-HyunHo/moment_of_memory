const Header = ({ left, text, right }) => {
  return (
    <header className="Header">
      <div className="Header_left">{left}</div>
      <div className="Header_text">{text}</div>
      <div className="Header_right">{right}</div>
    </header>
  );
};

export default Header;
