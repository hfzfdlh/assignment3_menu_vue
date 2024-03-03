import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'


export const useMenuStore = defineStore('menu', () => {
  const data = ref(null)
  const menuTime = ref(null)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  const router = useRouter()

  const URL = 'http://localhost:3000'

  const fetchData = async (param)=>{
    const dataTime = {
      "breakfast":"/data-breakfast",
      "lunch":"/data-lunch",
      "dinner":"/data-dinner"
    }

    try {
      const result = await fetch(`${URL}${dataTime[param]}`)
      const dataJson = await result.json()
      data.value = dataJson
    } catch (error) {
      console.log(error)
    }
  }

  const postNewMenu = async (data)=>{
    try {
      const result = await fetch(`${URL}/add-menu`,{
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      router.push('/menu')
      
    } catch (error) {
      console.log(error)
    }
  }

  return { data, menuTime, fetchData, postNewMenu}
})
