import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";

class TheModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { modalText, modalTitle, modalContent, submitText } = this.props;
    return (
      <>
        <span
          className="text-center btn btn-primary ml-2 mr-5 mt-3 btn-block"
          onClick={this.handleShow}
        >
          {modalText}
        </span>

        <Modal show={this.state.show} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalContent}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              {submitText}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default TheModal;
