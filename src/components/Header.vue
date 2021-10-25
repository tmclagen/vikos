<template>
  <header>
    <router-link  @mouseenter.native="cursorPointer = true" @mouseleave.native="cursorPointer = false"
                  :to="{name: 'home'}" class="logo">
      <img src="@/assets/images/logo.svg" alt="Vikos logo">
    </router-link>
    <div  class="lang" @click.stop="isLangOpened = !isLangOpened" :class="{'is-opened': isLangOpened}"
          @mouseenter="cursorPointer = true" @mouseleave="cursorPointer = false">
      <div class="lang_header">{{ $i18n.locale }}</div>
      <ul class="lang_list">
        <li v-for="lang in langs" :key="lang" @click="changeLang(lang)">{{ lang }}</li>
      </ul>
    </div>
    <button @click.once="hasNavOpened = true" @click="isNavOpened = !isNavOpened" type="button"
            @mouseenter="cursorPointer = true" @mouseleave="cursorPointer = false"
            class="burger" :class="{'is-opened': isNavOpened, 'is-closed': !isNavOpened && hasNavOpened}">
    </button>
    <div class="menu" :class="{'is-opened': isNavOpened}">
      <div class="menu_wrap">
        <div class="menu_overlay" @click="isNavOpened = !isNavOpened"></div>
        <nav>
          <div class="nav_wrap">
            <router-link  v-for="(item, key) in $t('app.nav')" :key="key"
                          @click.native="isNavOpened = false" :to="{name: key}"
                          @mouseenter.native="cursorPointer = true" @mouseleave.native="cursorPointer = false">
              {{ item }}
            </router-link>
          </div>
        </nav>
        <div class="contacts_wrap">
          <ul class="contacts">
            <li class="contacts_item">
              <span class="contacts_item_label">{{ $t('app.phoneTitle') }}</span>
              <a  :href="`tel:${$t('contacts.phone')}`" class="contacts_item_info"
                  @mouseenter="cursorPointer = true" @mouseleave="cursorPointer = false">
                {{ $t('contacts.phone') }}
              </a>
            </li>
            <li class="contacts_item">
              <span class="contacts_item_label">{{ $t('app.emailTitle') }}</span>
              <a  :href="`mailto:${$t('contacts.email')}`" class="contacts_item_info"
                  @mouseenter="cursorPointer = true" @mouseleave="cursorPointer = false">
                {{ $t('contacts.email') }}
              </a>
            </li>
            <li class="contacts_item">
              <span class="contacts_item_label">{{ $t('app.addressTitle') }}</span>
              <p class="contacts_item_info">{{ $t('contacts.address') }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavOpened: false,
      hasNavOpened: false,
      cursorPointer: false,
      isLangOpened: false,
    };
  },
  computed: {
    langs() {
      return this.$i18n.availableLocales.filter((item) => item !== this.$i18n.locale);
    },
  },
  methods: {
    closeLangs() {
      this.isLangOpened = false;
    },
    changeLang(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('lang', lang);
    },
  },
  watch: {
    cursorPointer() {
      this.$store.commit('CURSOR_POINTER', this.cursorPointer);
    },
  },
  created() {
    document.addEventListener('click', this.closeLangs);
  },
  destroyed() {
    document.removeEventListener('click', this.closeLangs);
  },
};
</script>

<style scoped>
.menu {
  height: 100%;
  left: 0;
  opacity: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  transition: .125s ease-out;;
  visibility: hidden;
  width: 100%;
}
.menu.is-opened {
  opacity: 1;
  visibility: visible;
}
.menu_overlay {
  height: 100%;
  position: absolute;
  width: 100%;
}
.menu_wrap {
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;
  position: relative;
  width: 100%;
}
nav {
  background-color: #000;
  box-sizing: border-box;
  display: flex;
  max-width: 530px;
  min-height: 100%;
  padding: 15px;
  padding-left: calc(6.8vw + 15px);
  transition: .2s cubic-bezier(0, 0, 0.15, 1);
  transform: translateX(-30%);
  width: 50%;
  z-index: 1;
}
[dir="rtl"] nav {
  transform: translateX(30%);
  padding-left: 15px;
  padding-right: calc(6.8vw + 15px);
}
.menu.is-opened nav {
  transform: translateX(0);
}
.nav_wrap {
  margin: auto 0;
}
nav a {
  align-items: center;
  color: #515151;
  display: flex;
  font-family: var(--font-2);
  font-size: 2rem;
  line-height: 3.4em;
  text-decoration: none;
  text-transform: lowercase;
}
nav a::before {
  background-color: currentColor;
  content: "";
  display: none;
  height: 2px;
  margin-right: 0.5em;
  margin-top: 0.225em;
  width: 1em;
}
[dir="rtl"] nav a::before {
  margin-left: 0.5em;
  margin-right: 0;
}
nav a.router-link-exact-active {
  color: #fff;
}
nav a.router-link-exact-active::before {
  display: block;
}
.contacts_wrap {
  background-color: #111;
  box-sizing: border-box;
  display: flex;
  max-width: 520px;
  min-height: 100%;
  transition: .225s cubic-bezier(0, 0, 0.15, 1);
  transform: translateX(-100%);
  width: 50%;
}
[dir="rtl"] .contacts_wrap {
  transform: translateX(100%);
}
.menu.is-opened .contacts_wrap {
  transform: translateX(0);
  transition-delay: .035s;
}
.contacts {
  margin: auto 0;
  width: 100%;
}
.contacts_item {
  padding: 50px 0;
  padding-left: calc(6.8vw + 15px);
}
[dir="rtl"] .contacts_item {
  padding-left: 0;
  padding-right: calc(6.8vw + 15px);
}
.contacts_item:not(:last-child) {
  border-bottom: 1px solid #242424;
}
.contacts_item_label {
  display: block;
  font-size: 0.625rem;
  line-height: 1.55em;
  letter-spacing: .14em;
  opacity: 0.45;
  text-transform: uppercase;
}
.contacts_item_info {
  color: #fff;
  display: block;
  font-size: 1.5rem;
  line-height: 2.55em;
  text-decoration: none;
}
header {
  align-items: center;
  border-bottom: 1px solid hsla(0, 0%, 100%, .1);
  box-sizing: border-box;
  display: flex;
  height: 100px;
  padding: 0 40px;
  position: absolute;
  width: 100%;
  z-index: 2;
}
.logo {
  width: 80px;
}
.logo img {
  width: 100%;
}
.lang {
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 1.5em;
  margin-left: auto;
  margin-right: 35px;
  padding: 5px;
  position: relative;
}
[dir="rtl"] .lang {
  margin-left: 35px;
  margin-right: auto;
}
.lang_header {
  align-items: center;
  display: flex;
  margin-top: -0.25em;
}
.lang_header::before {
  background: url('../assets/images/arrow_down.svg');
  content: '';
  display: block;
  height: 5px;
  margin-right: 5px;
  margin-top: .25em;
  width: 10px;
}
[dir="rtl"] .lang_header::before {
  margin-left: 5px;
}
.lang_list {
  box-sizing: border-box;
  opacity: 0;
  padding: 0 5px;
  position: absolute;
  right: 0;
  top: 100%;
  transform: translateY(-25px) scaleY(.5);
  transition: .1s ease-out;
  visibility: hidden;
  width: 100%;
}
.lang.is-opened .lang_list {
  opacity: 1;
  transform: none;
  visibility: visible;
}
.lang_list li {
  padding-left: 15px;
}
[dir="rtl"] .lang_list li {
  padding-left: 0;
  text-align: left;
}
.burger {
  appearance: none;
  align-items: flex-end;
  background: none;
  border: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: center;
  outline: none;
  padding: 5px;
  position: relative;
  transition: .3s .1s cubic-bezier(0.25, 0.1, 0.13, 1.97);
  width: 50px;
  z-index: 1;
}
.burger.is-opened {
  transform: rotate(45deg);
  transition-duration: .3s;
  transition-delay: .1s;
}
.burger::before,
.burger::after {
  background-color: #fff;
  content: '';
  display: block;
  height: 2px;
  position: absolute;
}
.burger::before {
  transform: translateY(-4px);
  transition: .075s ease-out;
  width: 40px;
}
.burger.is-opened::before {
  animation: .3s openBurgerLineUp linear forwards;
}
.burger.is-closed::before {
  animation: .3s closeBurgerLineUp linear forwards;
}
.burger::after {
  opacity: 0.4;
  transform: translateY(3px);
  width: 20px;
}
.burger.is-opened::after {
  animation: .1s openBurgerLineDown linear forwards;
}
.burger.is-closed::after {
  animation: .3s closeBurgerLineDown linear forwards;
}
@keyframes openBurgerLineUp {
  7% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
@keyframes openBurgerLineDown {
  20% {
    opacity: .4;
    transform: translateY(0);
    width: 20px;
  }
  30% {
    opacity: 1;
    transform: translateY(0);
    width: 40px;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    width: 40px;
  }
}
@keyframes closeBurgerLineUp {
  0% {
    transform: translateY(0) rotate(90deg);
  }
  50% {
    transform: translateY(0);
  }
  93% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-4px);
  }
}
@keyframes closeBurgerLineDown {
  0% {
    opacity: 1;
    transform: translateY(0);
    width: 40px;
  }
  70% {
    opacity: 1;
    transform: translateY(0);
    width: 40px;
  }
  81% {
    opacity: .4;
    transform: translateY(0);
    width: 20px;
  }
  100% {
    opacity: .4;
    transform: translateY(3px);
    width: 20px;
  }
}

@media screen and (max-width: 1200px) {
  nav {
    max-width: 350px;
    padding: 25px 50px;
    width: 50%;
  }
  [dir="rtl"] nav {
    padding: 25px 50px;
  }
  nav a {
    font-size: 1.65rem;
  }
  .contacts_wrap {
    max-width: 350px;
    width: 50%;
  }
  .contacts_item {
    padding: 25px 50px;
  }
  [dir="rtl"] .contacts_item {
    padding: 25px 50px;
  }
  .contacts_item_info {
    font-size: 1.15rem;
  }
}
@media screen and (max-width: 850px) {
  nav,
  .contacts_wrap {
    flex-shrink: 0;
    max-width: unset;
  }
}
@media screen and (max-width: 650px) {
  header {
    padding-left: 20px;
    padding-right: 20px;
  }
  nav,
  .contacts_wrap {
    width: 100%;
  }
  .contacts_wrap {
    padding: 50px 0;
  }
}
</style>
