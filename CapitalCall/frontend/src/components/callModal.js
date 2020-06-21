import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class CallModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }
  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Call</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="id">ID</Label>
              <Input
                type="number"
                name="id"
                value={this.state.activeItem.id}
                readonly="true"
              />
            </FormGroup>
            <FormGroup>
              <Label for="call_id">Call ID</Label>
              <Input
                type="number"
                name="call_id"
                value={this.state.activeItem.call_id}
                placeholder="Enter Call ID..."
                required="true"
              />
            </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input
                type="date"
                name="date"
                value={this.state.activeItem.date}
                placeholder="Enter Call Date..."
                required="true"
              />
            </FormGroup>
            <FormGroup>
              <Label for="investment_name">Investment Name</Label>
              <Input
                type="text"
                name="investment_name"
                value={this.state.activeItem.investment_name}
                placeholder="Enter Investment Name..."
                required="true"
              />
            </FormGroup>
            <FormGroup>
              <Label for="capital_requirement">Capital Requirement</Label>
              <Input
                type="number"
                name="capital_requirement"
                value={this.state.activeItem.capital_requirement}
                min="0"
                placeholder="Enter Capital Requirement..."
                required="true"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Add Call
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
