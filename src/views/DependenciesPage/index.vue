<template>
  <v-layout align-center justify-space-between wrap class="mt-5 pa-10">
    <v-flex xs12 class="display-1 font-weight-light">Факторный анализ доходов российской бюджетной системы</v-flex>
    <v-flex xs5>
      <dependencies-chart />
    </v-flex>
    <v-flex xs7 class="pl-12">
      <v-img :src="require('@/assets/table.jpg')"  />
    </v-flex>

  </v-layout>
</template>

<script>
import DependenciesChart from '@/components/DependenciesChart';

const headers = [
  { text: 'Доходы', value: 'income' },
  { text: 'Форма/Фактор', value: 'form' },
  { text: 'Цена нефти', value: 'price' },
  { text: 'Курс доллара', value: 'course' },
  { text: 'ИПЦ', value: 'ipc' },
  { text: 'Реальный ВВП', value: 'vvp' },
  { text: 'Прочие факторы', value: 'factors' },
];

const items = [
  {
    income: 'Федеральный бюджет',
    
  }
]

export default {
  name: 'DependenciesPage',
  components: {
    DependenciesChart,
  },
  data: () => ({
    headers,
  }),
};
</script>
