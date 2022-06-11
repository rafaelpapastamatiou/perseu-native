import { useState } from 'react';

interface UsePaginationProps {
  initialPage?: number;
  perPage?: number;
  total?: number;
}

interface UsePaginationReturn {
  currentPage: number;
  perPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

const defaultInitialPage = 0;
const defaultPerPage = 10;
const defaultTotal = 0;

const defaultProps: UsePaginationProps = {
  initialPage: defaultInitialPage,
  perPage: defaultPerPage,
  total: defaultTotal,
};

export function usePagination({
  initialPage = defaultInitialPage,
  perPage = defaultPerPage,
  total = defaultTotal,
}: UsePaginationProps = defaultProps): UsePaginationReturn {
  const [page, setPage] = useState(initialPage);

  const totalPages = total ? total / perPage : 0;

  function handleNextPage() {
    if (page + 1 > totalPages) return;

    setPage(page + 1);
  }

  function handlePrevPage() {
    if (page - 1 < 0) return;

    setPage(page - 1);
  }

  return {
    currentPage: page,
    perPage,
    handleNextPage,
    handlePrevPage,
  };
}
