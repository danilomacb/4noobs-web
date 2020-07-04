import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import ReactMarkdown from "react-markdown";

import { getReadme } from "../state/actions";

function Readme({ user, repository, readme }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReadme(user, repository));
  }, [dispatch, repository, user]);

  return (
    <>
      <main>
        <div id="markdown">
          <ReactMarkdown source={readme} escapeHtml={false} />
        </div>
      </main>
    </>
  );
}

function mapStateToProps(state) {
  return {
    readme: state.readme,
  };
}

export default connect(mapStateToProps)(Readme);
