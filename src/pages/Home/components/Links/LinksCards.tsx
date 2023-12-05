interface ILinkCardProps {
  link: string,
  img: string,
  title: string
}

const LinksCards = (props: ILinkCardProps) => {

  return(
    <article>
        <a className="LinksCards-Container" href={props.link} target="_blank">
          <img 
            src={props.img}
            alt={props.title}
            className="LinksCards-Img"
          />
          <h3 className="text-center text-2xl mt-3">{props.title}</h3>
        </a>
    </article>
  )
}

export default LinksCards;