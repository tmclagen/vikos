<template>
  <div class="architects">
    <div class="architects_wrap">
      <h1>{{ $t('architects.title') }}</h1>
      <ul class="architects_list">
        <li v-for="(acrhitect, index) in $t('architects.list')" :key="acrhitect.name" class="architects_list_item"
            :style="{'--delay': `${index * 0.1 + 0.45}s`}">
          <h2>{{ acrhitect.name }}</h2>
          <span class="architects_list_item_post">{{ acrhitect.post }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$t('architects.title'),
    };
  },
};
</script>

<style scoped>
.architects {
  overflow: hidden;
}
.architects_wrap {
  width: 100%;
}
h1 {
  font-size: 3.4375rem;
  line-height: 1.55em;
  margin-bottom: 20px;
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
.architects_list {
  display: grid;
  gap: 0 30px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 180px;
  margin-bottom: 30px;
  margin-top: 70px;
  max-width: 1150px;
  position: relative;
}
.architects_list::before {
  background: linear-gradient(0deg, #fff 1px, transparent 1px) 0 0 / 1px 180px repeat;
  content: '';
  display: block;
  height: calc(100% - 5px);
  left: -130px;
  opacity: 0.1;
  position: absolute;
  top: 0;
  width: 200vw;
}
.architects_list_item {
  box-sizing: border-box;
  padding-top: 30px;
  width: 100%;
}
.architects_list_item h2 {
  font-family: var(--font-2);
  font-size: 2.125rem;
  line-height: 1em;
  padding: 5px 0;
}
.fade-enter .architects_list_item h2 {
  opacity: 0;
  transform: translateY(200%);
}
.fade-enter-active .architects_list_item h2 {
  transition: 0.45s cubic-bezier(0.1, 0.6, 0.25, 1);
  transition-delay: var(--delay);
}
.architects_list_item_post {
  display: block;
  font-size: 0.625rem;
  letter-spacing: 0.14em;
  line-height: 1.55em;
  margin-top: 7px;
  opacity: 0.45;
  text-transform: uppercase;
}
.fade-enter .architects_list_item_post {
  opacity: 0;
  transform: translateY(50%);
}
.fade-enter-active .architects_list_item_post {
  transition: 0.35s cubic-bezier(0.1, 0.6, 0.25, 1);
  transition-delay: calc(var(--delay) + 0.2s);
}
@media screen and (max-width: 900px) {
  .architects_list {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 800px) {
  h1 {
    font-size: 3rem;
    margin-top: 50px;
  }
  .architects_list_item h2 {
    font-size: 2rem;
  }
  .architects_list {
    grid-auto-rows: 150px;
  }
  .architects_list::before {
    background-size: 1px 150px;
  }
}
@media screen and (max-width: 450px) {
  .architects_list {
    grid-template-columns: 1fr;
  }
}
</style>
