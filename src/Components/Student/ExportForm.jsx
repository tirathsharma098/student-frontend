import style from "./ExportForm.module.css";
import { Button, Form } from "react-bootstrap";

const ExportForm = (props) => {
    const exportFormHandler = event => {
        event.preventDefault();
        console.log('export form handler executed');
    }
  return (
    <div className={style["export-container"]}>
      <Form className={style["export-form"]} onSubmit={exportFormHandler}>
        <Form.Group className="mb-3" controlId="enrollmentFrom">
          <Form.Label>From Enrollment Date</Form.Label>
          <Form.Control name="enrolment_to" type="date" placeholder="dd/mm/yyyy" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="enrollmentTo">
          <Form.Label>To Enrollment Date</Form.Label>
          <Form.Control name="enrolment_from" type="date" placeholder="dd/mm/yyyy" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="skills">
          <Form.Label>Skills</Form.Label>
          <Form.Select name="skills" defaultValue="All">
            <option value="reading">reading</option>
            <option value="singing">singing</option>
            <option value="dancing">dancing</option>
          </Form.Select>
        </Form.Group>
        <div className={style["all-export-btn"]}>
          <Button variant="success" type="submit">
            Filter
          </Button>
        </div>
        <div className={style["all-export-btn"]}>
          <Button variant="danger" type="submit">
            Clear
          </Button>
        </div>
        <div className={style["all-export-btn"]}>
          <Button variant="primary" type="submit">
            Export Excel
          </Button>
        </div>
      </Form>
      <div className={style["all-export-btn"]}>
        <Button variant="dark">Total:125</Button>
      </div>
    </div>
  );
};

export default ExportForm;
