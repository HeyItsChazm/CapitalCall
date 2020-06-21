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

export default class CommitmentModal extends Component {
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
        <ModalHeader toggle={toggle}>Add New Commitment</ModalHeader>
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
              <Label for="fund_id">Fund ID</Label>
              <Input
                type="number"
                name="fund_id"
                value={this.state.activeItem.fund_id}
                placeholder="Enter Fund ID..."
                required="true"
              />
            </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input
                type="date"
                name="date"
                value={this.state.activeItem.date}
                placeholder="Enter Commitment Date..."
                required="true"
              />
            </FormGroup>
            <FormGroup>
              <Label for="amount">Amount</Label>
              <Input
                type="number"
                name="amount"
                value={this.state.activeItem.amount}
                min="0"
                placeholder="Enter Commitment Amount..."
                required="true"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Add Commitment
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
