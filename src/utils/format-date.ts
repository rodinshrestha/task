/**
 *
 * @param dateString Unix date
 * @returns convert unix date to readable format
 */
export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
