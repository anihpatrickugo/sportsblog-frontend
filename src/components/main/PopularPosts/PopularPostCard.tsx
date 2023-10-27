import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Categories from './Categories'
import { PostProps } from '@/app/types/posts'



const PopularPostCard: FC<PostProps> = ({image, title, details, author, date}):JSX.Element => {
  return (
    <div className="w-4/5 md:w-2/5 flex flex-col items-start justify-evenly mt-8 hover:md:w-5/12">
            <Image className='w-full rounded-2xl' src={image} height={500} width={500} alt='Blog post'/>
            <Link href="/" className="font-bold text-lg mt-4 hover:text-green-primary">{title}</Link>
            <p className="text-xs text-grey-strong my-2">{details}</p>

            {/* post tags categories */}
            <Categories/>

            <Link href="/" className='text-xs font-bold hover:text-green-primary'>By {author}  .  <span className='font-normal text-grey-strong'>{date}</span></Link>
          </div>
  )
}

export default PopularPostCard
