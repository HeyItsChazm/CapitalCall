constructor(props) {
  super(props);
}
renderWelcomePage = () => {

}
renderDashboardPage = () => {

}
renderNewCallPage = () => {

}
renderWelcomeHeader = () => {
  return (
    <header className="Header">
      <img className="Logo" src={logo} alt="Validus Risk Management"/>
      <hr/>
    </header>
  );
}
renderApplicationHeader = () => {
  return (
    <header className="Header">
      <grid className="HeaderContainer">
        <img className="Logo" src={logo} alt="Validus Risk Management"/>
        <span className="NavigationTabs">
        </span>
      </grid>
      <hr/>
    </header>
  )
}
