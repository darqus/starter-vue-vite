<template>
  <p
    v-text="storeCounter.count"
    class="count"
  />
</template>

<script setup lang="ts">
import { useCounterStore } from '../../stores/counter'

const storeCounter = useCounterStore()
</script>
