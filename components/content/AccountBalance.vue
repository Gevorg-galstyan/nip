<template>
  <div class="balance bg-white d-flex align-items-center justify-content-between">
    <div class="amount-card">
      <h5 class="amount-title">Баланс</h5>

      <p class="amount m-0">2.405 руб</p>
    </div>

    <div class="actions">
      <v-btn block class="text-white" color="#0097EF" small>
        <v-icon>mdi-wallet</v-icon>

        Пополнить
      </v-btn>

      <v-btn class="text-button mt-3" color="#0097EF" small text> История операций</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountBalance',
};
</script>

<style scoped>
.amount-title {
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 21px;
}

.amount {
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
}

.balance {
  padding: 6px 10px;
}

.amount-card {
  margin-right: 80px;
}

.actions button {
  padding: 16px !important;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.3px;
  text-transform: none;
}

button.text-button {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  height: auto !important;
  min-width: auto !important;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 21px;
  color: #1565c0 !important;
}
</style>
