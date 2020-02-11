import AccountSettingComponent from "../../widgets/account.setting";
import React, { Component } from "react";
import clsx from "clsx";
import {
  icon_settings,
  icon_account,
  icon_profile,
  icon_changepassword
} from "../../icons";

export default class AccountSettingsPage extends Component {
  state = {
    activeTab: "tab1"
  };
  onTabChange = value => {
    this.setState({ activeTab: value });
  };

  ComponentTabHeader = ({ activeTab }) => (
    <div class="kt-portlet__head-toolbar">
      <ul
        class="nav nav-tabs nav-tabs-space-xl nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-brand"
        role="tablist"
      >
        <li class="nav-item">
          <a
            className={clsx({
              "nav-link": true,
              active: activeTab == "tab1"
            })}
            onClick={() => this.onTabChange("tab1")}
            data-toggle="tab"
            role="tab"
          >
            {icon_profile()}
            Profile
          </a>
        </li>
        <li class="nav-item">
          <a
            className={clsx({
              "nav-link": true,
              active: activeTab == "tab2"
            })}
            onClick={() => this.onTabChange("tab2")}
            data-toggle="tab"
            role="tab"
          >
            {icon_changepassword()}
            Change Password
          </a>
        </li>
        <li class="nav-item">
          <a
            className={clsx({
              "nav-link": true,
              active: activeTab == "tab3"
            })}
            onClick={() => this.onTabChange("tab3")}
            data-toggle="tab"
            role="tab"
          >
            {icon_settings()}
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
  ComponentProfile = ({ activeTab }) => (
    <div className="tab-content">
      <div
        className={clsx({
          "tab-pane": true,
          active: activeTab == "tab1"
        })}
      >
        <div class="kt-form kt-form--label-right">
          <div class="kt-form__body">
            <div class="kt-section kt-section--first">
              <div class="kt-section__body">
                <div class="row">
                  <label class="col-xl-3"></label>
                  <div class="col-lg-9 col-xl-6">
                    <h3 class="kt-section__title kt-section__title-sm">
                      Customer Info:
                    </h3>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-xl-3 col-lg-3 col-form-label">Avatar</label>
                  <div class="col-lg-9 col-xl-6">
                    <div
                      class="kt-avatar kt-avatar--outline kt-avatar--circle-"
                      id="kt_user_edit_avatar"
                    >
                      <div
                        class="kt-avatar__holder"
                        style={{
                          backgroundImage: "url(/media/users/300_25.jpg)"
                        }}
                      ></div>
                      <label
                        class="kt-avatar__upload"
                        data-toggle="kt-tooltip"
                        title=""
                        data-original-title="Change avatar"
                      >
                        <i class="fa fa-pen"></i>
                        <input
                          type="file"
                          name="profile_avatar"
                          accept=".png, .jpg, .jpeg"
                        />
                      </label>
                      <span
                        class="kt-avatar__cancel"
                        data-toggle="kt-tooltip"
                        title=""
                        data-original-title="Cancel avatar"
                      >
                        <i class="fa fa-times"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-xl-3 col-lg-3 col-form-label">
                    First Name
                  </label>
                  <div class="col-lg-9 col-xl-6">
                    <input class="form-control" type="text" value="Liu" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-xl-3 col-lg-3 col-form-label">
                    Last Name
                  </label>
                  <div class="col-lg-9 col-xl-6">
                    <input class="form-control" type="text" value="Zhang" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-xl-3 col-lg-3 col-form-label">
                    Company Name
                  </label>
                  <div class="col-lg-9 col-xl-6">
                    <input class="form-control" type="text" value="Loop Inc." />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-xl-3 col-lg-3 col-form-label">
                    Contact Phone
                  </label>
                  <div class="col-lg-9 col-xl-6">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="la la-phone"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        value="+8613020000000"
                        placeholder="Phone"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <span class="form-text text-muted">
                      We'll use this phone number for contacting you.
                    </span>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-xl-3 col-lg-3 col-form-label">
                    Email Address
                  </label>
                  <div class="col-lg-9 col-xl-6">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="la la-at"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        value="liuzhang@qq.com"
                        placeholder="Email"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group form-group-last row">
                  <label class="col-xl-3 col-lg-3 col-form-label">
                    Company Site
                  </label>
                  <div class="col-lg-9 col-xl-6">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        value="loop"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text">.com</span>
                      </div>
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
  ComponentChangePassword = ({ activeTab }) => (
    <div className="tab-content">
      <div
        className={clsx({
          "tab-pane": true,
          active: activeTab == "tab2"
        })}
      >
        <div class="kt-form kt-form--label-right">
          <div class="kt-form__body">
            <div class="kt-section kt-section--first">
              <div class="kt-section__body">
                <div class="row">
                  <label class="col-xl-3"></label>
                  <div class="col-lg-9 col-xl-6">
                    <h3 class="kt-section__title kt-section__title-sm">
                      Change Or Recover Your Password:
                    </h3>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-xl-3 col-lg-3 col-form-label">
                    Current Password
                  </label>
                  <div class="col-lg-9 col-xl-6">
                    <input
                      type="password"
                      class="form-control"
                      value=""
                      placeholder="Current password"
                    />
                    <a
                      href="#"
                      class="kt-link kt-font-sm kt-font-bold kt-margin-t-5"
                    >
                      Forgot password ?
                    </a>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-xl-3 col-lg-3 col-form-label">
                    New Password
                  </label>
                  <div class="col-lg-9 col-xl-6">
                    <input
                      type="password"
                      class="form-control"
                      value=""
                      placeholder="New password"
                    />
                  </div>
                </div>
                <div class="form-group form-group-last row">
                  <label class="col-xl-3 col-lg-3 col-form-label">
                    Verify Password
                  </label>
                  <div class="col-lg-9 col-xl-6">
                    <input
                      type="password"
                      class="form-control"
                      value=""
                      placeholder="Verify password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="kt-separator kt-separator--space-lg kt-separator--fit kt-separator--border-solid"></div>
          <div class="kt-form__actions">
            <div class="row">
              <div class="col-xl-3"></div>
              <div class="col-lg-9 col-xl-6">
                <a href="#" class="btn btn-label-brand btn-bold">
                  Save changes
                </a>
                <a href="#" class="btn btn-clean btn-bold">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  ComponentSettings = ({ activeTab }) => (
    <div className="tab-content">
      <div
        className={clsx({
          "tab-pane": true,
          active: activeTab == "tab3"
        })}
      >
        <div class="kt-form kt-form--label-right">
          <div class="kt-form__body">
            <div class="kt-section kt-section--first">
              <div class="kt-section__body">
                <div class="row">
                  <label class="col-xl-3"></label>
                  <div class="col-lg-9 col-xl-6">
                    <h3 class="kt-section__title kt-section__title-sm">
                      Global Pricing Rules :
                    </h3>
                  </div>
                </div>
                <div class="form-group form-group-sm row">
                  <label class="col-xl-3 col-lg-3 col-form-label">
                    Email Notification
                  </label>
                  <div class="col-lg-9 col-xl-6">
                    <span class="kt-switch">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    const { activeTab } = this.state;
    const ComponentTabHeader = this.ComponentTabHeader;
    const ComponentProfile = this.ComponentProfile;
    const ComponentSettings = this.ComponentSettings;
    const ComponentChangePassword = this.ComponentChangePassword;

    return (
      <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
        <div className="kt-portlet kt-portlet--tabs">
          <div className="kt-portlet__head">
            <ComponentTabHeader activeTab={activeTab} />
          </div>
          <div className="kt-portlet__body">
            <ComponentProfile activeTab={activeTab} />
            <ComponentChangePassword activeTab={activeTab} />
            <ComponentSettings activeTab={activeTab} />
          </div>
        </div>
      </div>
    );
  }
}
