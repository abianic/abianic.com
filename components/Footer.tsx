const socialInfo = [
  {
    icon: (
      <svg className="h-6 w-6 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(167, 89, 109, 1)" />
            <stop offset="100%" stopColor="rgba(151, 87, 109, 1)" />
          </linearGradient>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>

        <g clipPath="url(#a)">
          <path
            fill="url(#gradient)"
            d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
          />
        </g>
      </svg>
    ),
    href: 'https://www.facebook.com/joinabianic',
  },
  {
    icon: (
      <svg className="h-6 w-6 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48">
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(167, 89, 109, 1)" />
            <stop offset="100%" stopColor="rgba(151, 87, 109, 1)" />
          </linearGradient>
          <clipPath id="clip0_17_80">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>

        <g clipPath="url(#clip0_17_80)">
          <path
            fill="url(#gradient2)"
            d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
          />
        </g>
      </svg>
    ),
    href: 'https://twitter.com/joinabianic',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="lucide lucide-instagram relative"
        viewBox="0 0 24 24"
        fill="none"
      >
        {/* Define el gradiente lineal */}
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(167, 89, 109, 1)" />
            <stop offset="100%" stopColor="rgba(151, 87, 109, 1)" />
          </linearGradient>
        </defs>

        {/* Cambia el stroke para usar el gradiente */}
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="url(#gradient3)" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="url(#gradient3)" />
        <path d="M17.5 6.5L17.51 6.5" stroke="url(#gradient3)" />
      </svg>
    ),
    href: 'https://www.instagram.com/abianic',
  },
]

const Footer = () => (
  <footer>
    <div className="custom-screen pt-16">
      <div className="mt-10 items-center justify-between border-t py-10 sm:flex">
        <p className="text-gray-600">ABIANIC.</p>
        <div className="mt-6 flex items-center gap-x-6 text-gray-400">
          {socialInfo.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              aria-label="social media"
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
