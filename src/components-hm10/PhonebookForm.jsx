import React, {Component} from "react";

export const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginBottom: '24px',
  width: '100%',
}

export default class PhonebookForm extends Component {
  state = {
    name: '',
    phone: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = this.state;
    if (name && phone) {
      this.props.onAddContact({ name, phone });
      this.setState({ name: '', phone: '' });
    } else {
      alert("Please fill in both fields");
    }
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} style={formStyle}>
        <label htmlFor="name" className="AddNewContactLabel">Name:</label>
        <input
          className="addNewContactInput"
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="phone" className="AddNewContactLabel">Phone:</label>
        <input
          className="addNewContactInput"
          type="text"
          name="phone"
          id="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit" className="AddNewContactBtn">Add Contact</button>
      </form>
  )}
}