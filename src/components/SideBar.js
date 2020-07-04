import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/sideBar.scss";
import pages from "../pages.json";
import { getFiles } from "../state/actions";

function SideBar({ dispatch, files }) {
  useEffect(() => {
    dispatch(getFiles(pages.model.user, pages.model.repository, pages.model.path));
  }, [dispatch]);

  return (
    <nav>
      <ul>
        <li>
          <Link to={pages.model.path}>{pages.model.name}</Link>
        </li>

        {files &&
          files.map((file) => (
            <li key={file.name}>
              <Link to={`${file.jsonPath}/${file.name}`}>{file.name}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    files: state.files,
  };
}

export default connect(mapStateToProps)(SideBar);
