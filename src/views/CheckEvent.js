import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Input,
    Label,
    Row,
    Spinner,
} from "reactstrap";
import { checkEvent } from "../store/actions/EventAction";

export default function CheckEvent() {
    const { loader, event, response } = useSelector((state) => state.myevent);
    const [responseData,setResponseData] = useState([])
    console.log(responseData)
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    useEffect(() => {
      setResponseData(response)
    }, [response]);
    
    return (
        <Container>
            <Row className="d-flex align-items-center justify-content-center">
                <Col sm={6}>
                    <Card className="shadow mt-5">
                        <CardBody>
                            <Label>Message:</Label>
                            <Input
                                type="text"
                                placeholder="Enter message..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                            />
                            <div className="d-flex align-items-center justify-content-center">
                                <Button
                                    className="bg-primary mt-3"
                                    onClick={() => {
                                        let data = {
                                            message: search,
                                            chat_history:
                                                responseData.length > 0
                                                    ? response[0]?.chat_history
                                                    : [],
                                            final_chat_history:
                                                responseData.length > 0
                                                    ? responseData[0]
                                                          ?.final_chat_history
                                                    : "",
                                        };
                                        dispatch(
                                            checkEvent(data, () => {
                                                setSearch("");
                                            })
                                        );
                                    }}
                                >
                                    {loader ? <Spinner size="sm" /> : "Send"}
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                    {event != "" ? (
                        <Card>
                            <CardBody>{event}</CardBody>
                        </Card>
                    ) : (
                        ""
                    )}
                </Col>
            </Row>
        </Container>
    );
}
