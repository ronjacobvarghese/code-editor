import { Fragment } from 'react';

import styles from 'FilesContainer.module.css';


function FilesContainer(props){
    const {
        folderName,
        children: folderContent, 
    } = props;
    return(
        <Fragment>
            <div className = {styles['files-container']}>
                <header>{folderName}</header>
            </div>
        </Fragment>
    );
}


export default FilesContainer;