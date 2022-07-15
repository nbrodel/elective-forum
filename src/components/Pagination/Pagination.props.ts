export interface PaginationProps {
    currentPage: number,
    totalPages: number,
    onChangePage?: (value: number) => void
}
