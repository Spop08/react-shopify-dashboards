/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { toAbsoluteUrl } from "../../_metronic/utils/utils";
import PortletHeaderDropdown from "../partials/content/CustomDropdowns/PortletHeaderDropdown";

export default function BestSellers() {
  return (
    <>
      <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Let's get started</h3>
          </div>
          {/* <div id="chrome-circles" class="-flex -flex-middle in-row">
            <div class="circle-color circle-sm color-success"></div>
            <div class="circle-color circle-sm color-info"></div>
            <div class="circle-color circle-sm color-info"></div>
            <div class="circle-color circle-sm color-info"></div>{" "}
            <h3 class="-secondary-text-color -margin-left-xs">
              <span>1</span>/4 Completed
            </h3>
          </div> */}
        </div>
        <div className="kt-portlet__body">
          <div className="kt-widget5">
            <div className="kt-widget5__item ">
              <div className="kt-widget5__content">
                <div className="kt-widget5__pic">
                  <img
                    alt=""
                    className="kt-widget7__img"
                    src={toAbsoluteUrl("/media/products/product6.jpg")}
                  />
                </div>
                <div className="kt-widget5__section">
                  <p className="kt-widget5__title">
                    Create or connect your Shopify store
                  </p>
                  <p className="kt-widget5__desc">
                    In order to start selling you have to have a Shopify store.
                    Start your free trial.
                  </p>
                </div>
              </div>
              <div className="kt-widget5__content"></div>
            </div>

            <div className="kt-widget5__item ">
              <div className="kt-widget5__content">
                <div className="kt-widget5__pic">
                  <img
                    alt=""
                    className="kt-widget7__img"
                    src={toAbsoluteUrl("/media/products/product11.jpg")}
                  />
                </div>
                <div className="kt-widget5__section">
                  <p className="kt-widget5__title">Add your first product</p>
                  <p className="kt-widget5__desc">
                    Find product that you want to sell in your store.
                  </p>
                </div>
              </div>
              <div className="kt-widget5__content"></div>
            </div>
            <div className="kt-widget5__item ">
              <div className="kt-widget5__content">
                <div className="kt-widget5__pic">
                  <img
                    alt=""
                    className="kt-widget7__img"
                    src={toAbsoluteUrl("/media/products/product18.jpg")}
                  />
                </div>
                <div className="kt-widget5__section">
                  <p className="kt-widget5__title">Go live</p>
                  <p className="kt-widget5__desc">
                    It's a very exciting step! Check some important things to do
                    before you go live.
                  </p>
                </div>
              </div>
              <div className="kt-widget5__content"></div>
            </div>

            <div className="kt-widget5__item ">
              <div className="kt-widget5__content">
                <div className="kt-widget5__pic">
                  <img
                    alt=""
                    className="kt-widget7__img"
                    src={toAbsoluteUrl("/media/products/product14.jpg")}
                  />
                </div>
                <div className="kt-widget5__section">
                  <p className="kt-widget5__title">Make a sale</p>
                  <p className="kt-widget5__desc">
                    Here are some ideas that will help you make your first sale
                    faster.
                  </p>
                </div>
              </div>
              <div className="kt-widget5__content"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
