<template>
  <div class="about">
    <h1>About</h1>
    <button
      @click="storeCounter.increaseCount"
      class="counter-button"
      v-text="storeCounter.count"
    />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>

<style>
.about {
  display: grid;
  place-items: center;
  place-content: center;
  grid-gap: 1rem;
}

.counter-button {
  font-size: 8rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
