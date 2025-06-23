// Store para gerenciar o estado do popup de contato
import { defineStore } from 'pinia'

export const useContactPopupStore = defineStore('contactPopup', {
  state: () => ({
    isOpen: false
  }),
  
  actions: {
    openPopup() {
      this.isOpen = true
    },
    
    closePopup() {
      this.isOpen = false
    },
    
    togglePopup() {
      this.isOpen = !this.isOpen
    }
  }
})
