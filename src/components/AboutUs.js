import React from "react";
import { Accordion } from "react-bootstrap";

export default function AboutUs() {
    return (
        <div className="container py-5">
            <h2 className="mb-4 textdark">  Frequently Asked Questions:</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>What does Project ELAR offer?</strong></Accordion.Header>
                    <Accordion.Body>
                        Project ELAR is a unit-based ELAR website. The website leads students through modules that include a reading passage, comprehension questions, grammar practice, and a writing prompt.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><strong>How is Project ELAR different than other ELAR websites?</strong></Accordion.Header>
                    <Accordion.Body>
                    Some ELAR websites are auto-graded and force students to read a different passage for each question. There are also websites that are entirely teacher-graded. Project ELAR allows students to read one or two passages per module and then answer questions that are mostly auto-graded, but integrates some teacher-graded material when necessary for a fuller experience. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="backg-darkmed"><strong>How much will I have to grade using Project ELAR?</strong></Accordion.Header>
                    <Accordion.Body>
                    Most of the content is auto-graded. Short answer responses and essay prompts are not auto-graded. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className="backg-dark"><strong>What is the price of Project ELAR?</strong></Accordion.Header>
                    <Accordion.Body>
                    Project ELAR is free.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}