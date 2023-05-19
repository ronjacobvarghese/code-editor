import { Fragment } from 'react';

import styles from './FileExplorer.module.css';

function FileExplorer(){
    return <Fragment>
        <div className = {styles['file-explorer-container']}>
            <header>EXPLORER</header>
        </div>
    </Fragment>
}

export default FileExplorer;