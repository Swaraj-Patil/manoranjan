import Image from 'next/image'
import React from 'react'
import landingImage from '@/public/media/landing-image.png'
import PlayButton from '@/public/media/play-button.svg'
import { Button } from '@/app/_components'
import { PlayIcon } from '@heroicons/react/24/solid'

const playButton = <svg width="360" height="360" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_b_503_5009)">
    <path d="M165.945 80.2798C164.545 36.4424 129.024 1.06596 85.0383 0C83.9054 0 82.9723 0.866089 82.9723 1.99867L82.9057 31.4457C82.9057 32.9114 81.7727 34.044 80.3066 34.1106C36.4545 35.443 1.06631 71.0193 0 114.99C0 116.123 0.866378 117.055 1.99933 117.055L31.3895 117.122C32.8557 117.122 33.9887 118.254 34.0553 119.72C35.4548 163.558 71.043 198.934 114.962 200C116.095 200 117.028 199.134 117.028 198.001L117.094 168.554C117.094 167.089 118.227 165.956 119.693 165.889C163.545 164.49 198.934 128.914 200 85.01C200 83.8774 199.134 82.9447 198.001 82.9447L168.61 82.8781C167.144 82.8781 166.011 81.7455 165.945 80.2798ZM114.162 165.69C89.2369 164.224 69.2436 143.971 68.3106 118.921C68.2439 117.855 67.3775 116.989 66.3112 116.989L36.9877 116.922C35.4548 116.922 34.2552 115.656 34.3219 114.124C35.7881 89.2072 56.048 69.2205 81.1063 68.2878C82.1726 68.2212 83.039 67.3551 83.039 66.2891L83.1056 36.9087C83.1056 35.3764 84.3719 34.1772 85.9047 34.2438C110.83 35.7095 130.823 55.9627 131.756 81.0127C131.823 82.0786 132.689 82.9447 133.755 82.9447L163.079 83.0113C164.612 83.0113 165.811 84.2772 165.745 85.8095C164.279 111.392 143.019 131.712 117.094 131.712L117.028 163.025C116.961 164.557 115.695 165.756 114.162 165.69Z" fill="url(#paint0_linear_503_5009)" fillOpacity="0.3" />
    <path d="M165.445 80.3025L165.445 80.2958C164.054 36.7251 128.749 1.56282 85.0326 0.500009C84.1567 0.502866 83.4723 1.16537 83.4723 1.99867V1.9998L83.4057 31.4457L165.445 80.3025ZM165.445 80.3025C165.523 82.0222 166.864 83.3775 168.609 83.3781L165.445 80.3025ZM80.3293 34.6101L80.3217 34.6104C36.7374 35.9347 1.56318 71.2932 0.500009 114.996C0.502869 115.871 1.16535 116.555 1.99933 116.555H2.00047L31.3895 116.622L80.3293 34.6101ZM80.3293 34.6101C82.0491 34.5319 83.4051 33.1921 83.4057 31.4468L80.3293 34.6101ZM34.5548 119.697L34.5551 119.704C35.9461 163.275 71.3169 198.437 114.967 199.5C115.843 199.497 116.528 198.835 116.528 198.001V198L116.594 168.554L34.5548 119.697ZM34.5548 119.697C34.4766 117.978 33.1362 116.623 31.3907 116.622L34.5548 119.697ZM119.671 165.39L119.677 165.39C163.263 163.999 198.437 128.64 199.5 85.0045C199.497 84.1292 198.835 83.4447 198.001 83.4447H198L168.61 83.3781L119.671 165.39ZM119.671 165.39C117.951 165.468 116.595 166.808 116.594 168.553L119.671 165.39ZM114.14 166.189L114.133 166.189C88.9543 164.708 68.7571 144.252 67.8111 118.946C67.757 118.129 67.0941 117.489 66.3112 117.489H66.3101L36.9877 117.422L114.14 166.189ZM114.14 166.189C115.958 166.268 117.449 164.845 117.527 163.046L117.528 163.036L117.528 163.026L117.593 132.21C143.558 131.951 164.772 111.52 166.244 85.8381L166.244 85.8312M114.14 166.189L166.244 85.8312M33.8227 114.095H33.8228C35.3039 88.9243 55.767 68.734 81.0812 67.7884C81.8991 67.7342 82.539 67.0714 82.539 66.2891V66.288L82.6056 36.9087L33.8227 114.095ZM33.8227 114.095L33.8224 114.102M33.8227 114.095L33.8224 114.102M33.8224 114.102C33.7435 115.915 35.1664 117.421 36.9865 117.422L33.8224 114.102ZM85.9264 33.7443L85.934 33.7446C111.112 35.2253 131.309 55.6813 132.255 80.9872C132.309 81.8047 132.972 82.4447 133.755 82.4447H133.757L163.079 82.5113L85.9264 33.7443ZM85.9264 33.7443C84.1131 33.6655 82.6062 35.0876 82.6056 36.9076L85.9264 33.7443ZM166.244 85.8312C166.323 84.018 164.9 82.5119 163.08 82.5113L166.244 85.8312Z" stroke="url(#paint1_linear_503_5009)" strokeOpacity="0.5" />
  </g>
  <g filter="url(#filter1_b_503_5009)">
    <path fillRule="evenodd" clipRule="evenodd" d="M82.1011 82.2758C82.1011 78.2446 86.4231 75.6892 89.9552 77.6319L122.576 95.5735C126.237 97.5871 126.237 102.848 122.576 104.861L89.9552 122.803C86.4231 124.746 82.1011 122.19 82.1011 118.159V82.2758Z" fill="url(#paint2_linear_503_5009)" fillOpacity="0.3" />
    <path d="M82.6011 82.2758C82.6011 78.6249 86.5153 76.3106 89.7143 78.07L122.335 96.0116C125.651 97.8352 125.651 102.6 122.335 104.423L89.7143 122.365C86.5153 124.124 82.6011 121.81 82.6011 118.159V82.2758Z" stroke="url(#paint3_linear_503_5009)" strokeOpacity="0.5" />
  </g>
  <defs>
    <filter id="filter0_b_503_5009" x="-12" y="-12" width="224" height="224" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_503_5009" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_503_5009" result="shape" />
    </filter>
    <filter id="filter1_b_503_5009" x="70.1011" y="64.9683" width="67.221" height="70.4983" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_503_5009" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_503_5009" result="shape" />
    </filter>
    <linearGradient id="paint0_linear_503_5009" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" stopOpacity="0.5" />
      <stop offset="1" stopColor="white" />
    </linearGradient>
    <linearGradient id="paint1_linear_503_5009" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" stopOpacity="0" />
      <stop offset="1" stopColor="white" />
    </linearGradient>
    <linearGradient id="paint2_linear_503_5009" x1="103.712" y1="76.9683" x2="103.712" y2="123.466" gradientUnits="userSpaceOnUse">
      <stop offset="0.147231" stopColor="white" />
      <stop offset="0.42761" stopColor="white" stopOpacity="0.5" />
      <stop offset="1" stopColor="#1600FD" stopOpacity="0" />
    </linearGradient>
    <linearGradient id="paint3_linear_503_5009" x1="103.712" y1="76.9683" x2="103.712" y2="123.466" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" stopOpacity="0" />
      <stop offset="1" stopColor="white" />
    </linearGradient>
  </defs>
</svg>

const HomePage = () => {
  return (
    <div className='bg-black-08'>
      <div>
        <Image
          priority
          src={landingImage}
          alt='Landing Image'
        />
      </div>

      <div className='absolute z-1 top-0 left-0 w-screen h-screen flex items-center justify-center'>
        <div className=''>
          <Image
            src={PlayButton}
            alt='Play Button'
            width={360}
          />
        </div>

      </div>

      <div className='font-manrope flex flex-col items-center -mt-10'>
        <p className='font-bold text-5xl text-white mb-6'>The Best Streaming Experience</p>
        <p className='text-grey-60 text-md w-[900px] text-center mb-12'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
        <Button 
          label='Start Watching Now'
          icon={PlayIcon}
        />
      </div>
    </div>
  )
}

export default HomePage