import Image from 'next/image'

interface ImagePolaroidProps {
  src: string;
  text: string;
}

export default function ImagePolaroid({src, text}: ImagePolaroidProps) {
  return (
    <div className="flex flex-col items-center relative w-full max-w-[566px] aspect-[566/466] p-[5.8%] pb-[17.8%] custom-background-light-color">
      <Image
        src={src}
        alt=""
        width={500}
        height={333}
        className="mb-6"
        aria-hidden="true"
      />

      <span className="custom-text-dark-color custom-text-effect text-lg md:text-base lg:text-xl">{text}</span>
    </div>
  )
}
