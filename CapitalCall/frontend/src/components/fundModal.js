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

export default class FundModal extends Component {
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
        <ModalHeader toggle={toggle}>Add New Fund</ModalHeader>
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
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.activeItem.name}
                placeholder="Enter Fund Name..."
                required="true"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Add Fund
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
