<script setup lang="ts">
import LogoFooter from '@/assets/imgs/logos/logo-footer.svg'

import whatsIcon from '@/assets/imgs/icones/whatsapp.svg'
import instaIcon from '@/assets/imgs/icones/instagram.svg'
import faceIcon from '@/assets/imgs/icones/facebook.svg'
import xIcon from '@/assets/imgs/icones/X.svg'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-container flex-column">
      <div class="footer__content flex-column">
        <div class="footer__logo-nav">
          <router-link to="/">
            <img :src="LogoFooter" alt="Logo Erick Films" class="footer-logo" />
          </router-link>

          <nav class="footer__nav-media">
            <ul class="media__list">
              <li>
                <a
                  class="media__icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=5583996550159"
                >
                  <img :src="whatsIcon" alt="Whatsapp" />
                </a>
              </li>

              <li>
                <a
                  class="media__icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/erickrodriguesfotografia"
                >
                  <img :src="instaIcon" alt="Instagram" />
                </a>
              </li>

              <li>
                <a
                  class="media__icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/erodriguesfotografia"
                >
                  <img :src="faceIcon" alt="Facebook" />
                </a>
              </li>

              <li>
                <a
                  class="media__icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/eeericrod"
                >
                  <img :src="xIcon" alt="X" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <nav class="footer__nav-pages">
          <ul>
            <li><router-link class="nav-link" to="/">Home</router-link></li>
            <li>
              <router-link class="nav-link" to="/sobre">Sobre mim</router-link>
            </li>
            <li><router-link class="nav-link" to="/servicos">Serviços</router-link></li>
            <li><router-link class="nav-link" to="/contato">Contate-me</router-link></li>
          </ul>
        </nav>

        <nav class="footer__nav-media_responsivo">
          <ul class="media__list">
            <li>
              <a
                class="media__icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=5583996550159"
              >
                <img :src="whatsIcon" alt="Whatsapp" />
              </a>
            </li>

            <li>
              <a
                class="media__icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/erickrodriguesfotografia"
              >
                <img :src="instaIcon" alt="Instagram" />
              </a>
            </li>

            <li>
              <a
                class="media__icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/erodriguesfotografia"
              >
                <img :src="faceIcon" alt="Facebook" />
              </a>
            </li>

            <li>
              <a
                class="media__icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/eeericrod"
              >
                <img :src="xIcon" alt="X" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <hr class="footer__divider" />

      <p class="footer__bottom">Copyright © 2025 | Fotógrafo e Filmmaker em João Pessoa - PB</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  width: 100vw;
  padding: 3.5rem 0 2rem;
  margin-top: auto;

  background-color: var(--blue);
  color: var(--light-grey);
  border-radius: 40px 40px 0 0;
}

.container {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 0 1.5rem;
  flex: 1;
}

.footer__logo-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5rem;
}

.footer__nav-media_responsivo {
  display: none;
}

.footer-container li {
  display: inline;
}

.media__list {
  display: flex;
  gap: 1rem;
}

.media__icon {
  display: block;
  width: 2.3rem;
  height: 2.3rem;
  background-color: var(--dark-blue);
  border-radius: 50%;
  padding: 0.65rem;
}

.footer__nav-pages li {
  margin-right: 1rem;
}

.footer__nav-pages a {
  color: var(--light-grey);
  transition: color 0.2s ease;
  font-size: 0.95rem;
}

.footer__nav-pages a:hover,
.footer__nav-pages a.router-link-active {
  color: var(--light-blue);
}

.footer__divider {
  border: 1px solid white;
  opacity: 0.2;
  margin: 3rem 0 2rem;
}

.footer__bottom {
  /* padding: 50px; */
  text-align: center;
  font-size: 0.875rem;
}

@media (max-width: 900px) {
  .media__list {
    display: none;
  }
  /* .footer__nav-pages {
    margin-bottom: 30px;
  } */
  .footer__nav-pages li {
    display: flex;
    gap: 1rem;
  }
  .redes_sociais_responsivo {
    display: block;
    margin-bottom: 30px;
  }
  .redes_sociais_responsivo ul {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  /* footer p {
    padding-top: 30px;
    padding-bottom: 50px;
  } */
}
</style>
