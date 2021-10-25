<template>
  <div class="about">
    <div class="about_wrap">
      <h1>{{ $t('about.title') }}</h1>
      <p class="about_description description">{{ $t('about.description') }}</p>
      <h2 class="about_subheader" v-html="$t('about.subtitle')"></h2>
      <ul class="list">
        <li class="list_item">
          <div class="list_info">
            <div class="list_info_text">
              <p v-for="text in $t('about.list[0].texts')" :key="text">{{ text }}</p>
            </div>
          </div>
          <img src="@/assets/images/about_1.jpg" alt="" class="list_img" ref="img1" :style="{'--parallax-shift': paralaxImage1}">
        </li>
        <li class="list_item">
          <img src="@/assets/images/about_2.jpg" alt="" class="list_img" ref="img2" :style="{'--parallax-shift': paralaxImage2}">
          <div class="list_info" :style="{'--parallax-shift': paralaxInfo2}" ref="info2">
            <p class="description">{{ $t('about.list[1].description') }}</p>
            <h2>{{ $t('about.list[1].title') }}</h2>
            <div class="list_info_text">
              <p v-for="text in $t('about.list[1].texts')" :key="text">{{ text }}</p>
            </div>
          </div>
        </li>
        <li class="list_item">
          <div class="list_info" :style="{'--parallax-shift': paralaxInfo3}" ref="info3">
            <p class="description">{{ $t('about.list[2].description') }}</p>
            <h2 v-html="$t('about.list[2].title')"></h2>
            <div class="list_info_text">
              <p v-for="text in $t('about.list[2].texts')" :key="text">{{ text }}</p>
            </div>
          </div>
          <img src="@/assets/images/about_3.jpg" alt="" class="list_img" ref="img3" :style="{'--parallax-shift': paralaxImage3}">
        </li>
      </ul>
      <div class="benefits">
        <h2>{{ $t('about.benefitsTitle') }}</h2>
        <p class="description">{{ $t('about.benefitsDescription') }}</p>
        <ul class="benefits_list">
          <li v-for="(benefit, benefitIndex) in $t('about.benefits')" :key="benefitIndex">{{ benefit }}</li>
        </ul>
      </div>
      <div class="projects">
        <div class="circle"></div>
        <h2>{{ $t('about.projectsTitle') }}</h2>
        <img src="@/assets/images/arrow.svg" alt="">
        <router-link  @mouseenter.native="cursorPointer = true" @mouseleave.native="cursorPointer = false"
                      class="projects_all" :to="{name: 'projects'}">
          {{ $t('about.watchAll') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$t('about.title'),
    };
  },
  data() {
    return {
      cursorPointer: false,
      paralaxImage1: 0,
      paralaxImage2: 0,
      paralaxImage3: 0,
      paralaxInfo2: 0,
      paralaxInfo3: 0,
    };
  },
  methods: {
    calculateParallax(el, speed) {
      const elOffsetY = el.offsetTop;
      return `${(elOffsetY - this.scrollPosY - window.innerHeight / 2) * speed}px`;
    },
    calculateAllParalax() {
      this.paralaxImage1 = this.calculateParallax(this.$refs.img1, 0.2);
      this.paralaxImage2 = this.calculateParallax(this.$refs.img2, -0.075);
      this.paralaxImage3 = this.calculateParallax(this.$refs.img3, 0.285);
      this.paralaxInfo2 = this.calculateParallax(this.$refs.info2, 0.095);
      this.paralaxInfo3 = this.calculateParallax(this.$refs.info3, 0.075);
    },
  },
  watch: {
    cursorPointer() {
      this.$store.commit('CURSOR_POINTER', this.cursorPointer);
    },
    scrollPosY() {
      this.calculateAllParalax();
    },
  },
  computed: {
    scrollPosY() {
      return this.$store.state.scrollPosY;
    },
  },
  mounted() {
    this.calculateAllParalax();
  },
};
</script>

<style scoped>
h1 {
  font-size: 5.625rem;
  line-height: 1.55em;
  margin-bottom: 110px;
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
.about {
  overflow: hidden;
}
.about_wrap {
  width: 100%;
}
.fade-enter .about_description {
  opacity: 0;
  transform: translateY(100px);
}
.fade-enter-active .about_description {
  transition: 0.75s 0.525s cubic-bezier(0.1, 0.6, 0.25, 1);
}
.description {
  font-family: var(--font-2);
  font-size: 1.125rem;
  line-height: 1.7em;
  margin-bottom: 25px;
}
.fade-enter .about_subheader {
  opacity: 0;
  transform: translateY(150px);
}
.fade-enter-active .about_subheader {
  transition: 0.95s .625s cubic-bezier(0.1, 0.6, 0.25, 1);
}
h2 {
  font-family: var(--font-2);
  font-size: 4.375rem;
  line-height: 1em;
}
.list {
  margin-top: 180px;
  max-width: 921px;
}
.fade-enter .list {
  opacity: 0;
}
.fade-enter-active .list {
  transition: 1s 1.25s cubic-bezier(0.1, 0.6, 0.25, 1);
}
.list_item {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.list_item:nth-child(1) {
  margin-bottom: 90px;
}
.list_item:nth-child(2) {
  margin-bottom: 120px;
}
.list_info {
  max-width: 400px;
  transform: translateY(var(--parallax-shift));
  width: 50%;
}
.list_info_text {
  font-family: var(--font-2);
  font-size: 0.95rem;
  line-height: 2.16em;
  max-width: 300px;
  opacity: 0.75;
  text-align: justify;
}
.list_info_text p:not(:last-child) {
  margin-bottom: 2.16em;
}
.list_img {
  max-width: 400px;
  transform: translateY(var(--parallax-shift));
  width: 50%;
}
.list_item:nth-child(odd) .list_img {
  margin-left: 60px;
}
.list_item:nth-child(even) .list_img {
  margin-right: 60px;
}
[dir="rtl"] .list_item:nth-child(odd) .list_img {
  margin-left: 0;
  margin-right: 60px;
}
[dir="rtl"] .list_item:nth-child(even) .list_img {
  margin-right: 0;
  margin-left: 60px;
}
.list_item:nth-child(1) .list_img,
.list_item:nth-child(3) .list_img {
  opacity: 0.7;
}
.list_item:nth-child(2) .list_img {
  opacity: 0.85;
}
.list_item:nth-child(2) .list_info {
  margin-top: 230px;
}
.list_item:nth-child(3) .list_img {
  margin-top: 170px;
}

.list_item .description {
  max-width: 330px;
}
.list_item h2 {
  line-height: 0.9em;
  margin-bottom: 90px;
}

.benefits {
  margin-top: 220px;
  max-width: 975px;
}
.benefits .description {
  margin-bottom: 0;
  margin-top: 15px;
}
.benefits_list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 50px;
  margin-top: 90px;
}
.benefits_list li {
  color: hsla(0, 0%, 100%, 0.75);
  box-sizing: border-box;
  font-family: var(--font-2);
  font-size: 0.95rem;
  display: flex;
  line-height: 2.16em;
  max-width: 250px;
  position: relative;
  text-align: justify;
}
.benefits_list li::before {
  background-color: #fff;
  content: '';
  display: block;
  flex-shrink: 0;
  height: 5px;
  margin-right: 20px;
  margin-top: 12px;
  width: 5px;
}
[dir="rtl"] .benefits_list li::before {
  margin-right: 0;
  margin-left: 20px;
}

.projects {
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-top: 225px;
  margin-bottom: 130px;
  max-width: 920px;
  position: relative;
}
.projects h2 {
  line-height: 0.85;
  position: relative;
}
.projects img {
  padding: 0 30px;
  margin-left: -70px;
  position: relative;
}
[dir="rtl"] .projects img {
  margin-left: 0;
  margin-right: -70px;
  transform: scaleX(-1);
}
.projects_all {
  color: inherit;
  font-size: 0.875rem;
  letter-spacing: 0.14em;
  line-height: 1.55;
  opacity: 0.45;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: .1s ease-out;
}
.projects_all:hover,
.projects_all:focus {
  opacity: 1;
}
.circle {
  align-items: center;
  border: 1px solid hsla(0, 0%, 47%, 0.15);
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  height: 1800px;
  left: -580px;
  justify-content: center;
  position: absolute;
  top: -285px;
  width: 1800px;
}
[dir="rtl"] .circle {
  left: unset;
  right: -580px;
}
.circle::before,
.circle::after {
  border: 1px solid #787878;
  border-radius: 50%;
  box-sizing: border-box;
  content: '';
  display: block;
  position: absolute;
}
.circle::before {
  height: 1470px;
  opacity: 0.4;
  width: 1470px;
}
.circle::after {
  height: 1215px;
  width: 1215px;
}

@media screen and (max-width: 900px) {
  .list_img {
    width: 40%;
  }
  .list_info {
    width: 60%;
  }
  .list_item:nth-child(2) .list_info {
    margin-top: 100px;
  }
}
@media screen and (max-width: 800px) {
  h1 {
    margin-top: 50px;
  }
}
@media screen and (max-width: 650px) {
  .list_item {
    flex-wrap: wrap;
  }
  .list_img {
    margin-bottom: 30px;
    order: 1;
    width: 100%;
  }
  .list_info {
    order: 2;
    width: 100%;
  }
  .list_item:nth-child(odd) .list_img {
    margin-left: 0;
  }
  .list_item:nth-child(even) .list_img {
    margin-right: 0;
  }
  [dir="rtl"] .list_item:nth-child(odd) .list_img {
    margin-right: 0;
  }
  [dir="rtl"] .list_item:nth-child(even) .list_img {
    margin-left: 0;
  }
  .list_item:nth-child(1),
  .list_item:nth-child(2) {
    margin-bottom: 100px;
  }
  .list_item:nth-child(2) .list_info,
  .list_item:nth-child(3) .list_img {
    margin-top: 0;
  }
  .description {
    font-size: 1rem;
    margin-bottom: 15px;
  }
  .list {
    margin-top: 100px;
  }
  h1 {
    font-size: 4rem;
    line-height: 1em;
    margin-bottom: 70px;
  }
  h2 {
    font-size: 3rem;
  }
  .list_item h2 {
    margin-bottom: 50px;
  }
  .benefits {
    margin-top: 150px;
  }
  .benefits_list {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 30px;
    margin-top: 50px;
  }
}
@media screen and (max-width: 500px){
  .benefits_list {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .projects {
    align-items: center;
    flex-direction: column;
    margin-bottom: 130px;
    width: fit-content;
  }
  .projects h2 {
    margin-bottom: 70px;
  }
  .projects img {
    margin-left: 0;
    transform: rotate(90deg);
  }
  [dir="rtl"] .projects img {
    margin-right: 0;
    transform: rotate(90deg);
  }
  .projects_all {
    margin-top: 50px;
  }
  .circle {
    left: -760px;
    top: -210px;
  }
  [dir="rtl"] .circle {
    right: -760px;
  }
}
</style>
