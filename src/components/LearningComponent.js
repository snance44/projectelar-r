import React, { useState } from "react";
import { Tab, Tabs, Form, Button, Card } from "react-bootstrap";
import { CONTENTS } from "../shared/LearningContent";
import Passage from "./PassageComponent";

export default function Learning() {
  const [contents] = useState(CONTENTS);
  const [key, setKey] = useState("introduction");

  const introduction = contents.map((content) => (
    <div className="container p-4" key={content.id}>
      <div className="row">
        <div className="col-lg-4">
          <img
            src="./assets/images/balloon.jpg"
            alt="Balloon in sky"
            className=" m-3 m-lg-1 learningimage text-center"
          />
        </div>
        <div className="col-lg-8">
          <h3>{content.header}</h3>
          <h5>In this unit you will: </h5>
          <ul>
            <li>
              Read: {content.reading.title} by {content.reading.author} and
              answer questions over it.
            </li>
            <li>{content.grammar.title}</li>
            <li>Writing prompt: {content.writing.prompt}</li>
          </ul>
        </div>
      </div>
    </div>
  ));

  const reading = contents.map((content) => (
    <div className="container p-4" key={content.id}>
      <div className="row">
        <div className="col">
          <h3 className="my-3">
            <strong>{content.reading.title}</strong>
          </h3>
          <h5 className="my-3">By: {content.reading.author}</h5>
          <Passage />
        </div>
      </div>
    </div>
  ));
  const grammar = contents.map((content) => (
    <Form key={content.id} className="p-4">
      <h3>{content.grammar.title}</h3>
      <h6>{content.grammar.content}</h6>
      <Form.Group className="m-3 col-md-6">
        <Form.Label>{content.grammar.questions.question1.question}</Form.Label>
        <Form.Select>
          <option>Click here</option>
          <option value="1">
            {content.grammar.questions.question1.answer1}
          </option>
          <option value="2">
            {content.grammar.questions.question1.answer2}
          </option>
          <option value="3">
            {content.grammar.questions.question1.answer3}
          </option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-3 col-md-6">
        <Form.Label>{content.grammar.questions.question2.question}</Form.Label>
        <Form.Select>
          <option>Click here</option>
          <option value="1">
            {content.grammar.questions.question2.answer1}
          </option>
          <option value="2">
            {content.grammar.questions.question2.answer2}
          </option>
          <option value="3">
            {content.grammar.questions.question2.answer3}
          </option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-3 col-md-6">
        <Form.Label>{content.grammar.questions.question3.question}</Form.Label>
        <Form.Select>
          <option>Click here</option>
          <option value="1">
            {content.grammar.questions.question3.answer1}
          </option>
          <option value="2">
            {content.grammar.questions.question3.answer2}
          </option>
          <option value="3">
            {content.grammar.questions.question3.answer3}
          </option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-3 col-md-6">
        <Form.Label>{content.grammar.questions.question4.question}</Form.Label>
        <Form.Select>
          <option>Click here</option>
          <option value="1">
            {content.grammar.questions.question4.answer1}
          </option>
          <option value="2">
            {content.grammar.questions.question4.answer2}
          </option>
          <option value="3">
            {content.grammar.questions.question4.answer3}
          </option>
        </Form.Select>
      </Form.Group>
    </Form>
  ));

  const questions = contents.map((content) => (
    <Form key={content.id} className="p-4">
      <h3>{content.questions.title}</h3>
      <Form.Group className="m-3 col-md-6">
        <Form.Label>{content.questions.question1.question}</Form.Label>
        <Form.Select>
          <option>Click here</option>
          <option value="1">{content.questions.question1.answer1}</option>
          <option value="2">{content.questions.question1.answer2}</option>
          <option value="3">{content.questions.question1.answer3}</option>
          <option value="4">{content.questions.question1.answer4}</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-3 col-md-6">
        <Form.Label>{content.questions.question2.question}</Form.Label>
        <Form.Select>
          <option>Click here</option>
          <option value="1">{content.questions.question2.answer1}</option>
          <option value="2">{content.questions.question2.answer2}</option>
          <option value="3">{content.questions.question2.answer3}</option>
          <option value="4">{content.questions.question2.answer4}</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-3 col-md-6">
        <Form.Label>{content.questions.question3.question}</Form.Label>
        <Form.Select>
          <option>Click here</option>
          <option value="1">{content.questions.question3.answer1}</option>
          <option value="2">{content.questions.question3.answer2}</option>
          <option value="3">{content.questions.question3.answer3}</option>
          <option value="4">{content.questions.question3.answer4}</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-3 col-md-6">
        <Form.Label>{content.questions.question4.question}</Form.Label>
        <Form.Select>
          <option>Click here</option>
          <option value="1">{content.questions.question4.answer1}</option>
          <option value="2">{content.questions.question4.answer2}</option>
          <option value="3">{content.questions.question4.answer3}</option>
          <option value="4">{content.questions.question4.answer4}</option>
        </Form.Select>
      </Form.Group>
    </Form>
  ));

  const writing = contents.map((content) => (
    <Form key={content.id} className="p-4">
      <h3 className="m-4">{content.writing.title}</h3>
      <h6 className="m-4">{content.writing.prompt}</h6>
      <Form.Group className="m-3 col-md-6">
        <Form.Control as="textarea" rows={6} />
        <p className="mt-4">Check that all of your sentences have:</p>
        <Form.Check
          className="my-3"
          type="checkbox"
          label="A capital letter at the beginning of each sentence."
        />
        <Form.Check
          className="my-3"
          type="checkbox"
          label="A period at the end of each sentence."
        />
        <Button className="my-3">Submit</Button>
      </Form.Group>
    </Form>
  ));

  return (
    <Card className="learningcard">
      <div className="learning p-4">
        <Tabs
          defaultActiveKey="introduction"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="m-3"
        >
          <Tab eventKey="introduction" title="Introduction">
            {introduction}
          </Tab>
          <Tab eventKey="reading" title="Reading">
            {reading}
          </Tab>
          <Tab eventKey="questions" title="Questions">
            {questions}
          </Tab>
          <Tab eventKey="grammar" title="Grammar">
            {grammar}
          </Tab>
          <Tab eventKey="writing" title="Writing">
            {writing}
          </Tab>
        </Tabs>
      </div>
    </Card>
  );
}
