<script setup lang="ts">
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>

<template>
  <Header></Header>

  <main class="not-found__main">
    <div class="not-found__content">
      <h1 class="not-found__title">404</h1>
      <h2 class="not-found__subtitle">Página não encontrada</h2>
      <p class="not-found__text">
        Desculpe, não conseguimos encontrar a página que você está procurando.
      </p>
      <router-link to="/" class="not-found__button"> Voltar para o início </router-link>
    </div>
  </main>

  <Footer></Footer>
</template>

<style scoped>
.not-found__main {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-blue-bg);
  padding: 2rem;
  text-align: center;
}

.not-found__content {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.not-found__title {
  font-size: 6rem;
  font-weight: 200;
  color: var(--dark-green);
  line-height: 1;
  margin: 0;
}

.not-found__subtitle {
  font-size: 2rem;
  color: var(--dark-blue);
  margin: 0;
}

.not-found__text {
  color: #1b1b1b;
  font-size: 1.1rem;
}

.not-found__button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--green);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.not-found__button:hover {
  background-color: var(--dark-green);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .not-found__main {
    min-height: 95dvh;
  }

  .not-found__title {
    font-size: 4rem;
  }

  .not-found__subtitle {
    font-size: 1.5rem;
  }
}
</style>
