import LinksCards from "./LinksCards";
import './Links.css'

const Links = () => {

  return(
    <section className="App-SectionBreak Links-Container">
      <LinksCards 
        link='https://www.amway.com/en_US/myshop/ParkerandDiego'
        img='https://www.amway.com/medias/ce296a439b05?context=bWFzdGVyfHJvb3R8NDIyNTMwfGltYWdlL3BuZ3xoNmEvaGYyLzk0ODcyNzgzNzQ5NDIucG5nfGYzM2UyMzFjYzZkMzU4Y2Q0NjgwMTI0ZjI0MWRjODRiNzcyN2FlMmJmMjkwOGNlMjhhNzEwNTQzODdjYzZlYWU&attachment=true'
        title='Online Store'
      />
      <LinksCards 
        link='https://diegopie.herokuapp.com/'
        img='https://diegopie.herokuapp.com/assets/img/main-img-light.jpg'
        title='Web Development and Design'
      />
    </section>
  )
}

export default Links;