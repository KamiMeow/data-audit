<template>
  <v-toolbar class="toolbar app fixed" dark>
    НГД
    <v-spacer />
    <v-toolbar-items>
      <v-btn depressed class="mx-3" to="/">Общее</v-btn>
      <v-btn depressed class="mx-3" to="/companies">Компании</v-btn>
      <v-btn depressed class="mx-3" to="/dependencies">Зависимость</v-btn>
      <v-btn depressed class="mx-3" to="/prognose">Прогнозирование</v-btn>
      <!-- <v-btn depressed class="mx-3" to="/n-tab">N-вкладка</v-btn> -->
    </v-toolbar-items>
  </v-toolbar>
</template>

<style>
  .toolbar {
    max-height: 64px;
    width: 100%;
    position: fixed;
    z-index: 1000;
  }
  .toolbar,
  .toolbar .v-btn {
    background-color: #0b0b0b !important;
  }
  .toolbar .v-toolbar__content {
    padding-right: 0 !important;
  }
  .toolbar .v-btn--active:before {
    background-color: inherit !important;
    opacity: 1 !important;
  }
</style>
