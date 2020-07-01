import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import getReadme from "../services/getReadme";
// import getFiles from "../services/getFiles";
import { getReadme } from "../state/actions";
import Container from "../components/Container";

function Page({ user, repository }) {
  const dispatch = useDispatch();

  // const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    // async function getMarkdown() {
    //   const response = await getReadme(user, repository);
    //   await getFiles(dispatch, user, repository);

    //   setMarkdown(response);
    // }

    // getMarkdown();
    dispatch(getReadme(user, repository));
  }, [dispatch, repository, user]);

  return <Container />;
}

export default Page;
