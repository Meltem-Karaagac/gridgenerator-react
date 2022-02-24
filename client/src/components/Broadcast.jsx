/* eslint-disable react/prop-types */
import React from 'react';

function Broadcast(props) {
  const {
    handleFormSubmit, handleInputChange, textareaValue,
    countryType, gridType, showTags, showBrand, showKlarna,
    products, badges, setBadge, certonaTag,
  } = props;
  return (
    <div className="rows">
      <h2>Product Information</h2>
      <div className="columns">
        <form onSubmit={handleFormSubmit} id="linkgens">
          <div id="country">
            <label htmlFor="country-us">
              <input type="radio" id="country-us" name="countryType" value="us" onChange={handleInputChange} checked={countryType === 'us'} />
              {' '}
              US
            </label>
            <label htmlFor="country-ca">
              <input type="radio" id="country-ca" name="countryType" value="ca" onChange={handleInputChange} checked={countryType === 'ca'} />
              {' '}
              Canada EN
            </label>
            <label htmlFor="country-ca-fr">
              <input type="radio" id="country-ca-fr" name="countryType" value="caFR" onChange={handleInputChange} checked={countryType === 'caFR'} />
              {' '}
              Canada FR
            </label>
          </div>
          <div>
            <p>Paste your HTML links here, one each line:</p>
            <textarea className="links" id="links" name="textareaValue" value={textareaValue} onChange={handleInputChange} />
          </div>
          <input type="submit" value="Submit" id="submit" />
        </form>
        <div className="toolbar">
          <div className="columns">
            <div id="typeofgrid">
              <h3>Grid Type</h3>
              <label htmlFor="oneup">
                <input type="radio" id="oneup" name="gridType" value="oneup" onChange={handleInputChange} checked={gridType === 'oneup'} />
                {' '}
                1up grid
              </label>
              <label htmlFor="oneupnew">
                <input type="radio" id="oneupnew" name="gridType" value="oneupnew" onChange={handleInputChange} checked={gridType === 'oneupnew'} />
                {' '}
                1up
                {' '}
                <span className="newtag">NEW</span>
                {' '}
                grid
              </label>
              <label htmlFor="twobyfour">
                <input type="radio" id="twobyfour" name="gridType" value="twobyfour" onChange={handleInputChange} checked={gridType === 'twobyfour'} />
                {' '}
                2x4 grid
              </label>
              <label htmlFor="twobyfournew">
                <input type="radio" id="twobyfournew" name="gridType" value="twobyfournew" onChange={handleInputChange} checked={gridType === 'twobyfournew'} />
                {' '}
                2x4
                {' '}
                <span className="newtag">NEW</span>
                {' '}
                grid
              </label>
              <label htmlFor="threebytwonew">
                <input type="radio" id="threebytwonew" name="gridType" value="threebytwonew" onChange={handleInputChange} checked={gridType === 'threebytwonew'} />
                {' '}
                3x2
                {' '}
                <span className="newtag">NEW</span>
                {' '}
                grid
              </label>
              <label htmlFor="ctwobyfour">
                <input type="radio" id="ctwobyfour" name="gridType" value="ctwobyfour" onChange={handleInputChange} checked={gridType === 'ctwobyfour'} />
                {' '}
                Certona 2x4 grid
              </label>
              <label htmlFor="cthreebyone">
                <input type="radio" id="cthreebyone" name="gridType" value="cthreebyone" onChange={handleInputChange} checked={gridType === 'cthreebyone'} />
                {' '}
                Certona 3x1 grid
              </label>
              {gridType === 'ctwobyfour' || gridType === 'cthreebyone' || gridType === 'cthreebyoneca'
                ? (
                  <label htmlFor="certonatag">
                    Tag:
                    {' '}
                    <input type="text" id="certonatag" name="certonaTag" value={certonaTag} onChange={handleInputChange} />
                  </label>
                )
                : (
                  <label />
                )}
            </div>
            <div id="checkboxes">
              <h3>Info</h3>
              <label htmlFor="showTags">
                <input type="checkbox" id="showTags" name="showTags" checked={showTags} onChange={handleInputChange} />
                {' '}
                Show Tags
              </label>
              <label htmlFor="showBrand">
                <input type="checkbox" id="showBrand" name="showBrand" checked={showBrand} onChange={handleInputChange} />
                {' '}
                Include Brand Name
              </label>
              <label htmlFor="showKlarna">
                <input type="checkbox" id="showKlarna" name="showKlarna" checked={showKlarna} onChange={handleInputChange} />
                {' '}
                Include Klarna Price
              </label>
            </div>
          </div>
          <div className="columns">
            <div id="badges">
              <h3>Badges</h3>
              <div className="badge-labels">
                {badges.map((badge, badgeIdx) => {
                  const id = `badge${badgeIdx}`;
                  return (
                    <label htmlFor={id} key={badge.name}>
                      {badge.name}
                    </label>
                  );
                })}
              </div>
              <ul>
                {products.map((product, index) => {
                  const name = `product${index}badge`;
                  return (
                    <React.Fragment key={product.skuId}>
                      <div>
                        <li key={product.skuId}>
                          <b>
                            Pick
                            {' '}
                            {index + 1}
                          </b>
                          :
                          {' '}
                          {product.brandName}
                        </li>
                        <ul>
                          {badges.map((badge, badgeIdx) => {
                            const id = `product${index}badge${badgeIdx}`;
                            return (
                              <li key={product.skuId + badge.name}>
                                <label htmlFor={id}>
                                  <input type="radio" id={id} name={name} checked={product.badge.name === badge.name} onChange={() => setBadge(index, badge)} />
                                  {/* {badge.name} */}
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Broadcast;
