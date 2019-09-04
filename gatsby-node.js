const {offers} = require('./src/source');
exports.createPages = async ({ actions: { createPage } }) => {
  
  offers.forEach(offer => {
    createPage({
      path: `/oferta-${offer.id}/`,
      component: require.resolve("./src/templates/offer.js"),
      context: { offer },
    })
  })
}
