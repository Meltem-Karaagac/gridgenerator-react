export default function template1up(products, showTags, showBrand) {
  return `<!-- grid gen -->
  <table width="700" border="0" cellspacing="0" cellpadding="0" align="center">
    <tr>
      <td style="padding-top: 50px;">
        <table width="500" border="0" cellspacing="0" cellpadding="0" align="center">
  ${products.map((product) => {
    const {
      skuId,
      imageLink,
      productName,
      textLink,
      tags,
      brandName,
      price,
      valuePrice,
    } = product;
    return (`<!-- next pick -->
          <tr>
            <td align="center">
              ${imageLink}
                <img alt="${productName}" border="0" height="450" src="https://www.sephora.com/sku/pbimage/${skuId}?imwidth=450" style="display:block; margin: 10px 0;" width="450">
              </a>
            </td>
          </tr>
          <tr>
            <td align="center" style="line-height:25px;padding-bottom:25px;padding-top:25px;font-family:Helvetica, Arial, sans-serif; font-size:20px;">
            ${textLink}
                ${(showTags && tags) ? `
                <span style="color:#C0143C; letter-spacing:0.1em;line-height:45px;"><b>${tags}</b></span><br/>
                ` : ''}
                <span style="letter-spacing:0.01em; color:#000000;">
                ${showBrand ? `<b>${brandName}</b><br/>` : ''}${productName}, ${price} ${valuePrice || ''}
                </span>
              </a>
            </td>
          </tr>`);
  })}
        </table>
      </td>
    </tr>
  </table>
  `;
}