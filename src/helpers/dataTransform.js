export const transformYoutubeUrl = (url) => {
  return url?.replace('watch?v=', 'embed/');
}