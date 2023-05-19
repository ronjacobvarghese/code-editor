import { Fragment } from "react";

import styles from "./FileButton.module.css";

function FileButton(props) {
  const { fileName } = props;

  return (
    <Fragment>
      <div className={styles["file-button-container"]}>
        <center>{fileName}</center>
      </div>
    </Fragment>
  );
}

export default FileButton;
