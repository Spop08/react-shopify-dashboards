import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { icon_settings, icon_profile, icon_changepassword } from "../../icons";
import "./AccountSettingsPage.scss";

const AccountSettingsPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const info = useSelector(state => state.user.info);
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(info.email);
  }, [info.email]);
  const ComponentTabHeader = () => (
    <div className="kt-portlet__head-toolbar">
      <ul
        className="nav nav-tabs nav-tabs-space-xl nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-brand"
        role="tablist"
      >
        <li className="nav-item">
          <p
            className={clsx({
              "nav-link": true,
              active: activeTab === "tab1"
            })}
            onClick={() => setActiveTab("tab1")}
            data-toggle="tab"
            role="tab"
          >
            {icon_profile()}
            Profile
          </p>
        </li>
        <li className="nav-item">
          <p
            className={clsx({
              "nav-link": true,
              active: activeTab === "tab2"
            })}
            onClick={() => setActiveTab("tab2")}
            data-toggle="tab"
            role="tab"
          >
            {icon_changepassword()}
            Change Password
          </p>
        </li>
        <li className="nav-item">
          <p
            className={clsx({
              "nav-link": true,
              active: activeTab === "tab3"
            })}
            onClick={() => setActiveTab("tab3")}
            data-toggle="tab"
            role="tab"
          >
            {icon_settings()}
            Settings
          </p>
        </li>
      </ul>
    </div>
  );
  const ComponentProfile = () => {
    return (
      <div className="tab-content">
        <div
          className={clsx({
            "tab-pane": true,
            active: activeTab === "tab1"
          })}
        >
          <div className="kt-form kt-form--label-right">
            <div className="kt-form__body">
              <div className="kt-section kt-section--first">
                <div className="kt-section__body">
                  <div className="row">
                    <label className="col-xl-3"></label>
                    <div className="col-lg-9 col-xl-6">
                      <h3 className="kt-section__title kt-section__title-sm">
                        Customer Info:
                      </h3>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Avatar
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div
                        className="kt-avatar kt-avatar--outline kt-avatar--circle-"
                        id="kt_user_edit_avatar"
                      >
                        <div
                          className="kt-avatar__holder"
                          style={{
                            backgroundImage: "url(/media/users/300_25.jpg)"
                          }}
                        ></div>
                        <label
                          className="kt-avatar__upload"
                          data-toggle="kt-tooltip"
                          title=""
                          data-original-title="Change avatar"
                        >
                          <i className="fa fa-pen"></i>
                          <input
                            type="file"
                            name="profile_avatar"
                            accept=".png, .jpg, .jpeg"
                          />
                        </label>
                        <span
                          className="kt-avatar__cancel"
                          data-toggle="kt-tooltip"
                          title=""
                          data-original-title="Cancel avatar"
                        >
                          <i className="fa fa-times"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      First Name
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <input className="form-control" defaultValue="Liu" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Last Name
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Zhang"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Email Address
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="la la-at"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          value={email}
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Store Name
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          value={info.store}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-group-last row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Contact Phone
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="la la-phone"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          value="+8613020000000"
                          placeholder="Phone"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const ComponentChangePassword = () => (
    <div className="tab-content">
      <div
        className={clsx({
          "tab-pane": true,
          active: activeTab === "tab2"
        })}
      >
        <div className="kt-form kt-form--label-right">
          <div className="kt-form__body">
            <div className="kt-section kt-section--first">
              <div className="kt-section__body">
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label">
                    Current Password
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <input
                      type="password"
                      className="form-control"
                      value=""
                      placeholder="Current password"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label">
                    New Password
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <input
                      type="password"
                      className="form-control"
                      value=""
                      placeholder="New password"
                    />
                  </div>
                </div>
                <div className="form-group form-group-last row">
                  <label className="col-xl-3 col-lg-3 col-form-label">
                    Confirm Password
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <input
                      type="password"
                      className="form-control"
                      value=""
                      placeholder="Confirm password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ComponentSettings = () => {
    return (
      <div className="tab-content">
        <div
          className={clsx({
            "tab-pane": true,
            active: activeTab === "tab3"
          })}
        >
          <div className="kt-form kt-form--label-right">
            <div className="kt-form__body">
              <div className="kt-section kt-section--first">
                <div className="kt-section__body">
                  <div className="kt-rules">
                    <h3 className="pricing-rules">Global Pricing Rules :</h3>
                    <div className="d-flex">
                      <h4 className="cost-title">Product Cost </h4>
                      <span>
                        <svg className="icon-plus" viewBox="0 0 512 512">
                          <path d="m512 205l-205 0 0-205-102 0 0 205-205 0 0 102 205 0 0 205 102 0 0-205 205 0z"></path>
                        </svg>
                      </span>
                      <input
                        className="form-control form-price"
                        value={info.priceRule}
                      />
                      <span>
                        <svg className="icon-arrow" viewBox="0 0 20 20">
                          <path d="M15.92 10.38a1 1 0 0 0-.21-1.09l-4-4a1 1 0 1 0-1.42 1.42L12.6 9H5a1 1 0 1 0 0 2h7.59l-2.3 2.3a1 1 0 1 0 1.42 1.4l4-4a1 1 0 0 0 .21-.32z"></path>
                        </svg>
                      </span>
                      <h4 className="cost-title">Your Product Price </h4>
                    </div>
                  </div>

                  {/* <div className="form-group form-group-sm row">
                  <label className="col-xl-3 col-lg-3 col-form-label">
                    Email Notification
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <span className="kt-switch">
                      <label>
                        <input
                          type="checkbox"
                          checked="checked"
                          name="email_notification_1"
                        />
                        <span></span>
                      </label>
                    </span>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
      <div className="kt-portlet kt-portlet--tabs">
        <div className="kt-portlet__head">
          <ComponentTabHeader />
        </div>
        <div className="kt-portlet__body">
          <ComponentProfile />
          <ComponentChangePassword />
          <ComponentSettings />
          <div className="kt-separator kt-separator--space-lg kt-separator--fit kt-separator--border-solid"></div>
          <div className="kt-form__actions">
            <div className="row">
              <div className="col-xl-3"></div>
              <div className="col-lg-9 col-xl-6">
                <a href="/" className="btn btn-label-brand btn-bold">
                  Save changes
                </a>
                <a href="/" className="kt-ml-30 btn btn-clean btn-bold">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
