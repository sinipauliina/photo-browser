import {QuoteProps} from '../types/quote-types'

export default function Quote({quote, author}: QuoteProps) {
  return (
    <blockquote>
      <span title="quote" className='flex custom-text-effect-color custom-text-effect text-lg md:text-base lg:text-xl mb-4'>"{quote}"</span>
      <span title="author" className='flex'>&#126; {author}</span>
    </blockquote>
  )
}
