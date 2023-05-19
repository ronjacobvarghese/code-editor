import { Fragment } from 'react';

import styles from './FileSelector.module.css';
import FileHeader from '../common/FileHeader';

export default function FileSelector(){
    return <Fragment>
        <div className = {styles['file-selector-container']}>
            <FileHeader no = "1"/>
        </div>
    </Fragment>}