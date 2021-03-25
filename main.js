var app = new Vue ({
  el: "#root",
  data: {
    index: 0,
    immagini: [
      "https://yourgzee.com/wp-content/uploads/2020/07/funny-animals-lede.jpg",
      "https://www.rd.com/wp-content/uploads/2020/11/GettyImages-899747778-e1606165481516.jpg",
      "https://i.natgeofe.com/n/c0e0a134-3e97-4b8f-9f7b-9d11f5e1bf02/comedy-wildlife-awards-squirel-stop.jpg?w=636&h=475",
      "https://static.euronews.com/articles/stories/04/97/98/10/1440x810_cmsv2_9446b8f9-0634-5f1d-94ab-f3fa5fef911a-4979810.jpg"
    ]
  },
  // created: function () {
  //   setInterval(function (next) {
  //     this.next()
  //   }, 3000)
  // },
  methods: {

    next: function () {
      if (this.index == this.immagini.length - 1) {
        this.index = 0
      } else {
      this.index++
      }
    },

    prev: function () {
      if (this.index == 0) {
        this.index = this.immagini.length - 1
      } else {
        this.index--
      }
    },

    dotSelect: function (index) {
      this.index = index
    }

  }
})
