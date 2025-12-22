import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    totalPage: number | null;
}