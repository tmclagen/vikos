<template>
  <div  id="app" @scroll="saveScrollY" @mousemove="moveCursor"
        :class="{'cursor_pointer': cursorPointer}">
    <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="cursor" :style="{'transform': `translate(${cursor.x}px, ${cursor.y}px)`}">
      <circle cx="20" cy="20" r="20" class="circle"></circle>
      <circle cx="20" cy="20" class="pointer"></circle>
    </svg>
    <AppHeader></AppHeader>
    <div class="motto">
      <div v-html="$t('app.motto')"></div>
    </div>
    <transition name="fade" mode="out-in" :duration="{ enter: 3000, leave: 500 }" appear>
      <router-view :key="$route.fullPath" class="page" />
    </transition>
  </div>
</template>

<script>
import throttle from 'lodash.throttle';
import '@/assets/css/reset.css';
import '@/assets/css/fonts.css';
import AppHeader from '@/components/Header.vue';

export default {
  metaInfo() {
    return {
      title: '',
      titleTemplate(titleChunk) {
        return titleChunk ? `${titleChunk} | Vikos` : 'Vikos';
      },
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === 'he' ? 'rtl' : 'ltr',
      },
    };
  },
  data() {
    return {
      cursor: {
        x: 0,
        y: 0,
      },
      wheelCount: 0,
    };
  },
  components: {
    AppHeader,
  },
  methods: {
    moveCursor: throttle(function ($event) {
      this.cursor.x = $event.clientX;
      this.cursor.y = $event.clientY;
    }, 15),
    saveScrollY: throttle(function ($event) {
      this.$store.commit('UPDATE_SCROLL_Y', $event.target.scrollTop);
    }, 15),
  },
  computed: {
    cursorPointer() {
      return this.$store.state.cursorPointer;
    },
  },
};
</script>

<style>
.cursor {
  height: 40px;
  left: 0;
  margin-left: -20px;
  margin-top: -20px;
  mix-blend-mode: difference;
  pointer-events: none;
  position: fixed;
  width: 40px;
  z-index: 100;
}
.cursor .circle {
  fill: #fff;
  opacity: 0.1;
}
.cursor .pointer {
  fill: #fff;
  r: 4px;
  transition: .15s ease-out;
}
#app.cursor_pointer .cursor .pointer {
  r: 20px;
}
@media (any-hover: none) and (any-pointer: coarse) {
  .cursor {
    display: none;
  }
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: 1.35s ease-out;
}
.fade-leave-active {
  transition: 0.375s ease-out;
  opacity: 0;
}

html {
  --font-1: "Futura PT", sans-serif;
  --font-2: "Futura PT Book", sans-serif;

  background-color: #000;
  color: #fff;
  font-family: var(--font-1);
}
html,
body {
  height: 100%;
}
html * {
  cursor: none;
}
#app {
  height: 100%;
  overflow: auto;
  position: relative;
  /* scroll-behavior: smooth; */
}
.page {
  background: linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0.1) 1px,
        transparent 1px
      ) -150px -1px / 400px 20px repeat,
    linear-gradient(to right, #000, #111);
  box-sizing: border-box;
  display: flex;
  min-height: 100%;
  padding: 150px 40px 40px 130px;
}
[dir="rtl"] .page {
  padding-right: 130px;
  padding-left: 40px;
  background-position: calc(100% + 150px) -1px, 0 0;
}
.motto {
  box-sizing: border-box;
  color: hsla(0, 100%, 100%, .45);
  display: flex;
  font-size: 0.625rem;
  /* font-weight: 600; */
  height: calc(100% - 150px);
  left: 40px;
  letter-spacing: 0.1em;
  line-height: 1.56em;
  min-height: 300px;
  padding-bottom: 150px;
  position: absolute;
  text-transform: uppercase;
  top: 0;
  transform: scale(-1);
  writing-mode: vertical-lr;
  z-index: 1;
}
[dir="rtl"] .motto {
  left: unset;
  right: 40px;
  padding-bottom: 0;
  padding-top: 150px;
  transform: none;
}
.motto div {
  margin: auto;
}
.motto strong {
  color: #fff;
}
.motto span:first-child {
  margin-bottom: 0.75em;
}
@media screen and (max-width: 800px) {
  .motto {
    display: flex;
    height: auto;
    justify-content: flex-start;
    left: 0;
    min-height: unset;
    padding: 150px 40px 0;
    position: absolute;
    transform: scale(1);
    writing-mode: horizontal-tb;
  }
  [dir="rtl"] .motto {
    right: 0;
  }
  .motto span:first-child {
    margin-bottom: 0;
    margin-right: 0.75em;
  }
  .page {
    padding-left: 40px;
  }
  [dir="rtl"] .page {
    padding-right: 40px;
  }
}
@media screen and (max-width: 650px) {
  .motto {
    padding-left: 20px;
    padding-right: 20px;
  }
  .page {
    padding-left: 20px;
    padding-right: 20px;
  }
  [dir="rtl"] .page {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
