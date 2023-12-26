import { useState } from "react";

export const Global_States = () => {
  const [pageContent, setPageContent] = useState();
  const [previousPageTokens, setPreviousPageTokens] = useState();
  const [currentPageToken, setCurrentPageToken] = useState();
  const [nextPageToken, setNextPageToken] = useState();
  const [reloadComponent, setReloadComponent] = useState(false);
  const [activatePictureFocus, setActivatePictureFocus] = useState(false);
  const [activateHallAddition, setActivateHallAddition] = useState(false);
  return {
    pageContent,
    setPageContent,
    previousPageTokens,
    setPreviousPageTokens,
    currentPageToken,
    setCurrentPageToken,
    nextPageToken,
    setNextPageToken,
    reloadComponent,
    setReloadComponent,
    activatePictureFocus,
    setActivatePictureFocus,
    activateHallAddition,
    setActivateHallAddition,
  };
};
