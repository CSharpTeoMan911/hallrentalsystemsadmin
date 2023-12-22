import { useState } from "react";

export const Global_States = () => {
  const [pageContent, setPageContent] = useState();
  const [previousPageTokens, setPreviousPageTokens] = useState();
  const [currentPageToken, setCurrentPageToken] = useState();
  const [nextPageToken, setNextPageToken] = useState();
  return {
    pageContent,
    setPageContent,
    previousPageTokens,
    setPreviousPageTokens,
    currentPageToken,
    setCurrentPageToken,
    nextPageToken,
    setNextPageToken,
  };
};
