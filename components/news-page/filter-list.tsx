"use client";

import { useEffect, useState } from "react";
// import ArticleListPagination from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import FilterBar from "./filter-bar";
import ArticleList from "./article-list";
import { getAllArticlesForUsers } from "@/queries/article.query";
import ArticleListPagination from "./article-list-pagination";

const FilterList = () => {
  const [selectedCate, setSelectedCate] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: ["get-articles-for-users", selectedCate, currentPage],
    queryFn: () =>
      getAllArticlesForUsers({ category: selectedCate, page: currentPage }),
  });

  useEffect(() => {
    const articleListSectionTop =
      document.getElementById("article-list")?.offsetTop;

    window.scrollTo({
      left: 0,
      top: (articleListSectionTop as number) - 100,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <>
      <FilterBar
        selectedCate={selectedCate}
        setSelectedCate={setSelectedCate}
        setCurrentPage={setCurrentPage}
      />
      <ArticleList
        articles={(data as any)?.result as any[]}
        isLoading={isPending}
      />
      <ArticleListPagination
        pageMaxSize={(data as any)?.pageMaxSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default FilterList;
