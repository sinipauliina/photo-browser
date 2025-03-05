import Image from 'next/image'
import Link from 'next/link'
import {PhotoProps} from '../types/photo-types'

type ThumbnailsProps = {
  photos: PhotoProps[]
}

export default function Thumbnails({photos}: ThumbnailsProps) {
  return (
    <ul className="flex flex-col sm:flex-row w-full flex-wrap content-center sm:content-start sm:justify-between md:justify-center gap-8 mb-8">
      {photos.map((photo) => (
        <li key={photo.id} className="flex flex-col items-center justify-center">
          <Link href={`/photos/${photo.id}`} className='custom-link-image'>
            <Image
              className="bg-white"
              src={photo.download_url}
              alt={`Photo by ${photo.author}`}
              width={150}
              height={Math.round((100 / photo.width) * photo.height)}
              style={{width: 'auto', height: 'auto'}}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
