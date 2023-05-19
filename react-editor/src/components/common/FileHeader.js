import { Fragment } from 'react';

import styles from './FileHeader.module.css';
export default function FileHeader({no}){
    return <Fragment>
        <div className = {styles['file-header-container']}>
            Header {no}
        </div>
    </Fragment>
}