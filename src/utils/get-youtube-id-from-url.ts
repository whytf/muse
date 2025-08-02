export const getYoutubeIdFromUrl = (url: string): string | null => {
  const match = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/.exec(url);
  return (match && match[2].length === 11) ? match[2] : null;
};
