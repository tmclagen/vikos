<template>
  <div class="project" :class="[`project-${id}`]">
    <div class="project_wrap">
      <h1>{{ project.name }}</h1>
      <router-link  @mouseenter.native="cursorPointer = true" @mouseleave.native="cursorPointer = false"
                    :to="{name: 'projects'}" class="project_back">
        <img src="@/assets/images/arrow_2.svg" alt="">
        {{ $t('project.allProjects') }}
      </router-link>
      <img :src="require(`@/assets/images/projects/${id}/cover.jpg`)" alt="" class="project_image">
      <div class="project_info">
        <div class="project_info_column">
          <div class="project_info_block">
            <h2>{{ $t('project.styleTitle') }}</h2>
            <p>{{ project.style }}</p>
          </div>
          <div class="project_info_block">
            <h2>{{ $t('project.sizeTitle') }}</h2>
            <p>{{ project.size }} <span v-html="$t('project.meters')"></span></p>
          </div>
        </div>
        <div class="project_info_text">
          <h2>{{ $t('project.infoTitle') }}</h2>
          <p>{{ project.info }}</p>
        </div>
      </div>
      <ul class="project_gallery" :class="[`project_gallery_${project.gridType}`]">
        <li v-for="image in project.images" :key="image">
          <img :src="require(`@/assets/images/projects/${id}/${image}.jpg`)" alt="">
        </li>
      </ul>
      <footer>
        <div class="contact_block">
          <span class="contact_block_label">{{ $t('contacts.emailTitle') }}</span>
          <a  @mouseenter="cursorPointer = true" @mouseleave="cursorPointer = false"
              :href="`mailto:${contacts.email}`" class="contact_block_info">
            {{ $t('contacts.email') }}
          </a>
        </div>
        <div class="contact_block">
          <span class="contact_block_label">{{ $t('contacts.phoneTitle') }}</span>
          <a  @mouseenter="cursorPointer = true" @mouseleave="cursorPointer = false"
              :href="`tel:${contacts.phone}`" class="contact_block_info">
            {{ $t('contacts.phone') }}
          </a>
        </div>
        <router-link  @mouseenter.native="cursorPointer = true" @mouseleave.native="cursorPointer = false"
                      :to="{name: 'project', params: { id: nextProjectId }}" class="next_project">
          {{ $t('project.nextProject') }}
          <img src="@/assets/images/arrow_2.svg" alt="">
        </router-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.project.name,
    };
  },
  data() {
    return {
      cursorPointer: false,
    };
  },
  props: ['id'],
  watch: {
    cursorPointer() {
      this.$store.commit('CURSOR_POINTER', this.cursorPointer);
    },
  },
  computed: {
    projects() {
      return this.$t('projects.list');
    },
    project() {
      return this.projects.find((item) => item.id === this.id);
    },
    nextProjectId() {
      const currentProjectIndex = this.projects.indexOf(this.project);
      const nextProjectIndex = currentProjectIndex + 1 >= this.projects.length ? 0 : currentProjectIndex + 1;
      return this.projects[nextProjectIndex].id;
    },
    contacts() {
      return this.$store.state.contacts;
    },
  },
};
</script>

<style>
.project {
  overflow: hidden;
}
.project_wrap {
  max-width: 1140px;
  width: 100%;
}
h1 {
  font-size: 3.4375rem;
  line-height: 1.55em;
}
.project_image {
  display: block;
  margin-bottom: 180px;
  margin-top: 55px;
  opacity: 0.8;
  width: 100%;
}
.project_back {
  align-items: center;
  color: inherit;
  display: flex;
  font-size: 0.625rem;
  letter-spacing: 0.14em;
  line-height: 1.55em;
  margin-top: 20px;
  opacity: 0.45;
  text-decoration: none;
  text-transform: uppercase;
  transition: .1s ease-out;
  width: fit-content;
}
.project_back:hover,
.project_back:focus {
  opacity: 1;
}
.project_back img {
  margin-right: 30px;
  transform: scaleX(-1);
  width: 13px;
}
[dir="rtl"] .project_back img {
  margin-right: 0;
  margin-left: 30px;
  transform: none;
}
.project_info {
  display: flex;
  justify-content: space-between;
  max-width: 921px;
}
.project_info_text {
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  width: 50%;
}
.project_info_text p {
  font-family: var(--font-2);
  font-size: 0.95rem;
  line-height: 2.16em;
  margin-left: 30px;
  margin-top: -10px;
  max-width: 280px;
  opacity: 0.55;
  text-align: justify;
}
[dir="rtl"] .project_info_text p {
  margin-left: 0;
  margin-right: 30px;
}
.project_info_block sup {
  font-size: 0.75em;
  position: relative;
  top: -0.35em;
}
.project_info h2 {
  font-size: 0.625rem;
  letter-spacing: 0.14em;
  line-height: 1.55em;
  margin-bottom: 10px;
  opacity: 0.45;
  text-transform: uppercase;
}
.project_info_block:not(:last-child) {
  margin-bottom: 100px;
}
.project_info_block p {
  font-family: var(--font-2);
  font-size: 2.125rem;
  line-height: 1em;
}

.project_gallery {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 190px;
  opacity: 0.8;
}
.project_gallery img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.project_gallery_1 li:nth-child(1) {
  grid-column: 1 / span 3;
}
.project_gallery_1 li:nth-child(2) {
  grid-column: 4 / span 3;
}
.project_gallery_1 li:nth-child(3) {
  grid-column: 1 / span 6;
}
.project_gallery_1 li:nth-child(4) {
  grid-column: 1 / span 2;
}
.project_gallery_1 li:nth-child(5) {
  grid-column: 3 / span 2;
}
.project_gallery_1 li:nth-child(6) {
  grid-column: 5 / span 2;
}
.project_gallery_1 li:nth-child(7) {
  grid-column: 1 / span 4;
  grid-row: span 2;
}
.project_gallery_1 li:nth-child(8) {
  grid-column: 5 / span 2;
}
.project_gallery_1 li:nth-child(9) {
  grid-column: 5 / span 2;
}

.project_gallery_2 li:nth-child(1) {
  grid-column: 1 / span 2;
}
.project_gallery_2 li:nth-child(2) {
  grid-column: 3 / span 2;
}
.project_gallery_2 li:nth-child(3) {
  grid-column: 5 / span 2;
}
.project_gallery_2 li:nth-child(4) {
  grid-column: 1 / span 3;
}
.project_gallery_2 li:nth-child(5) {
  grid-column: 4 / span 3;
}
.project_gallery_2 li:nth-child(6) {
  grid-column: 1 / span 4;
  grid-row: span 2;
}
.project_gallery_2 li:nth-child(7) {
  grid-column: 5 / span 2;
}
.project_gallery_2 li:nth-child(8) {
  grid-column: 5 / span 2;
}
.project_gallery_2 li:nth-child(9) {
  grid-column: 1 / span 6;
}

.project_gallery_3 li:nth-child(1) {
  grid-column: 1 / span 4;
  grid-row: span 2;
}
.project_gallery_3 li:nth-child(2) {
  grid-column: 5 / span 2;
}
.project_gallery_3 li:nth-child(3) {
  grid-column: 5 / span 2;
}
.project_gallery_3 li:nth-child(4) {
  grid-column: 1 / span 3;
}
.project_gallery_3 li:nth-child(5) {
  grid-column: 4 / span 3;
}
.project_gallery_3 li:nth-child(6) {
  grid-column: 1 / span 6;
}
.project_gallery_3 li:nth-child(7) {
  grid-column: 1 / span 2;
}
.project_gallery_3 li:nth-child(8) {
  grid-column: 3 / span 2;
}
.project_gallery_3 li:nth-child(9) {
  grid-column: 5 / span 2;
}

footer {
  align-items: flex-end;
  display: flex;
  margin-bottom: 110px;
  margin-top: 165px;
}
.contact_block {
  margin-right: 200px;
}
[dir="rtl"] .contact_block {
  margin-left: 200px;
  margin-right: 0;
}
.contact_block_info {
  color: inherit;
  font-family: var(--font-2);
  font-size: 1.5rem;
  line-height: 2.55em;
  text-decoration: none;
}
.contact_block_label {
  display: block;
  font-size: 0.625rem;
  letter-spacing: 0.14em;
  line-height: 1.55em;
  margin-top: 7px;
  opacity: 0.45;
  text-transform: uppercase;
}
.next_project {
  align-items: center;
  color: inherit;
  display: flex;
  font-size: 0.625rem;
  letter-spacing: 0.14em;
  line-height: 1.55em;
  margin-left: auto;
  margin-bottom: 15px;
  opacity: 0.45;
  text-decoration: none;
  text-transform: uppercase;
  transition: .1s ease-out;
}
[dir="rtl"] .next_project {
  margin-left: unset;
  margin-right: auto;
}
.next_project:hover,
.next_project:focus {
  opacity: 1;
}
.next_project img {
  margin-left: 25px;
  width: 13px;
}
[dir="rtl"] .next_project img {
  margin-right: 25px;
  margin-left: 0;
  transform: scaleX(-1);
}
@media screen and (max-width: 1050px) {
  .contact_block {
    margin-right: 100px;
  }
  [dir="rtl"] .contact_block {
    margin-left: 100px;
  }
}
@media screen and (max-width: 850px) {
  footer {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr;
    margin-top: 50px;
  }
  .contact_block {
    margin-right: 0;
    grid-row: 2;
  }
  [dir="rtl"] .contact_block {
    margin-left: 0;
  }
  .next_project {
    margin-left: 0;
    margin-bottom: 100px;
  }
  [dir="rtl"] .next_project {
    margin-right: 0;
  }
}
@media screen and (max-width: 800px) {
  h1 {
    font-size: 3rem;
    line-height: 1em;
    margin-top: 50px;
    padding: .25em 0;
  }
}
@media screen and (max-width: 650px) {
  .project_image {
    margin-bottom: 100px;
  }
  .project_gallery {
    margin-top: 150px;
  }
}
@media screen and (max-width: 500px) {
  .project_image {
    margin-bottom: 70px;
  }
  .project_gallery {
    gap: 5px;
    margin-top: 100px;
  }
  .project_info {
    flex-direction: column;
  }
  .project_info_block:not(:last-child) {
    margin-bottom: 50px;
  }
  .project_info_text {
    flex-direction: column;
    margin-top: 50px;
    width: 100%;
  }
  .project_info_text p {
    margin-left: 0;
    margin-top: 5px;
  }
  [dir="rtl"] .project_info_text p {
    margin-right: 0;
  }
  footer {
    grid-template-columns: 1fr;
  }
  .contact_block:nth-child(2) {
    grid-row: 3;
  }
}
</style>
