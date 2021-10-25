<template>
  <div class="contacts">
    <div class="contacts_wrap">
      <h1>{{ $t('contacts.title') }}</h1>
      <div class="contacts_content">
        <ul class="contacts_info">
          <li class="contacts_info_item">
            <a  @mouseenter="cursorPointer = true" @mouseleave="cursorPointer = false"
                :href="`mailto:${contacts.email}`" class="contacts_info_item_info">
              {{ $t('contacts.email') }}
            </a>
            <span class="contacts_info_item_label">{{ $t('contacts.emailTitle') }}</span>
          </li>
          <li class="contacts_info_item">
            <a  @mouseenter="cursorPointer = true" @mouseleave="cursorPointer = false"
                :href="`tel:${contacts.phone}`" class="contacts_info_item_info">
              {{ $t('contacts.phone') }}
            </a>
            <span class="contacts_info_item_label">{{ $t('contacts.phoneTitle') }}</span>
          </li>
          <li class="contacts_info_item">
            <p class="contacts_info_item_info">{{ $t('contacts.address') }}</p>
            <span class="contacts_info_item_label">{{ $t('contacts.addressTitle') }}</span>
          </li>
        </ul>
        <img class="map" src="@/assets/images/contacts_map.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$t('contacts.title'),
    };
  },
  data() {
    return {
      cursorPointer: false,
    };
  },
  watch: {
    cursorPointer() {
      this.$store.commit('CURSOR_POINTER', this.cursorPointer);
    },
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
};
</script>

<style scoped>
.contacts {
  overflow: hidden;
}
.contacts_wrap {
  width: 100%;
}
h1 {
  font-size: 3.4375rem;
  line-height: 1.55em;
}
.fade-enter h1 {
  opacity: 0;
  transform: translateX(10%);
}
[dir="rtl"] .fade-enter h1 {
  transform: translateX(-10%);
}
.fade-enter-active h1 {
  transition: 0.65s cubic-bezier(0.1, 0.6, 0.25, 1.2);
  transition-delay: 0.3s;
}
.contacts_content {
  display: flex;
  margin-top: 110px;
}
.contacts_info {
  flex-shrink: 0;
  width: 521px;
}
.contacts_info_item:not(:last-child) {
  margin-bottom: 70px;
}
.fade-enter .contacts_info_item {
  opacity: 0;
  transform: translateX(30%);
}
[dir="rtl"] .fade-enter .contacts_info_item {
  transform: translateX(-30%);
}
.fade-enter-active .contacts_info_item {
  transition: 0.65s cubic-bezier(0.1, 0.6, 0.25, 1);
}
.fade-enter-active .contacts_info_item:nth-child(1) {
  transition-delay: 0.3s;
}
.fade-enter-active .contacts_info_item:nth-child(2) {
  transition-delay: 0.4s;
}
.fade-enter-active .contacts_info_item:nth-child(3) {
  transition-delay: 0.5s;
}
.contacts_info_item_info {
  color: inherit;
  font-family: var(--font-2);
  font-size: 2.125rem;
  line-height: 1em;
  padding: 5px 0;
  text-decoration: none;
}
.contacts_info_item_label {
  display: block;
  font-size: 0.625rem;
  letter-spacing: 0.14em;
  line-height: 1.55em;
  margin-top: 7px;
  opacity: 0.45;
  text-transform: uppercase;
}
.map {
  display: block;
  margin-top: -245px;
  margin-bottom: -40px;
  width: 100%;
}
@media screen and (max-width: 1000px) {
  .contacts_content {
    flex-direction: column;
  }
  .map {
    margin-left: -130px;
    margin-top: 150px;
    width: 100vw;
  }
  [dir="rtl"] .map {
    margin-left: 0;
    margin-right: -130px;
  }
  .contacts_info {
    width: auto;
  }
}
@media screen and (max-width: 800px) {
  h1 {
    font-size: 3rem;
    margin-top: 50px;
  }
  .contacts_info_item_info {
    font-size: 2rem;
  }
  .map {
    margin-left: -40px;
    min-width: 600px;
  }
  [dir="rtl"] .map {
    margin-right: -40px;
  }
}
@media screen and (max-width: 650px) {
  .map {
    margin-left: -20px;
  }
  [dir="rtl"] .map {
    margin-right: -20px;
  }
}
</style>
