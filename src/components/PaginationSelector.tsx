import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
type Props = {
  hasNext: boolean;
  hasPrevious: boolean;
  paginationButtons: number[];
  setPage: (page: number) => void;
  currentPage: number;
};

const PaginationSelector = ({
  hasNext,
  hasPrevious,
  paginationButtons,
  setPage,
  currentPage,
}: Props) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={!hasPrevious}
            onClick={() => {
              if (!hasPrevious) return;
              setPage(currentPage - 1);
            }}
          />
        </PaginationItem>
        {paginationButtons.map((page) => {
          const isActive = currentPage === page;
          if (isActive) {
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => {
                    setPage(page);
                  }}
                  isActive
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          } else {
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => {
                    setPage(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          }
        })}
        {hasNext && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            aria-disabled={!hasNext}
            onClick={() => {
              if (!hasNext) return;
              setPage(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSelector;
