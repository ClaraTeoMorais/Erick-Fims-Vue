import type { Directive } from 'vue'

const animateOnScroll: Directive = {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    el.classList.add('scroll-animation')
    observer.observe(el)
  },
}

export default animateOnScroll
