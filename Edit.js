import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Edit() {
  //const [name, setname] = useState("");
  //const [age, setlname] = useState("");
  //const [id, setid] = useState("");

  let history = useNavigate();

  var index = array
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handelSubmit = (e) => {
    e.preventDefault();

    let a = array[index];

    a.Name = Fname;
    a.Lname = Lname;

    history('/');
  };

  useEffect(() => {
    setname(localStorage.getItem('Fname'));
    setage(localStorage.getItem('Lname'));
    setid(localStorage.getItem('id'));
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={lname}
            onChange={(e) => setage(e.target.value)}
            type="text"
            placeholder="Last Name"
          />
        </Form.Group>

        <Button
          onClick={(e) => handelSubmit(e)}
          variant="primary"
          type="submit"
          size="lg"
        >
          Update
        </Button>

        <Link className="d-grid gap-2" to="/">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;
