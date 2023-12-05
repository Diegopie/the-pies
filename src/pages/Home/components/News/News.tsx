import './News.css';

const News = () => {

  return (
    <section className='App-SectionBreak News-Container'>
      <article className='App-Tangerine News-QuoteContainer'>
        <p className='text-6xl'>Be Like I-15, Always Be Working On Yourself</p>
        <p className='mt-5 text-4xl'>~ Ancient Proverb</p>
      </article>
      <article className='News-MessageContainer'>
        <p className=' text-center text-4xl mb-6'>🚧 Site Construction 🚧</p>
        <article className='App-PTSerif text-2xl indent-6'>
          <p>
            Those who know us understand that we tend to stay busy. Not for the sake of "living the grind" but because we are dreamers that want to make an impact.
          </p>
          <p>
            We see a life where our time is ours, our trips are many, our family is comfortable, and our gratitude brings many people with us.
          </p>
          <p>
            We may dream big but we lift big, too. For those who want to walk the journey of impact, welcome. For those who want to show their support as we build this life, thank you
          </p>
        </article>
        <article className='flex justify-end mr-8'>
        <p className='App-Ephesis text-4xl mt-3'>~ Parker and  &nbsp;Diego</p>

        </article>
      </article>
    </section>
  )
}

export default News;