import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('test', () => {
  const text = ref("this is text")

  return { text }
})
