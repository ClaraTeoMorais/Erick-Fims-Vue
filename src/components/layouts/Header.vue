<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LogoHeader from '@/assets/imgs/logos/logo-header.svg'
import NavMenu from '@/components/layouts/NavMenu.vue'

const isHidden = ref(false) // controla se o header sobe/desaparece
const isMenuOpen = ref(false) // sabe se o menu está aberto
let lastScrollY = 0 // guarda a última posição do scroll

// função para lidar com o evento de scroll
const handleScroll = () => {
  if (isMenuOpen.value) return // se o menu estiver aberto, ñ mexe no header

  // ignora micro movimentos e evita 'tremores' no header
  const currentScrollY = window.scrollY

  if (Math.abs(currentScrollY - lastScrollY) < 10) return

  // se o usuário rolou para baixo e passou de 100px, esconde o header
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isHidden.value = true
  } else {
    // se o usuário rolou para cima, mostra o header
    isHidden.value = false
  }

  lastScrollY = currentScrollY
}

// função para lidar com a abertura/fechamento do menu
const handleMenuToggle = (isOpen: boolean) => {
  isMenuOpen.value = isOpen
  if (isOpen) {
    isHidden.value = false
  }
}

// add e remove o listener de scroll
onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="site-header" :class="{ 'site-header--hidden': isHidden }">
    <div class="container site-header__inner">
      <router-link class="flex-center" to="/">
        <img :src="LogoHeader" alt="Logo Erick Films" class="header-logo" />
      </router-link>

      <div class="header__action-bar">
        <NavMenu @menu-toggle="handleMenuToggle"></NavMenu>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 40;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease-in-out;
}

.site-header--hidden {
  transform: translateY(-100%);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
}

.brand span {
  color: var(--blue);
}

.header__action-bar {
  padding: 0.75em 0.5em 0.75em 2.25em;
  border-radius: 100px;
  background-color: var(--blue);
}

@media (max-width: 900px) {
  .header__action-bar {
    padding: 0.75em 1.25em;
  }

  .header-logo {
    height: 30px;
    width: auto;
  }

  .header__action-bar {
    padding: 0.75em 0.5em 0.75em 2.25em;
    border-radius: 100px;
    background-color: transparent;
  }
}
</style>
