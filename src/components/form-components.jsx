import React from "react";

const emailValidator =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      phoneNo: "",
      country: "",
      city: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      phoneNoError: "",
      countryError: "",
      cityError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      panNumber: "",
      aadharNumber: "",
      panNumberError: "",
      aadharNumberError: "",
      isFormSubmitted: false,
      showPassword: false,
      cities: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  validatePanNumber() {
    let panNumberError = "";
    const value = this.state.panNumber;
    if (value.trim() === "") panNumberError = "PAN Number is required";

    this.setState({
      panNumberError,
    });
    return panNumberError === "";
  }

  validateAadharNumber() {
    let aadharNumberError = "";
    const value = this.state.aadharNumber;
    if (value.trim() === "") aadharNumberError = "AADHAR Number is required";

    this.setState({
      aadharNumberError,
    });
    return aadharNumberError === "";
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "username",
      "phoneNo",
      "country",
      "city",
      "emailAddress",
      "panNumber",
      "aadharNumber",
      "password",
      "passwordConfirmation",
    ];
    let isValid = true;
    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === "firstName") isValid = this.validateFirstName();
    else if (name === "lastName") isValid = this.validateLastName();
    else if (name === "username") isValid = this.validateUsername();
    else if (name === "phoneNo") isValid = this.validatePhoneNo();
    else if (name === "country") isValid = this.validateCountry();
    else if (name === "city") isValid = this.validateCity();
    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "password") isValid = this.validatePassword();
    else if (name === "panNumber") isValid = this.validatePanNumber();
    else if (name === "aadharNumber") isValid = this.validateAadharNumber();
    else if (name === "passwordConfirmation")
      isValid = this.validatePasswordConfirmation();
    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "First Name is required";

    this.setState({
      firstNameError,
    });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Last Name is required";

    this.setState({
      lastNameError,
    });
    return lastNameError === "";
  }

  validateUsername() {
    let usernameError = "";
    const value = this.state.username;
    if (value.trim() === "") usernameError = "Username is required";

    this.setState({
      usernameError,
    });
    return usernameError === "";
  }

  validatePhoneNo() {
    let phoneNoError = "";
    const value = this.state.phoneNo;
    if (value.trim() === "") phoneNoError = "Phone Number is required";

    this.setState({
      phoneNoError,
    });
    return phoneNoError === "";
  }

  validateCountry() {
    let countryError = "";
    const value = this.state.country;
    if (value.trim() === "") countryError = "Country is required";

    this.setState({
      countryError,
    });
    return countryError === "";
  }

  validateCity() {
    let cityError = "";
    const value = this.state.city;
    if (value.trim() === "") cityError = "City is required";

    this.setState({
      cityError,
    });
    return cityError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";

    this.setState({
      emailAddressError,
    });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError,
    });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    if (this.state.password !== this.state.passwordConfirmation)
      passwordConfirmationError = "Password does not match Confirmation";

    this.setState({
      passwordConfirmationError,
    });
    return passwordConfirmationError === "";
  }

  togglePasswordVisibility() {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  }

  handleCountryChange(event) {
    const country = event.target.value;
    let cities = [];
    if (country === "India")
      cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
    else if (country === "China")
      cities = ["Beijing", "Shanghai", "Shenzhen", "Guangzhou", "Chengdu"];
    else if (country === "America")
      cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
    else if (country === "Australia")
      cities = ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"];

    this.setState({ country, cities, city: "" });
  }

  render() {
    return (
      <div className="main">
        <h3>SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Username: {this.state.username}</div>
            <div>Phone Number: {this.state.phoneNo}</div>
            <div>Country: {this.state.country}</div>
            <div>City: {this.state.city}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div>PAN Number: {this.state.panNumber}</div>
            <div>AADHAR Number: {this.state.aadharNumber}</div>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.firstNameError && (
                <div className="errorMsg">{this.state.firstNameError}</div>
              )}
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.lastNameError && (
                <div className="errorMsg">{this.state.lastNameError}</div>
              )}
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.usernameError && (
                <div className="errorMsg">{this.state.usernameError}</div>
              )}
              <div className="inline-group">
                <select
                  name="countryCode"
                  value={this.state.countryCode}
                  onChange={this.handleChange}
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+86">+86 (China)</option>
                  <option value="+1">+1 (America)</option>
                  <option value="+61">+61 (Australia)</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNo"
                  value={this.state.phoneNo}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                />
              </div>
              <br />
              <div className="inline-group">
                <select
                  name="country"
                  value={this.state.country}
                  onChange={this.handleCountryChange}
                  onBlur={this.handleBlur}
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="America">America</option>
                  <option value="Australia">Australia</option>
                </select>
                <select
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                >
                  <option value="">Select City</option>
                  {this.state.cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              {this.state.phoneNoError && (
                <div className="errorMsg">{this.state.phoneNoError}</div>
              )}
              {this.state.cityError && (
                <div className="errorMsg">{this.state.cityError}</div>
              )}
              <input
                type="email"
                placeholder="Email Address"
                name="emailAddress"
                value={this.state.emailAddress}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <input
                type="text"
                placeholder="PAN Number"
                name="panNumber"
                value={this.state.panNumber}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.panNumberError && (
                <div className="errorMsg">{this.state.panNumberError}</div>
              )}
              <input
                type="text"
                placeholder="AADHAR Number"
                name="aadharNumber"
                value={this.state.aadharNumber}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.aadharNumberError && (
                <div className="errorMsg">{this.state.aadharNumberError}</div>
              )}
              <br />
              {this.state.emailAddressError && (
                <div className="errorMsg">{this.state.emailAddressError}</div>
              )}
              <input
                type={this.state.showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <button
                type="button"
                onClick={this.togglePasswordVisibility}
                style={{ marginLeft: "10px" }}
              >
                {this.state.showPassword ? "Hide" : "Show"}
              </button>
              <br />
              {this.state.passwordError && (
                <div className="errorMsg">{this.state.passwordError}</div>
              )}
              <input
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.passwordConfirmationError && (
                <div className="errorMsg">
                  {this.state.passwordConfirmationError}
                </div>
              )}
              <button>Signup</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default FormComponent;
