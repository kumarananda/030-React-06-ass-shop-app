import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddTag = () => {
  // set tags
  const [tag, setTag] = useState();

  //slug Genarete
  const makeSlug = (data) => {
    let arr = data.split(" ");
    return arr.join("-").toLowerCase();
  };
  // console.log(makeSlug('My name is Asraf'));

  // hadleing from submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let slug = makeSlug(tag);
    axios
      .post("http://localhost:5050/tags", {
        id: "",
        name: tag,
        slug: slug,
      })
      .then((res) => setTag(""));
  };

  //

  return (
    <>
      <h1>Add New Tag</h1>
      <hr />
      <Link className="btn btn-primary btn-sm" to={"/admin/tag"}>
        All Tags
      </Link>
      <hr />
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="my-3">
          <Form.Control
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            type="text"
            placeholder="Tag Name"
          />
        </Form.Group>
        <br />
        <Form.Group className=" my-3">
          <Button type="submit" variant="success" className="btn-sm">
            Add
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddTag;
