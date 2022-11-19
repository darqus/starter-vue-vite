import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)

  // getters
  const oddOrEven = computed(() => (count.value % 2 === 0 ? 'even' : 'odd'))

  // mutations
  const decreaseCount = () => {
    count.value--
  }

  const increaseCount = () => {
    count.value++
  }

  return { count, oddOrEven, decreaseCount, increaseCount }
})
