import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/sideBar.scss";
import pages from "../pages.json";
import { getFiles } from "../state/actions";

function SideBar({ dispatch, files }) {
  useEffect(() => {
    dispatch(getFiles(pages[0].user, pages[0].repository, pages[0].path));
  }, [dispatch]);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/he4rt.png`} alt="4noobs" />
          </Link>
        </li>

        {pages.map((page) => (
          <li key={page.name}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}

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
