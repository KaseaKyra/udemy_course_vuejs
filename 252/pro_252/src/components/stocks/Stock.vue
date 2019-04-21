<template>
  <div class="col-md-4 mb-3">
    <div class="card card-success">
      <div class="card-header">
        <div class="card-title text-center">
          {{stock.name}}
          <small>(Price: {{stock.price}})</small>
        </div>
      </div>
      <div class="card-body clearfix">
        <div class="float-left">
          <input class="form-control" type="number" placeholder="Quantity" v-model="quantity"
                 :class="{danger: insufficientFund}">
        </div>
        <div class="float-right">
          <button class="btn btn-success" @click="buyStock"
                  :disabled="insufficientFund || quantity <= 0 || !Number.isInteger(+quantity)">
            {{insufficientFund ? 'Insufficient' : 'Buy'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientFund() {
        return this.quantity * this.stock.price > this.funds;
      },
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        // console.log(order);
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      },
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
