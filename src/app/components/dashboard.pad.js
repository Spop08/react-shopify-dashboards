/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./dashboard.pad.scss";
import { connect } from "react-redux";

const DashboardPad = props => {
  const [showModal, setShowModal] = useState(false);
  const [stateConnect, setStateConnect] = useState(false);
  const [storeName, setStoreName] = useState("uds-dropshippingstore");

  const handleChange = event => {
    const store = event.target.value;
    store === "" ? setStateConnect(true) : setStateConnect(false);
    setStoreName(store);
  };
  const handleConnect = () => {
    // const url = process.env.REACT_APP_BACKEND_ENDPOINT + "/shopify";
    const backend_url = "https://7896f79f.ngrok.io/shopify";
    const email = props.email;

    window.location = `${backend_url}?shop=${storeName}.myshopify.com&email=${email}`;
  };

  const isConnected = props.store;
  return (
    <>
      <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Let's get started</h3>
          </div>
        </div>
        <div className="kt-portlet__body">
          <div className="kt-widget5">
            <div className="kt-widget5__item ">
              <div className="kt-widget5__content">
                <div className="kt-widget5__section step-section">
                  <span
                    className={
                      "step-page-onboarding__badge step-badge" +
                      (isConnected
                        ? " step-badge-success"
                        : " step-badge-primary")
                    }
                  >
                    Step 1
                  </span>

                  <div>
                    <p className="kt-widget5__title">
                      Create or connect your Shopify store
                    </p>
                    <p className="kt-widget5__desc">
                      In order to start selling you have to have a Shopify
                      store. Start your free trial.
                    </p>
                  </div>
                </div>
              </div>
              <div className="kt-widget5__content">
                {!isConnected && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setShowModal(true)}
                  >
                    Connect
                  </button>
                )}
              </div>
            </div>

            <div className="kt-widget5__item ">
              <div className="kt-widget5__content">
                <div className="kt-widget5__section step-section">
                  <span className="step-page-onboarding__badge step-badge step-badge-primary">
                    Step 2
                  </span>
                  <div>
                    <p className="kt-widget5__title">Add your first product</p>
                    <p className="kt-widget5__desc">
                      Find product that you want to sell in your store.
                    </p>
                  </div>
                </div>
              </div>
              <div className="kt-widget5__content"></div>
            </div>
            <div className="kt-widget5__item ">
              <div className="kt-widget5__content">
                <div className="kt-widget5__section step-section">
                  <span className="step-page-onboarding__badge step-badge step-badge-primary">
                    Step 3
                  </span>
                  <div>
                    <p className="kt-widget5__title">Go live</p>
                    <p className="kt-widget5__desc">
                      It's a very exciting step! Check some important things to
                      do before you go live.
                    </p>
                  </div>
                </div>
              </div>
              <div className="kt-widget5__content"></div>
            </div>

            <div className="kt-widget5__item ">
              <div className="kt-widget5__content">
                <div className="kt-widget5__section step-section">
                  <span className="step-page-onboarding__badge step-badge step-badge-primary">
                    Step 4
                  </span>
                  <div>
                    <p className="kt-widget5__title">Make a sale</p>
                    <p className="kt-widget5__desc">
                      Here are some ideas that will help you make your first
                      sale faster.
                    </p>
                  </div>
                </div>
              </div>
              <div className="kt-widget5__content"></div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create or Connect a Shopify store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-store-connect">
            <img
              src="https://cdn.oberlo.com/img/shopify-logo.svg"
              alt="Shopify logo."
              className="shopify-logo"
            />
            <h2 className="h2-connect-store">Connect a store</h2>
            <label className="label-connect-desc">
              Enter your existing Shopify store URL below and you'll be
              redirected to Shopify to connect your account to Oberlo.
            </label>
            <label className="label-store-url">Your Shopify store URL</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="store-name"
                value={storeName}
                onChange={handleChange}
              />
              <div className="input-group-append">
                <span className="input-group-text">.myshopify.com</span>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-shopify-connect"
                disabled={stateConnect}
                onClick={handleConnect}
              >
                Connect
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

function mapStateToProps(state) {
  return {
    email: state.user.info.email,
    store: state.user.info.store,
    token: state.auth.authToken
  };
}
export default connect(mapStateToProps)(DashboardPad);
