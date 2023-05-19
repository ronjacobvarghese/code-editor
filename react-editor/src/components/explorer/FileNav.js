import { Fragment } from "react";

import styles from "./FileNav.module.css";
import FileButton from "../common/FileButton";

function FileNav(props) {
  const { folderName } = props;

  return (
    <Fragment>
      <div className={styles["file-nav-container"]}>
        <header>{folderName}</header>
        <ul>
          <li>
            <FileButton fileName="File1" />
          </li>
          <li>
            <FileButton fileName="File2" />
          </li>
          <li>
            <FileButton fileName="File3" />
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default FileNav;
