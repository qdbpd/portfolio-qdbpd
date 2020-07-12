import '../css/shop1.scss'

if (module.hot) {
  module.hot.accept(console.error)
  // HMRに失敗した時に強制リロードするs
  module.hot.dispose(() => {
    window.location.reload()
  });
}

document.addEventListener('DOMContentLoaded', () => {
  new Shop1()
})

class Shop1 {
  constructor() {

    this.init()
  }

  /**
   * init
   */
  init() {
    console.log('shop1')
  }
}
