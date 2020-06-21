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

export default class FundInvestmentModal extends Component {
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
        <ModalHeader toggle={toggle}>Add New Fund Investment</ModalHeader>
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
              <Label for="commitment_id">Commitment ID</Label>
              <Input
                type="number"
                name="commitment_id"
                value={this.state.activeItem.commitment_id}
                placeholder="Enter Commitment ID..."
                required="true"
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
              <Label for="investment_amount">Investment Amount</Label>
              <Input
                type="number"
                name="investment_amount"
                value={this.state.activeItem.investment_amount}
                min="0"
                placeholder="Enter Investment Amount..."
                required="true"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Add Fund Investment
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
