import { Form, Row, Col } from "react-bootstrap";
import style from "./SearchAndPageForm.module.css";

const SearchAndPageForm = (props) => {
  return (
    <div className={style["search-entries-form"]}>
      <div className={style["display-total-entries"]}>
        <div style={{"padding-right": "5px"}}>Show </div>
        <Form.Select>
          <option>20</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </Form.Select>
        <div> Entries</div>
      </div>
      <div className={style["search-student-container"]}>
        <div className={style["search-text"]}> Search: </div>
       <Form.Control className={style["search-control"]} type="text" name="search" />
      </div>
    </div>
  );
};

export default SearchAndPageForm;
