function count(_products) {
  var result = _products.filter((p) => p.isLiked).length;
  return result;
}

module.exports = count;