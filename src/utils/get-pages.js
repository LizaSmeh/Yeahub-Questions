export const getPages = (totalPages, currentPage) => {
  const pages = [];

  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  pages.push(1);

  let start = 2;
  let end = totalPages - 1;

  if (currentPage < 5) {
    end = 5;
  } else if (currentPage > totalPages - 4) {
    start = totalPages - 4;
  } else {
    start = currentPage - 1;
    end = currentPage + 2;
  }

  if (start > 2) {
    pages.push(" ... ");
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) {
    pages.push(" ... ");
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};
