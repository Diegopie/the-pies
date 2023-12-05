import './CoverTitle.css';

const CoverTitle = () => {

  return (
    <section className='CoverTitle-Container mt-1'>
      <article className='CoverTitle-TitleContainer flex items-center w-80'>
        <h2 className='CoverTitle-Title App-Ephesis'>Parker and &nbsp;Diego Kvenandez</h2>
      </article>
      <img 
        src='/img/cover/coverImg.jpg'
        alt='Parker and Diego in a meadow'
        className='CoverTitle-Img'
      />
    </section>
  )
}

export default CoverTitle;