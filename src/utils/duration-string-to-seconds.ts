import parse from 'parse-duration';

/**
 * Parse duration strings to seconds.
 * @param str any common duration format, like 1m or 1hr 30s. If the input is a number it's assumed to be in seconds.
 * @returns seconds
 */
const durationStringToSeconds = (str: string): number => {
  const isInputSeconds = /^\d+$/.test(str);

  if (isInputSeconds) {
    return Number.parseInt(str, 10);
  }

  return (parse(str) ?? 0) / 1000;
};

export default durationStringToSeconds;
