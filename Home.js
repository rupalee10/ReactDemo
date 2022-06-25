import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();

  // Deleted function - functionality
  // for deleting the entry
  function deleted(id) {
    var index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    array.splice(index, 1);

    history("/");
  }
  function setID(id, name, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", Fname);
    localStorage.setItem("Lname", Lname);
  }

  return (
    <div style={{ margin: "10rem" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Lname</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item) => {
            return (
              <tr>
                <td>{item.Fname}</td>
                <td>{item.Lname}</td>
                <td>
                  <Link to={`/edit`}>
                    <Button variant="info">Update</Button>
                  </Link>
                </td>
                <td>
                  <Button onClick={(e) => deleted(item.id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
