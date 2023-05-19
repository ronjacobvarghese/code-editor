import { Fragment } from 'react';

import styles from './FileDashboard.module.css';
import FileNav from './FileNav';
import FileExplorer from './FileExplorer'

export default function FileDashboard(){
    return <Fragment>
        <div className = {styles['file-dashboard-container']}>
            <header> DASHBOARD </header>
            <FileExplorer/>
            <FileNav/>
        </div>
    </Fragment>
} 