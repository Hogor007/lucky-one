import React from 'react';
import { Accordion, Table } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className='container mb-5'><hr />
            <h1 className="text-center text-black">FAQ</h1>
            <hr />
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>How does React works?</strong></Accordion.Header>
                    <Accordion.Body>
                        When developing client-side apps, a group of Facebook developers discovered that the (DOM) is slow. (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents.) It specifies how documents are accessed and modified, as well as their logical structure.) React uses a virtual DOM, which is essentially a JavaScript representation of a DOM tree, to speed things up. As a result, when reading or writing to the DOM, it will use its virtual representation. The virtual DOM will then try to update the browser's DOM as efficiently as possible. React elements, as opposed to browser DOM elements, are simple objects that are simple to create. React DOM updates the DOM to match the React elements. This is the case.
                        This is due to the fact that JavaScript is extremely fast, and it is worthwhile to keep a DOM tree in it to speed up its manipulation. React was designed to be used in the browser, but because of its design, it can also be used in the server using Node.js.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><strong>What is the Difference between Props and State?</strong></Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th className='text-center'>Props</th>
                                    <th className='text-center'>State</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Props are immutable.</td>
                                    <td>State is mutable.</td>
                                </tr>
                                <tr>
                                    <td>Props have a read-only attribute.</td>
                                    <td>Asynchronous state modifications are possible.</td>
                                </tr>
                                <tr>
                                    <td>Props are available to the child component.</td>
                                    <td>Child components have no access to the state.</td>
                                </tr>
                                <tr>
                                    <td>Props allow components to be reused.</td>
                                    <td>Components cannot be made reusable by the state.</td>
                                </tr>
                                <tr>
                                    <td>Props are used to allow components to communicate with one another.</td>
                                    <td>States can be used to display the dynamic changes of a component.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><strong>How useState works?</strong></Accordion.Header>
                    <Accordion.Body>
                        The useState hook in function components allows us to declare one or more state variables. React keeps track of these state variables in the background and ensures that they are updated on subsequent component re-renders.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;