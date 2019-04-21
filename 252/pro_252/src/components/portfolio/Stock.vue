<template>
  <div class="col-md-4 mb-3">
    <div class="card card-info">
      <div class="card-header">
        <div class="card-title text-center">
          {{stock.name}}
          <small>(Price: {{stock.price}} Quantity: {{stock.quantity}})</small>
        </div>
      </div>
      <div class="card-body clearfix">
        <div class="float-left">
          <input class="form-control" type="number" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientQuantity}">
        </div>
        <div class="float-right">
          <button class="btn btn-success" @click="sellStock"
                  :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(+quantity)">
            {{insufficientQuantity ? 'Not enough' : 'Sell'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      },
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.placeSellOrder(order);
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
