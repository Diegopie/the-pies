import "./Navbar.css"

const Navbar = () => {

  return (
    <nav className="Navbar-Container">
      <section className="Nav-Content">
        <img
          src="/img/logo/diego.png"
          alt="The Pies logo"
          className="Navbar-LogoImg"
        />
        <article className="flex items-center">
          <h1 className="App-Brush-Script text-4xl"><a href="/">The Pies</a></h1>
        </article>
        <img
          src="/img/logo/parker.png"
          alt="the pies logo"
          className='Navbar-LogoImg'
        />
      </section>
    </nav>
  )

}

export default Navbar