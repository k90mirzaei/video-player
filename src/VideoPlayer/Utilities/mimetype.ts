import { getFileExtension } from "./Url";

/**
 * Mimetypes
 *
 * @see https://www.iana.org/assignments/media-types/media-types.xhtml
 * @typedef Mimetypes~Kind
 * @enum
 */
export const MimetypesKind = {
  opus: "video/ogg",
  ogv: "video/ogg",
  mp4: "video/mp4",
  mov: "video/mp4",
  m4v: "video/mp4",
  mkv: "video/x-matroska",
  m4a: "audio/mp4",
  mp3: "audio/mpeg",
  aac: "audio/aac",
  caf: "audio/x-caf",
  flac: "audio/flac",
  oga: "audio/ogg",
  wav: "audio/wav",
  m3u8: "application/x-mpegURL",
  mpd: "application/dash+xml",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  png: "image/png",
  svg: "image/svg+xml",
  webp: "image/webp",
};

/**
 * Get the mimetype of a given src url if possible
 *
 * @param {string} src
 *        The url to the src
 *
 * @return {string}
 *         return the mimetype if it was known or empty string otherwise
 */
export const getMimetype = function (src = "") {
  const ext = getFileExtension(src);

  // @ts-ignore
  const mimetype = MimetypesKind[ext.toLowerCase()];

  return mimetype || "";
};
