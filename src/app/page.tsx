import Header from '../components/Header';
import Footer from '../components/Footer';
import { EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon } from '../components/Icons';
import Image from 'next/image';

const AVATAR_URL = '/AV2.jpeg';

function HomePageContent() {
  return (
    <main className="flex-grow flex justify-center py-5 px-4 sm:px-10 md:px-40 pt-20"> {/* Added pt-20 for header offset */}
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex p-8 @container"> {/* Increased padding from p-4 to p-8 */}
          <div className="flex w-full flex-col gap-6 @[520px]:flex-row @[520px]:items-center"> {/* Increased gap from gap-4 to gap-6 for column layout */}
            <div className="flex flex-col items-center @[520px]:flex-row @[520px]:items-center gap-6"> {/* Increased gap from gap-4 to gap-6 */}
              <div className="relative w-40 h-40 shrink-0"> {/* Increased size to w-40 h-40 (160px), added shrink-0 */}
                <Image
                  src={AVATAR_URL} 
                  alt="Aditya - Software Engineer"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center text-center @[520px]:text-left"> {/* Centered text for column layout */}
                <h1 className="text-primary-text text-[22px] font-bold leading-tight tracking-[-0.015em]">Software Engineer</h1>
                <p className="text-secondary-text-alt text-base font-normal leading-normal mt-1">
                  Hello! I'm Aditya, a Computer Science student with a passion for working on complex problems - be it related to optimisation, system design, 
                  architecture, infra or machine learning. I have dabbled in deep research related to social network analytics with a publication in the springer 
                  journal and have extensive experience of building end-to-end large scale web applications. 
                  Currently pursuing a Master's degree in Computer Science, I am exploring and working on the intersection of systems and AI.
                  I am not shy of being an amateur and love learning and implementing new things from scratch. 
                  Currently spending my time researching and pushing state-of-the-art for open information extraction from multilingual text. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-4 py-3 justify-start">
          <a
            href="/Aditya_Resume.pdf"
            download
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-button-light-bg text-button-light-text text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
          >
            <span className="truncate">Download Resume</span>
          </a>
        </div>
        <div className="@container mt-4">
          <div className="gap-2 px-4 flex flex-wrap justify-start">
            <a href="mailto:adityavenky97@gmail.com" className="flex flex-col items-center gap-2 bg-dark-bg-alt py-2.5 text-center w-20 rounded-lg hover:bg-accent-bg-alt transition-colors">
              <div className="rounded-full bg-accent-bg-alt p-2.5">
                <EnvelopeIcon />
              </div>
              <p className="text-primary-text text-sm font-medium leading-normal">Email</p>
            </a>
            <a href="https://github.com/advenk" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 bg-dark-bg-alt py-2.5 text-center w-20 rounded-lg hover:bg-accent-bg-alt transition-colors">
              <div className="rounded-full bg-accent-bg-alt p-2.5">
                <GithubLogoIcon />
              </div>
              <p className="text-primary-text text-sm font-medium leading-normal">GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/aditya-venkatesh-911b49169/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 bg-dark-bg-alt py-2.5 text-center w-20 rounded-lg hover:bg-accent-bg-alt transition-colors">
              <div className="rounded-full bg-accent-bg-alt p-2.5">
                <LinkedinLogoIcon />
              </div>
              <p className="text-primary-text text-sm font-medium leading-normal">LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-dark-bg-alt group/design-root overflow-x-hidden">
      <Header pageTitle="Aditya's Portfolio" avatarUrl={AVATAR_URL} />
      <HomePageContent />
      <Footer />
    </div>
  );
}