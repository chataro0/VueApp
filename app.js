var items = [
    {
        name: "鉛筆",
        price: 300,
        quantity: 0
    },
    {
        name: "ノート",
        price: 400,
        quantity: 0
    },
    {
        name: "消しゴム",
        price: 500,
        quantity: 0
    }
]
var vm = new Vue({
    el: '#app',
    // template: "<p>{{ totalPrice }}</p>",
    data: {
        items: items
    },
    filters: {
        numberWithDelimiter: function(value){
            if (!value) {
                return "0"
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1,")
        }
    },
    methods: {
        doBuy: function(event){
            console.log(event)
            alert(this.totalPriceWithTax + "円のお買い上げ！")
            this.items.forEach(function(item){
                item.quantity = 0
            })
        }
    },
    computed: {
        totalPrice: function(){
            return this.items.reduce(function (sum, item){
                return sum + item.price * item.quantity
            }, 0)
        },
        totalPriceWithTax: function(){
            return Math.floor(this.totalPrice * 1.08)
        },
        canBuy: function(){
            return this.totalPrice >= 1000
        },
        errorMessageStyle: function(){
            return {
                border: this.canBuy ? "": "1px solid red",
                color: this.canBuy ? "": "red"
            }
        },
        c_message: function(){
            var timestamp = Date.now()
            return "computed message: " + timestamp
        }
    }
})
// vm.$watch(function(){
//     return this.items[0].quantity
// }, function(quantity){
//     console.log(quantity)
// })
window.vm = vm