import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getReadme } from "../state/actions";
import Container from "../components/Container";

function Page({ user, repository }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReadme(user, repository));
  }, [dispatch, repository, user]);

  return <Container />;
}

export default Page;
