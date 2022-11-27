import './App.scss';
import Header from "./sections/header/Header";
import {Col, Form, Row} from "antd";
import GeneraInformation from "./sections/general-information/GeneraInformation";
import Summary from "./sections/summary/Summary";
import WriterLevel from "./sections/writer-level/WriterLevel";
import ContactInformation from "./sections/contact-information/ContactInformation";

function App() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="app">
          <div className="app__content">
              <Header/>
              <Form
                  name="basic"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  layout="vertical"
                  requiredMark="optional"
              >
                  <Row>
                      <Col flex="850px">
                          <GeneraInformation/>
                      </Col>
                      <Col flex="auto">
                          <Summary/>
                      </Col>
                  </Row>
                  <Row>
                      <Col flex="850px">
                          <WriterLevel/>
                      </Col>
                  </Row>
                  <Row>
                      <Col flex="850px">
                          <ContactInformation/>
                      </Col>
                  </Row>
              </Form>
          </div>
        </div>
  );
}

export default App;
