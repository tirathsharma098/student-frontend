import { Button, Form } from "react-bootstrap";
import style from "./ActionForm.module.css";
const ActionForm = (props) => {
  return (
    <Form className={style["bulk-action-form"]}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Select>
          <option>Bulk Action</option>
          <option value="1">One</option>
        </Form.Select>
      </Form.Group>
      <div>
        <Button variant="info" type="submit" className={style["action-submit"]}>
          Apply
        </Button>
      </div>
    </Form>
  );
};

export default ActionForm;
