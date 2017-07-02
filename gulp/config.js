const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  vendor: 'node_modules',
  get vendorStyles() {
    return [
      `${this.vendor}/sanitize.css/sanitize.css`,
      `${this.vendor}/flexboxgrid/dist/flexboxgrid.css`,
    ]
  },

  source: 'src',
  get pagesSource() {
    return `${this.source}/pages/**/*.hbs`
  },
  get layoutsSource() {
    return `${this.source}/layouts`
  },
  get partialsSource() {
    return `${this.source}/partials`
  },
  get imagesSource() {
    return `${this.source}/images/**/*.{jpg,png,jpeg}`
  },
  get stylesSource() {
    return [
      `${this.source}/styles/**/*.scss`,
      `!${this.source}/styles/**/_*.scss`,
    ]
  },

  dest: 'public',
  get stylesDest() {
    return `${this.dest}/styles`
  },
  get imagesDest() {
    return `${this.dest}/images`
  },

  env: {
    prod: isProd,
  },
}
