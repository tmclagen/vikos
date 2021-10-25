<template>
  <div class="home">
    <div class="info_wrap">
      <div class="info">
        <h1>
          <p v-for="(item, itemIndex) in headerFormatted" :key="itemIndex">
            <span v-for="(letter, letterIndex) in item" :key="letterIndex" :style="{'--delay': `${letter.delay}s`}">{{letter.value}}</span>
          </p>
        </h1>
        <p class="info_description">{{ $t('home.description') }}</p>
      </div>
      <div class="bottom_links">
        <router-link  @mouseenter.native="cursorPointer = true" @mouseleave.native="cursorPointer = false"
                      :to="{name: 'contacts'}" class="contacts">
          {{ $t('home.contacts') }}
        </router-link>
        <router-link  @mouseenter.native="cursorPointer = true" @mouseleave.native="cursorPointer = false"
                      :to="{name: 'projects'}" class="projects">
          {{ $t('home.projects') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$t('home.title'),
    };
  },
  name: 'Home',
  data() {
    return {
      header: ['Vikos', 'engineering Ltd'],
      cursorPointer: false,
      letterDelay: 0.3,
    };
  },
  computed: {
    headerFormatted() {
      return this.header.map((item) => {
        const letters = item.split('');
        return letters.map((letter) => {
          this.letterDelay += 0.015;
          return {
            value: letter,
            delay: this.letterDelay,
          };
        });
      });
    },
  },
  watch: {
    cursorPointer() {
      this.$store.commit('CURSOR_POINTER', this.cursorPointer);
    },
  },
};
</script>

<style scoped>
.home {
  background: linear-gradient(90deg, hsla(0, 0%, 100%, .1) 1px, transparent 1px) -150px -1px / 400px 20px repeat,
              url('../assets/images/home_bg.jpg') center / cover no-repeat;
  padding-left: 0;
  padding-right: 0;
}
[dir="rtl"] .page {
  background-position: calc(100% + 150px) -1px, center center;
}
.bottom_links {
  display: flex;
  padding-top: 50px;
}
.bottom_links a {
  color: #fff;
  font-size: 1.125rem;
  /* font-weight: 600; */
  line-height: 2.17em;
  text-decoration: none;
}
.projects {
  margin-left: auto;
}
[dir="rtl"] .projects {
  margin-left: unset;
  margin-right: auto;
}
.info_wrap {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 40px;
  position: relative;
  width: 100%;
}
.info {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding-left: 50px;
  margin-left: 8.5vw;
}
[dir="rtl"] .info {
  padding-right: 50px;
  margin-right: 8.5vw;
  padding-left: 0;
  margin-left: 0;
}
h1 {
  align-items: baseline;
  font-size: 6.875rem;
  font-weight: 600;
  display: flex;
  line-height: 1.55em;
}
[dir="rtl"] h1 {
  flex-direction: row-reverse;
  justify-content: flex-end;
}
h1 p {
  display: flex;
  white-space: pre;
}
[dir="rtl"] h1 p {
  flex-direction: row-reverse;
}
h1 p:nth-child(2) {
  font-family: var(--font-2);
  font-size: 2.5rem;
  margin-left: 0.7em;
}

.fade-enter h1 span {
  opacity: 0;
  transform: translateY(100px) scale(5);
}
.fade-enter-active h1 span {
  transition: 0.75s cubic-bezier(0.1, 0.6, 0.25, 1.2);
  transition-delay: var(--delay);
}

.info_description {
  font-family: var(--font-2);
  font-size: 0.95rem;
  line-height: 2.17em;
  margin-left: 1em;
  max-width: 420px;
  opacity: 0.75;
}
.fade-enter .info_description {
  opacity: 0;
  transform: translateY(50%);
}
.fade-enter-active .info_description {
  transition: 0.75s .5s cubic-bezier(0.1, 0.6, 0.25, 1);
}

@media screen and (max-width: 800px) {
  .info {
    margin-left: 0;
    padding-left: 0;
    padding-top: 50px;
  }
  [dir="rtl"] .info {
    margin-right: 0;
    padding-right: 0;
  }
}
@media screen and (max-width: 650px) {
  .info_wrap {
    padding-left: 30px;
    padding-right: 30px;
  }
  h1 {
    flex-direction: column;
    font-size: 5rem;
    line-height: .75em;
    margin: 50px 0 25px;
  }
  [dir="rtl"] h1 {
    flex-direction: column;
  }
  h1 p:nth-child(2) {
    font-size: 2rem;
    margin-left: 0;
  }
  .info_description {
    margin-left: 0;
  }
}
</style>
