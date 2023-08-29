function invoice(products, bonus) {
  let subtotalProduct = products
    .map(
      (product) =>
        parseFloat(product.price) -
          parseFloat(product.price) * parseFloat(product.discount) || 0
    )
    .reduce((sum, price) => sum + price, 0);

  return {
    total: subtotalProduct - bonus,
    subTotal: subtotalProduct,
  };
}
module.exports = {
  invoice,
};
