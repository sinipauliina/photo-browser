'use client'

import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import Image from 'next/image'
import Hero from '@components/hero'
import Quote from '@components/quote'
import {usePhotoInfo} from '@hooks/usePhotoInfo'
import {useQuote} from '@hooks/useQuote'

export default function SinglePhoto() {
  const router = useRouter()
  const [pageId, setPageId] = useState<number | null>(null) 
  const currentUrl = window?.location.href

  useEffect(() => {
    if (window) {
      const currentPageId = Number(window.location.pathname.split('/').pop())
      setPageId(currentPageId)
    }
  }, [router.asPath])

  const {data, isLoading, error} = usePhotoInfo(pageId ?? 0)

  let info = {
    id: 0, 
    author: '?', 
    width: 0, 
    height: 0, 
    download_url: '',
  }

  if (data && data.photoInfo) {
    info = {...data.photoInfo}
  }

  const {data: quoteData, isLoading: quoteIsLoading, error: quoteError} = useQuote()
  const quote = quoteData && quoteData.quote ? quoteData.quote : ''
  const author = quoteData && quoteData.author ? quoteData.author : ''

  return (
    <main className="flex flex-col items-start flex-1">
      <Hero title={`Photo ${info.id}`} subtitle={`By ${info.author}`} />

      <section className='flex flex-col w-full'>
        <div className="flex flex-col md:flex-row w-full max-w-7xl ml-auto mr-auto pt-24 pr-16 pb-24 pl-16 gap-16">
          <div className="flex flex-col w-auto md:w-1/2 lg:w-1/3">
            <h2 className="mb-8">Photo info</h2>
      
            {!isLoading && !error ? (
              <ul className="list-disc list-inside mb-12">
                <li><span className='font-bold'>ID:</span> {info.id}</li>
                <li><span className='font-bold'>Author:</span> {info.author}</li>
                <li><span className='font-bold'>Original size:</span> {info.width} x {info.height} px</li>
                <li><a target="_blank" href={info.download_url}>Download photo</a></li>
                <li><span className='font-bold'>Share:</span> <a target="_self" href={currentUrl}>{currentUrl}</a></li>
              </ul>
            ) : (<p>Loading info...</p>)}

            {!quoteIsLoading && !quoteError ? (
              <Quote quote={quote} author={author} />
            ) : (<p>Loading quote...</p>)}
          </div>
      
          <div className="flex flex-row md:flex-col items-end w-auto md:w-1/2 lg:w-2/3" aria-hidden="true">
            {!isLoading && !error ? (
              <Image
                className="bg-white"
                src={info.download_url}
                alt={''}
                width={500}
                height={Math.round((100 / info.width) * info.height)}
                style={{width: 'auto', height: 'auto'}}
              />
            ) : (<p>Loading photo...</p>)}
          </div>
        </div>
      </section>
              
    </main>
  )
}
