/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { connect } from "react-redux";
import HeaderDropdownToggle from "../content/CustomDropdowns/HeaderDropdownToggle";

class UserProfile extends React.Component {
  render() {
    const { showAvatar, showBadge } = this.props;

    return (
      <Dropdown
        className="kt-header__topbar-item kt-header__topbar-item--user"
        drop="down"
        alignRight
      >
        <Dropdown.Toggle
          as={HeaderDropdownToggle}
          id="dropdown-toggle-user-profile"
        >
          <div className="kt-header__topbar-user">
            {showAvatar && (
              <img
                alt="Pic"
                src="data:image/jpeg;base64,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"
              />
            )}

            {showBadge && (
              <span className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold">
                {/* TODO: Should get from currentUser */}
                John Doe
              </span>
            )}
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
          {/** ClassName should be 'dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl' */}

          <div className="kt-notification">
            <a className="kt-notification__item" href="/app/account-settings">
              <div className="kt-notification__item-icon">
                <i className="flaticon2-calendar-3 kt-font-success" />
              </div>
              <div className="kt-notification__item-details">
                <div className="kt-notification__item-title kt-font-bold">
                  My Profile
                </div>
                <div className="kt-notification__item-time">
                  Account settings and more
                </div>
              </div>
            </a>
            <a className="kt-notification__item" href="/app/my-products">
              <div className="kt-notification__item-icon">
                <i className="flaticon2-mail kt-font-warning" />
              </div>
              <div className="kt-notification__item-details">
                <div className="kt-notification__item-title kt-font-bold">
                  My Products
                </div>
                <div className="kt-notification__item-time">
                  Products imported to your store
                </div>
              </div>
            </a>
            <div className="kt-notification__custom">
              <Link
                to="/auth/logout"
                className="btn btn-label-brand btn-sm btn-bold"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});

export default connect(mapStateToProps)(UserProfile);
