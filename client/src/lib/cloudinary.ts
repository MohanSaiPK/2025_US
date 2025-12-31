/**
 * Cloudinary helper utility
 * Generates Cloudinary URLs for images
 */

/**
 * Generate a Cloudinary URL for an image
 * @param publicId - The public ID of the image in Cloudinary (e.g., "year-recap/01")
 * @param transformations - Optional transformations (e.g., "w_800,h_600,c_fill")
 * @returns Full Cloudinary URL
 */
export function getCloudinaryUrl(
  publicId: string,
  transformations: string = "w_1200,h_800,c_fill,q_auto,f_auto"
): string {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    console.warn("Cloudinary cloud name not configured, using local path");
    return publicId;
  }

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`;
}

/**
 * Generate a Cloudinary URL with specific width
 * @param publicId - The public ID of the image
 * @param width - Desired width in pixels
 */
export function getCloudinaryImageUrl(
  publicId: string,
  width: number = 1200
): string {
  return getCloudinaryUrl(publicId, `w_${width},c_scale,q_auto,f_auto`);
}
