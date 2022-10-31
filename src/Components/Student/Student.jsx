import style from './Student.module.css';
import { Fragment } from "react";
import {Button} from 'react-bootstrap';
import ExportForm from './ExportForm';
import ActionForm from './ActionForm';
import SearchAndPageForm from './SearchAndPageForm';
const Student = props => {
    return(
        <Fragment>
            <header className={style.header}>
                <h2>Student List</h2>
                <Button variant="dark">&#65291;Add</Button>
            </header>
            <ExportForm/>
            <ActionForm/>
            <SearchAndPageForm/>
        </Fragment>
    );
}

export default Student;