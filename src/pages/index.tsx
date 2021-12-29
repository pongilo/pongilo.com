import { HiOutlineExternalLink } from 'react-icons/hi';
export default function Home() {
  return (
    <>
      <header className="w-full p-8 sticky z-10 top-0 left-0 flex flex-row flex-nowrap justify-between items-center bg-zinc-900/50 backdrop-blur-sm">
        <p className="flex-none font-sans leading-[1] text-[1.5rem] sm:text-[2rem] font-bold uppercase">
          Pongilo
        </p>
        <a
          href="mailto:elton.pongilo@gmail.com"
          className="flex-none font-sans font-normal text-base text-zinc-400 md:hover:text-white"
        >
          Contact
        </a>
      </header>
      <div className="max-w-[1120px] mx-auto px-8 xl:pl-16 xl:pr-0">
        <h1 className="font-sans font-bold text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.3]">
          <div>
            <span className="animate-fade-in-1 opacity-0">Elton Pongilo</span>{' '}
            <span className="animate-fade-in-5 opacity-0 font-serif font-normal text-zinc-400">
              is a designer and web developer
            </span>{' '}
            <span className="animate-fade-in-2 opacity-0">
              based in Santa Bárbara d’ Oeste, Brazil.
            </span>
          </div>
          <div className="my-8 sm:my-16">
            <span className="animate-fade-in-3 opacity-0">
              I make cool and expressive things
            </span>{' '}
            <span className="animate-fade-in-5 opacity-0 font-serif font-normal text-zinc-400">
              for the internet. Check my
            </span>{' '}
            <span className="animate-fade-in-4 opacity-0">
              select works below.
            </span>
          </div>
        </h1>
        <div className="animate-fade-in-5 opacity-0 mb-8 sm:mb-16 flex flex-col flex-nowrap font-serif font-normal italic text-zinc-400 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[1]">
          <a
            href="https://github.com/pongilo"
            target="_blank"
            className="py-8 border-b border-zinc-700 flex flex-row flex-nowrap justify-between items-center md:hover:border-white md:hover:text-white"
          >
            Github
            <HiOutlineExternalLink size={24} />
          </a>
          <a
            href="https://www.behance.net/pongilo"
            target="_blank"
            className="py-8 border-b border-zinc-700 flex flex-row flex-nowrap justify-between items-center md:hover:border-white md:hover:text-white"
          >
            Behance
            <HiOutlineExternalLink size={24} />
          </a>
          <a
            href="https://dribbble.com/pongilo"
            target="_blank"
            className="py-8 border-b border-zinc-700 flex flex-row flex-nowrap justify-between items-center md:hover:border-white md:hover:text-white"
          >
            Dribbble
            <HiOutlineExternalLink size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pongilo/"
            target="_blank"
            className="py-8 border-b border-zinc-700 flex flex-row flex-nowrap justify-between items-center md:hover:border-white md:hover:text-white"
          >
            LinkedIn
            <HiOutlineExternalLink size={24} />
          </a>
        </div>
      </div>
    </>
  );
}
