import useLoadBackgroundImg from "../../hooks/useLoadBackgroundImg";
import './Cover.css';


const Cover = () => {


  const [loadingImgPath, backgroundImg, smallBackImg, setSmallBackImg] = useLoadBackgroundImg({
    imgClass: 'Cover-BackgroundImg',
    loadingImgPath: '/img/cover/cover.jpg',
  });


  return (
    <section className={`App-BackgroundImg  App-SectionBreak ${smallBackImg} Cover-BackgroundImg ${backgroundImg} relative`}>
      <img src={loadingImgPath} alt='invisible img' className='App-Loading-Img'
        onLoad={() => { setSmallBackImg('') }}
      />
      <article className="flex justify-center p-8">
        <h2 className="Cover-Tagline App-Tangerine ">Helping People Reach As Far As They Can Dream</h2>
      </article>
    </section>
  )
}

export default Cover