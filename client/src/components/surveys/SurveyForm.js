//SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form"; // will communicate with the redux store
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="test"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} //handleSubmit is coming from reduxForm
        >
          {this.renderFields()}
          <Link
            to="/surveys"
            className="waves-effect red waves-teal btn-small"
            type="submit"
          >
            Cancel
            <i className="material-icons right">cancel</i>
          </Link>

          <button
            className="waves-effect right waves-light btn-small"
            type="submit"
          >
            Next
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || ""); // to validate the emails

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = "Please provide a valid " + noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm", // will only allow to show one property, form
  destroyOnUnmount: false, // will keep the values on the form when navigating to another component
})(SurveyForm);
