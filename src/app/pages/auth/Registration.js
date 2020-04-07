import React, { useState } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import * as auth from "../../store/ducks/auth.duck";
import { register } from "../../crud/auth.crud";
import clsx from "clsx";
//Registration Page
function Registration(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const [loadingButtonStyle, setLoadingButtonStyle] = useState({
    paddingRight: "2.5rem",
  });
  //Enable Lazy Loading
  const enableLoading = () => {
    setLoading(true);
    setLoadingButtonStyle({ paddingRight: "3.5rem" });
  };
  //Disable Lazy Loading
  const disableLoading = () => {
    setLoading(false);
    setLoadingButtonStyle({ paddingRight: "2.5rem" });
  };

  return (
    <div className="kt-login__body">
      <div className="kt-login__form">
        <div className="kt-login__title">
          <h3>
            <FormattedMessage id="AUTH.REGISTER.TITLE" />
          </h3>
        </div>

        <Formik
          initialValues={{
            email: "",
            username: "",
            password: "",
            acceptTerms: true,
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = intl.formatMessage({
                id: "AUTH.VALIDATION.REQUIRED_FIELD",
              });
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = intl.formatMessage({
                id: "AUTH.VALIDATION.INVALID_FIELD",
              });
            }

            if (!values.username) {
              errors.username = intl.formatMessage({
                id: "AUTH.VALIDATION.REQUIRED_FIELD",
              });
            }

            if (!values.password) {
              errors.password = intl.formatMessage({
                id: "AUTH.VALIDATION.REQUIRED_FIELD",
              });
            }

            if (!values.confirmPassword) {
              errors.confirmPassword = intl.formatMessage({
                id: "AUTH.VALIDATION.REQUIRED_FIELD",
              });
            } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword =
                "Password and Confirm Password didn't match.";
            }

            if (!values.acceptTerms) {
              errors.acceptTerms = "Accept Terms";
            }
            return errors;
          }}
          //Call backend API for submitting registration details
          onSubmit={(values, { setStatus, setSubmitting }) => {
            enableLoading();

            setTimeout(() => {
              register(values.username, values.email, values.password)
                .then(({ data: { status } }) => {
                  props.history.push("/auth/login");
                })
                .catch(() => {
                  setSubmitting(false);
                  disableLoading();
                  setStatus(
                    intl.formatMessage({
                      id: "AUTH.VALIDATION.INVALID_LOGIN",
                    })
                  );
                });
            }, 1000);
          }}
        >
          {({
            values,
            status,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              onSubmit={handleSubmit}
              noValidate={true}
              autoComplete="off"
              className="kt-form"
            >
              {status && (
                <div role="alert" className="alert alert-danger">
                  <div className="alert-text">{status}</div>
                </div>
              )}

              <div className="form-group mb-0">
                <TextField
                  margin="normal"
                  label="Username"
                  className="kt-width-full"
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                  helperText={touched.username && errors.username}
                  error={Boolean(touched.username && errors.username)}
                />
              </div>

              <div className="form-group mb-0">
                <TextField
                  label="Email"
                  margin="normal"
                  className="kt-width-full"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  helperText={touched.email && errors.email}
                  error={Boolean(touched.email && errors.email)}
                />
              </div>

              <div className="form-group mb-0">
                <TextField
                  type="password"
                  margin="normal"
                  label="Password"
                  className="kt-width-full"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  helperText={touched.password && errors.password}
                  error={Boolean(touched.password && errors.password)}
                />
              </div>

              <div className="form-group">
                <TextField
                  type="password"
                  margin="normal"
                  label="Confirm Password"
                  className="kt-width-full"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                />
              </div>

              <div className="form-group mb-0">
                <FormControlLabel
                  label={
                    <>
                      I agree the{" "}
                      <Link
                        to="/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms & Conditions
                      </Link>
                    </>
                  }
                  control={
                    <Checkbox
                      color="primary"
                      name="acceptTerms"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      checked={values.acceptTerms}
                    />
                  }
                />
              </div>

              <div className="kt-login__actions">
                <Link
                  to="/auth/forgot-password"
                  className="kt-link kt-login__link-forgot"
                >
                  <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
                </Link>

                <Link to="/auth">
                  <button className="btn btn-secondary btn-elevate kt-login__btn-secondary">
                    Back
                  </button>
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting || !values.acceptTerms}
                  className={`btn btn-primary btn-elevate kt-login__btn-primary ${clsx(
                    {
                      "kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light": loading,
                    }
                  )}`}
                  style={loadingButtonStyle}
                >
                  Sign up
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Registration));
