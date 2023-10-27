import TopSory from "./TopSory"
import blogPost1 from '../../../app/assets/images/blogpost1.png'
import blogPost2 from '../../../app/assets/images/blogpost2.png'
import blogPost3 from '../../../app/assets/images/blogpost3.png'
import blogPost4 from '../../../app/assets/images/blogpost4.png'

const TopStories = () => {
  return (
    <section className='w-screen'>
      <div className="containner max-w-5xl mx-auto p-8">
        <h1 className='font-bold text-2xl my-8'>Top Stories</h1>

        <div className="w-full flex flex-col md:flex-row justify-between items-center flex-wrap">
              <TopSory 
                 image={blogPost1} 
                 title="Titans Post Elite PFF Tackling in 2019 Tackling "
                 author="Anih Patrick"
                 date="27 October 2023 "
                 />
              <TopSory 
                 image={blogPost2} 
                 title="Titans Post Elite PFF Tackling in 2019 Tackling "
                 author="Anih Patrick"
                 date="27 October 2023 "
                 />
              <TopSory 
                 image={blogPost3} 
                 title="Titans Post Elite PFF Tackling in 2019 Tackling "
                 author="Anih Patrick"
                 date="27 October 2023 "
                 />
              <TopSory 
                 image={blogPost4} 
                 title="Titans Post Elite PFF Tackling in 2019 Tackling "
                 author="Anih Patrick"
                 date="27 October 2023 "
                 />
              
        </div>
    </div>
    </section>
  )
}

export default TopStories
