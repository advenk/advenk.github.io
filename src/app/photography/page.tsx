import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { getPhotosData, PhotoData } from '../../lib/photos'; // Import the new utility

const AVATAR_URL = '/AV2.jpeg';

export default function PhotographyPage() {
  const photos = getPhotosData();

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-dark-bg group/design-root overflow-x-hidden">
      <Header pageTitle="Aditya's Portfolio" avatarUrl={AVATAR_URL} />
      <main className="flex-grow flex justify-center py-5 px-4 sm:px-10 md:px-40 pt-20">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-primary-text tracking-light text-[32px] font-bold leading-tight">Photography</h1>
              {/* Optional: Add a short description for your photography page here */}
            </div>
          </div>

          <div className="p-4">
            {photos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo) => (
                  <div key={photo.id} className="group relative w-full h-64 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                    {/* You could add an overlay or caption on hover here if desired */}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-secondary-text">No photos yet. Add some to your <code>public/photos</code> directory!</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 