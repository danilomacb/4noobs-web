import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";

function Dock({ files, match, dispatch }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    if (!files) return;
    const file = files.find((file) => file.name === match.params.file);

    getDockMarkdown(file.download_url);
  }, [match.params, files, dispatch]);

  async function getDockMarkdown(link) {
    let dockMarkdown = await fetch(link);

    dockMarkdown = await dockMarkdown.text();

    setMarkdown(dockMarkdown);
  }

  return (
    <main>
      <div id="markdown">
        <ReactMarkdown source={markdown} escapeHtml={false} />
      </div>
    </main>
  );
}

function mapStateToProps(state) {
  return {
    files: state.files,
  };
}

export default connect(mapStateToProps)(Dock);
