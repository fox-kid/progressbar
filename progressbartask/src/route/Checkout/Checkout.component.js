/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import ContentWrapper from "SourceComponent/ContentWrapper/ContentWrapper.component";

import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ProgressBar from "../../component/ProgressBar/ProgressBar.component";

/** @namespace Route/Checkout/Component */
export class Checkout extends SourceCheckout {
  render() {
    return (
      <main block="Checkout">
        <ProgressBar
          steps={this.stepMap}
          params={this.props.match.params.step}
        />
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
