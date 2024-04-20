import { cn } from '@/lib/utils'
import { BirdIcon, YoutubeIcon, type LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
    <svg className='fill-green-500' viewBox='0 0 100 100' {...props}>
      <g>
        <path d='M92.634,74.921c-18.805-13.074-30.901-20.278-7.622-15.287c-22.56-7.622-8.479-7.708,14.363-9.634   c-22.842-1.926-36.923-2.012-14.363-9.633c-23.279,4.991-11.183-2.213,7.622-15.287c-20.623,9.972-32.824,16.985-16.952-0.76   c-17.745,15.871-10.733,3.668-0.761-16.954C61.847,26.17,54.643,38.267,59.635,14.988C52.012,37.547,51.927,23.467,50,0.625   c-1.926,22.842-2.012,36.922-9.633,14.363c4.991,23.278-2.213,11.183-15.287-7.623c9.972,20.622,16.985,32.825-0.76,16.954   c15.871,17.745,3.668,10.732-16.954,0.76c18.805,13.074,30.901,20.278,7.623,15.287C37.547,47.988,23.467,48.074,0.625,50   c22.842,1.926,36.922,2.012,14.363,9.634c23.278-4.991,11.182,2.213-7.623,15.287c20.622-9.973,32.825-16.984,16.954,0.761   c17.745-15.872,10.732-3.671,0.76,16.952c13.074-18.805,20.278-30.901,15.287-7.622c7.622-22.56,7.707-8.479,9.633,14.363   c1.927-22.842,2.012-36.923,9.635-14.363c-4.992-23.279,2.212-11.183,15.286,7.622c-9.973-20.62-16.984-32.824,0.761-16.952   C59.81,57.937,72.014,64.948,92.634,74.921z M50,66c-8.836,0-16-7.163-16-16c0-8.836,7.164-16,16-16c8.837,0,16,7.164,16,16   C66,58.837,58.837,66,50,66z'></path>
      </g>
    </svg>
  ),
  logoWithText: (props: LucideProps) => (
    <svg
      zoomAndPan='magnify'
      viewBox='0 0 750 374.999991'
      {...props}
      preserveAspectRatio='xMidYMid meet'
      version='1.0'
    >
      <defs>
        <g />
      </defs>
      <path
        fill='#ffffff'
        d='M 200.09375 241.769531 C 159.136719 213.296875 132.796875 197.609375 183.492188 208.476562 C 134.363281 191.878906 165.027344 191.691406 214.773438 187.496094 C 165.027344 183.304688 134.363281 183.117188 183.492188 166.519531 C 132.796875 177.386719 159.136719 161.699219 200.09375 133.226562 C 155.179688 154.945312 128.609375 170.214844 163.171875 131.570312 C 124.527344 166.136719 139.800781 139.558594 161.515625 94.648438 C 133.042969 135.601562 117.355469 161.945312 128.226562 111.246094 C 111.625 160.378906 111.441406 129.714844 107.242188 79.96875 C 103.046875 129.714844 102.863281 160.378906 86.265625 111.246094 C 97.132812 161.941406 81.445312 135.601562 52.972656 94.644531 C 74.6875 139.558594 89.960938 166.132812 51.316406 131.570312 C 85.882812 170.214844 59.304688 154.941406 14.394531 133.222656 C 55.347656 161.695312 81.691406 177.386719 30.996094 166.515625 C 80.121094 183.117188 49.460938 183.304688 -0.285156 187.496094 C 49.460938 191.691406 80.121094 191.878906 30.992188 208.476562 C 81.6875 197.609375 55.347656 213.296875 14.390625 241.769531 C 59.304688 220.050781 85.878906 204.78125 51.316406 243.429688 C 89.960938 208.863281 74.6875 235.433594 52.96875 280.347656 C 81.441406 239.390625 97.132812 213.050781 86.261719 263.746094 C 102.863281 214.617188 103.046875 245.28125 107.242188 295.027344 C 111.4375 245.28125 111.621094 214.617188 128.222656 263.746094 C 117.351562 213.050781 133.042969 239.390625 161.515625 280.347656 C 139.796875 235.441406 124.527344 208.863281 163.171875 243.429688 C 128.609375 204.78125 155.1875 220.050781 200.09375 241.769531 Z M 107.242188 222.34375 C 88 222.34375 72.398438 206.742188 72.398438 187.496094 C 72.398438 168.253906 88 152.652344 107.242188 152.652344 C 126.488281 152.652344 142.089844 168.253906 142.089844 187.496094 C 142.089844 206.742188 126.488281 222.34375 107.242188 222.34375 Z M 107.242188 222.34375 '
        fillOpacity='1'
        fillRule='nonzero'
      />
      <g fill='#ffffff' fillOpacity='1'>
        <g transform='translate(216.138907, 233.461407)'>
          <g>
            <path d='M 43.34375 1.582031 C 63.359375 1.582031 76.460938 -9.359375 76.460938 -26.0625 C 76.460938 -43.488281 60.910156 -49.101562 43.054688 -55.007812 C 28.65625 -59.757812 18.433594 -63.503906 18.433594 -75.597656 C 18.433594 -86.832031 27.214844 -95.039062 41.183594 -95.039062 C 55.582031 -95.039062 63.359375 -86.6875 67.101562 -77.613281 L 73.582031 -81.214844 C 68.6875 -92.878906 57.742188 -102.382812 41.183594 -102.382812 C 24.046875 -102.382812 10.65625 -91.871094 10.65625 -75.3125 C 10.65625 -57.742188 25.777344 -52.992188 42.625 -47.519531 C 58.03125 -42.625 68.6875 -38.015625 68.6875 -25.917969 C 68.6875 -14.398438 60.191406 -5.761719 43.34375 -5.761719 C 26.785156 -5.761719 16.558594 -13.96875 13.105469 -26.0625 L 6.480469 -22.175781 C 11.085938 -7.917969 24.480469 1.582031 43.34375 1.582031 Z M 43.34375 1.582031 ' />
          </g>
        </g>
      </g>
      <g fill='#ffffff' fillOpacity='1'>
        <g transform='translate(298.788337, 233.461407)'>
          <g>
            <path d='M 76.175781 0 L 84.957031 0 L 59.902344 -42.335938 C 72.71875 -45.792969 82.078125 -57.3125 82.078125 -70.992188 C 82.078125 -87.40625 68.6875 -100.796875 52.269531 -100.796875 L 12.527344 -100.796875 L 12.527344 0 L 20.160156 0 L 20.160156 -41.328125 L 51.984375 -41.328125 Z M 20.160156 -93.597656 L 52.269531 -93.597656 C 64.511719 -93.597656 74.445312 -83.519531 74.445312 -70.992188 C 74.445312 -58.605469 64.511719 -48.527344 52.269531 -48.527344 L 20.160156 -48.527344 Z M 20.160156 -93.597656 ' />
          </g>
        </g>
      </g>
      <g fill='#ffffff' fillOpacity='1'>
        <g transform='translate(387.053317, 233.461407)'>
          <g>
            <path d='M 59.183594 1.582031 C 78.046875 1.582031 94.460938 -8.207031 102.671875 -23.039062 L 95.902344 -26.925781 C 89.277344 -14.253906 75.167969 -5.761719 59.183594 -5.761719 C 32.6875 -5.761719 14.398438 -25.632812 14.398438 -50.398438 C 14.398438 -75.167969 32.6875 -95.039062 59.183594 -95.039062 C 75.023438 -95.039062 88.992188 -86.6875 95.613281 -74.300781 L 102.382812 -78.191406 C 94.03125 -92.878906 77.757812 -102.382812 59.183594 -102.382812 C 28.511719 -102.382812 6.769531 -79.199219 6.769531 -50.398438 C 6.769531 -21.597656 28.511719 1.582031 59.183594 1.582031 Z M 59.183594 1.582031 ' />
          </g>
        </g>
      </g>
      <g fill='#ffffff' fillOpacity='1'>
        <g transform='translate(495.188701, 233.461407)'>
          <g>
            <path d='M 68.398438 -93.597656 L 68.398438 -100.796875 L 12.527344 -100.796875 L 12.527344 0 L 20.160156 0 L 20.160156 -46.078125 L 66.671875 -46.078125 L 66.671875 -53.277344 L 20.160156 -53.277344 L 20.160156 -93.597656 Z M 68.398438 -93.597656 ' />
          </g>
        </g>
      </g>
      <g fill='#ffffff' fillOpacity='1'>
        <g transform='translate(569.774745, 233.461407)'>
          <g>
            <path d='M 47.949219 1.582031 C 70.125 1.582031 84.957031 -12.382812 84.957031 -33.695312 L 84.957031 -100.796875 L 77.328125 -100.796875 L 77.328125 -33.695312 C 77.328125 -17.28125 67.101562 -5.761719 47.949219 -5.761719 C 28.945312 -5.761719 18.71875 -17.28125 18.71875 -33.695312 L 18.71875 -100.796875 L 11.085938 -100.796875 L 11.085938 -33.695312 C 11.085938 -12.382812 25.777344 1.582031 47.949219 1.582031 Z M 47.949219 1.582031 ' />
          </g>
        </g>
      </g>
      <g fill='#ffffff' fillOpacity='1'>
        <g transform='translate(665.81508, 233.461407)'>
          <g>
            <path d='M 20.160156 -7.199219 L 20.160156 -100.796875 L 12.527344 -100.796875 L 12.527344 0 L 67.679688 0 L 67.679688 -7.199219 Z M 20.160156 -7.199219 ' />
          </g>
        </g>
      </g>
    </svg>
  ),
  youtube: (props: LucideProps) => <YoutubeIcon {...props} />,
  discord: (props: LucideProps) => {
    const { className, ...rest } = props

    return (
      <svg
        className={cn('fill-[#5865f2]', className)}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 127.14 96.36'
        {...rest}
      >
        <g>
          <g id='Discord_Logos' data-name='Discord Logos'>
            <g
              id='Discord_Logo_-_Large_-_White'
              data-name='Discord Logo - Large - White'
            >
              <path d='M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z' />
            </g>
          </g>
        </g>
      </svg>
    )
  },
}