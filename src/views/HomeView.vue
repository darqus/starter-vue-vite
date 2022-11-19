<template>
  <div class="home">
    <h1>Home</h1>
    <Counter />
    <div class="buttons">
      <button
        v-for="{ label, handler } in BUTTONS"
        :key="label"
        @click="storeCounter[handler]"
        v-text="label"
      />
    </div>
    <h3
      class="odd-even"
      v-text="storeCounter.oddOrEven"
    />
    <div>
      <h3>Edit counter:</h3>
      <input
        type="number"
        v-model="storeCounter.count"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import Counter from '@/components/counter/Counter.vue'

const storeCounter = useCounterStore()

interface IButton {
  label: string
  handler: string
}

const BUTTONS: Array<IButton> = [
  {
    label: '−',
    handler: 'decreaseCount',
  },
  {
    label: '+',
    handler: 'increaseCount',
  },
]
</script>

<style>
.home {
  display: grid;
  place-items: center;
  place-content: center;
  grid-gap: 1rem;
}

.count {
  font-size: 8rem;
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

.buttons button {
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
