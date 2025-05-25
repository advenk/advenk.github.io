import fs from 'fs';
import path from 'path';

// Absolute path to the public/photos directory
const photosDirectory = path.join(process.cwd(), 'public', 'photos');

export interface PhotoData {
  id: string; // filename can serve as id
  src: string; // path relative to /public, e.g., /photos/image.jpg
  alt: string;
}

export function getPhotosData(): PhotoData[] {
  try {
    const fileNames = fs.readdirSync(photosDirectory);
    
    const imageFiles = fileNames.filter(fileName => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(fileName)
    );

    return imageFiles.map((fileName, index) => ({
      id: fileName,
      src: `/photos/${fileName}`,
      alt: `Photograph ${index + 1}`, // Generic alt text, user should customize
    }));
  } catch (error) {
    console.error("Error reading photos directory:", error);
    // If the directory doesn't exist or there's an error, return an empty array
    // This prevents the build from failing if the user hasn't created the folder yet.
    return [];
  }
} 