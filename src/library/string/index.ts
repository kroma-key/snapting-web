export const formatVerifySeconds = (seconds: number): string => {
  const remainMinutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const remainSeconds = (seconds % 60).toString().padStart(2, "0");

  return `${remainMinutes}:${remainSeconds}`;
};
