import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const data = ref(null)
  const menuTime = ref(null)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  const fetchData = async (param)=>{
    const dataTime = {
      "breakfast":"/data-breakfast",
      "lunch":"/data-lunch",
      "dinner":"/data-dinner"
    }

    try {
      const result = await fetch(`localhost:3000/${dataTime[param]}`)
      data.value = result
    } catch (error) {
      console.log(error)
    }
  }

  return { data, menuTime, fetchData}
})
