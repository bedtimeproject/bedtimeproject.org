/**
 * @function addDrupalUrlToImageTag
 * @description Adds a missing drupal URL to an image object. Useful if the
 * REST api returns an image object with a relative path.
 * @param {string} input An image object with an incomplete url, typically
 * returned from a REST endpoint.
 * @returns {string} The same image object with the drupal url added where it
 * is needed to render the image correctly.
 * @author Alexander Burdiss
 * @since 10/2/21
 * @version 1.1.0
 */
export function addDrupalUrlToImageTag(input) {
  if (input == "" || !input) {
    return undefined;
  }

  const correctedUrl = input.replaceAll(
    '<img src="/sites/default/files',
    '<img src="https://drupal.bedtimeproject.dev/sites/default/files'
  );

  return correctedUrl;
}
