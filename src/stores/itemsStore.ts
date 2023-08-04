import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Item } from '@/model/item.model'

export type RootState = {
  items: Item[]
  id: number
}

export const useItemsStore = defineStore('items', {
  state: () =>
    ({
      items: [],
      id: 0
    }) as RootState,
  actions: {
    addItem(item: string) {
      this.items.push({ item: item, id: this.id++, completed: false })
    },
    deleteItem(id: number) {
      console.log('hehr')
      this.items = this.items.filter((item) => {
        return item.id !== id
      })
      console.log('items', this.items)
    }
  }
})
