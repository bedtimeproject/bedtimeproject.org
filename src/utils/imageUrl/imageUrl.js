import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../client";
const builder = imageUrlBuilder(sanityClient);

/**
 * @function imageUrl
 * @description Handles pulling in the sanity client and image url builder to
 * create an object that makes pulling sanity images easier.
 * @param {object} source The source for the image to load from Sanity.
 * @returns {object}
 * @author Alexander Burdiss
 * @since 2/19/22
 * @version 1.0.0
 */
export function imageUrl(source) {
  return builder.image(source);
}
