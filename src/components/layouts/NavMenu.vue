<script setup lang="ts">
import { ref, watch } from 'vue'

// avisa ao 'pai' quando o menu abre/fecha
const emit = defineEmits(['menu-toggle'])

const isMenuOpen = ref(false) // menu principal
const isServicesOpen = ref(false) // dropdown de serviços

// avisa ao header que o menu abriu/fechou
watch(isMenuOpen, (newValue) => {
  emit('menu-toggle', newValue)
})

// abrir e fechar menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (!isMenuOpen.value) {
    isServicesOpen.value = false
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  isServicesOpen.value = false
}

// dropdown de serviços
const toggleServices = () => {
  isServicesOpen.value = !isServicesOpen.value
}
</script>

<template>
  <div class="nav-wrapper">
    <!-- Hamburger Button -->
    <button
      class="hamburger"
      @click="toggleMenu"
      aria-label="Toggle navigation"
      :aria-expanded="isMenuOpen"
    >
      <span class="bar" :class="{ 'bar--open': isMenuOpen }"></span>
      <span class="bar" :class="{ 'bar--open': isMenuOpen }"></span>
      <span class="bar" :class="{ 'bar--open': isMenuOpen }"></span>
    </button>

    <nav class="nav" :class="{ 'nav--open': isMenuOpen }">
      <ul class="nav-list">
        <li><router-link class="nav-link" to="/" @click="closeMenu">Home</router-link></li>
        <li>
          <router-link class="nav-link" to="/sobre" @click="closeMenu">Sobre mim</router-link>
        </li>

        <li class="dropdown" :class="{ 'dropdown--open': isServicesOpen }">
          <button
            type="button"
            class="trigger nav-link"
            aria-haspopup="true"
            :aria-expanded="isServicesOpen"
            @click="toggleServices"
          >
            Serviços
            <svg
              class="caret"
              :class="{ 'caret--rotate': isServicesOpen }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <ul class="menu" role="menu">
            <li role="menuitem">
              <router-link to="/servicos" @click="closeMenu">Todos</router-link>
            </li>
            <li role="menuitem">
              <router-link to="/servicos/fotos" @click="closeMenu">Fotos</router-link>
            </li>
            <li role="menuitem">
              <router-link to="/servicos/filmagens" @click="closeMenu">Filmagens</router-link>
            </li>
          </ul>
        </li>

        <li>
          <router-link class="contact-button" to="/contato" @click="closeMenu"
            >Contate-me</router-link
          >
        </li>
      </ul>
    </nav>

    <!-- Backdrop -->
    <div class="backdrop" v-if="isMenuOpen" @click="closeMenu"></div>
  </div>
</template>

<style scoped>
.nav-wrapper {
  display: flex;
  align-items: center;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
}

.bar {
  width: 100%;
  height: 2px;
  background-color: var(--dark-blue);
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  transform-origin: left;
}

/* Animação de hamburguer */
.bar--open:nth-child(1) {
  transform: rotate(45deg);
}
.bar--open:nth-child(2) {
  opacity: 0;
  width: 0;
}
.bar--open:nth-child(3) {
  transform: rotate(-45deg);
}

.nav-list {
  display: inline-flex;
  align-items: center;
  gap: 3em;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link,
.trigger {
  color: var(--light-grey);
  text-decoration: none;
  font-weight: 400;
  font-size: 0.85em;
  transition: color 0.2s;
}

.nav-link:hover,
.trigger:hover {
  opacity: 0.8;
}

.dropdown {
  position: relative;
}

.trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  line-height: inherit;
  appearance: none;
}

.caret {
  width: 14px;
  height: 14px;
  transition: transform 0.2s;
}

.menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  padding: 0.4rem;
  border-radius: 8px;
  background: var(--light-grey);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

@media (min-width: 901px) {
  .dropdown:hover > .menu,
  .dropdown:focus-within > .menu {
    display: block;
  }

  .dropdown:hover .caret {
    transform: rotate(180deg);
  }
}

.menu li {
  list-style: none;
}

.menu a {
  display: block;
  padding: 0.5rem 0.6rem;
  border-radius: 6px;
  color: var(--dark-blue);
  font-size: 0.85em;
  text-decoration: none;
}

.menu a:hover {
  background: var(--dark-blue);
}

.contact-button {
  padding: 8px 32px;
  border-radius: 50px;
  background-color: var(--dark-blue);
  color: var(--light-grey);
  font-weight: 600;
  text-decoration: none;
  font-size: 0.85em;
  transition: filter 0.2s ease-in-out;
}

.contact-button:hover {
  filter: brightness(1.1);
}

@media (max-width: 900px) {
  .hamburger {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    max-width: 300px;
    height: 100vh;
    background-color: var(--blue);
    padding: 80px 24px 24px;
    transition: right 0.3s ease-in-out;
    z-index: 90;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.15);
    overflow-y: auto;
  }

  .nav--open {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5em;
    width: 100%;
  }

  .nav-link,
  .trigger {
    font-size: 0.85em;
    width: 100%;
    justify-content: space-between;
    padding: 0.5em 0;
  }

  .menu {
    position: static;
    box-shadow: none;
    background: transparent;
    padding-left: 1em;
    display: none;
    width: 100%;
    margin-top: 0.5em;
  }

  .dropdown--open .menu {
    display: block;
  }

  .caret--rotate {
    transform: rotate(180deg);
  }

  .menu a {
    color: rgba(245, 245, 245, 0.8);
    padding: 0.5em 0;
  }

  .menu a:hover {
    background: transparent;
    color: var(--light-grey);
  }

  .contact-button {
    width: 100%;
    text-align: center;
    display: block;
    margin-top: 1em;
    border-radius: 10px;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 80;
    backdrop-filter: blur(2px);
  }

  .header__action-bar {
    background-color: transparent;
  }
}

a:hover,
a.router-link-active {
  color: var(--light-blue);
}

.contact-button:hover,
.contact-button.router-link-active {
  color: var(--light-grey);
}
</style>
