<template>
  <div class="projects">
    <div class="projects_wrap">
      <h1>{{ $t('projects.title') }}</h1>
      <ul class="projects_filters">
        <li @mouseenter="cursorPointer = true" @mouseleave="cursorPointer = false"
            v-for="(filter, filterKey, filterIndex) in $t('projects.filters')" :key="filter" @click="filterSelected = filterKey"
            :class="{'is-selected': filterSelected === filterKey}" :style="{'--delay': `${filterIndex * 0.15 + 0.6}s`}">
          {{ filter }}
        </li>
      </ul>
      <transition name="fade-projects" mode="out-in">
        <ul class="projects_list" :key="filterSelected">
          <li v-for="(project, index) in filteredProjects" :key="project.id" class="projects_list_item"
              :style="{'--delay': `${index * 0.075 + 0.95}s`}">
            <router-link  @mouseenter.native="cursorPointer = true" @mouseleave.native="cursorPointer = false"
                          :to="{name: 'project', params: { id: project.id }}">
              <img :src="require(`@/assets/images/projects/${project.id}/preview.jpg`)" alt="" class="projects_list_item_image">
              <div class="projects_list_item_info">
                <h2>
                  <span>{{ project.name }}</span>
                  <img class="projects_list_item_arrow" src="@/assets/images/arrow_2.svg" alt="">
                </h2>
                <span class="projects_list_item_location">{{ project.location }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$t('projects.title'),
    };
  },
  data() {
    return {
      filterSelected: 'all',
      cursorPointer: false,
    };
  },
  watch: {
    cursorPointer() {
      this.$store.commit('CURSOR_POINTER', this.cursorPointer);
    },
  },
  computed: {
    projects() {
      return this.$t('projects.list');
    },
    filteredProjects() {
      if (this.filterSelected === 'all') {
        return this.projects;
      }
      return this.projects.filter((item) => item.tags.includes(this.filterSelected));
    },
  },
};
</script>

<style scoped>
.fade-projects-enter {
  opacity: 0;
}
.fade-projects-enter-active {
  transition: 1.35s ease-out;
}
.fade-projects-leave-active {
  transition: .375s ease-out;
  opacity: 0;
}
.projects {
  overflow: hidden;
}
.projects_wrap {
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
.fade-enter-active h1 {
  transition: 0.65s cubic-bezier(0.1, 0.6, 0.25, 1.2);
  transition-delay: 0.3s;
}
.projects_filters {
  display: flex;
  margin: 0 -30px;
}
.projects_filters li {
  font-size: 0.625rem;
  letter-spacing: 0.14em;
  line-height: 1.55em;
  opacity: 0.45;
  padding: 0 15px;
  margin: 0 15px;
  text-transform: uppercase;
  transition: .075em ease-out;
}
.projects_filters li.is-selected {
  opacity: 1;
}
.fade-enter .projects_filters li {
  opacity: 0;
  transform: translateY(200%);
}
.fade-enter-active .projects_filters li {
  transition: 0.65s cubic-bezier(0.1, 0.6, 0.25, 1);
  transition-delay: var(--delay);
}
.projects_list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 85px 50px;
  margin-top: 100px;
  max-width: 1050px;
  padding-bottom: 125px;
  width: 100%;
}
.projects_list_item > a {
  color: inherit;
  display: block;
  max-width: 450px;
  text-decoration: none;
}
.projects_list_item:nth-child(even) > a {
  margin-left: auto;
  margin-top: 30px;
}
.projects_list h2 {
  display: flex;
  font-family: var(--font-2);
  font-size: 2.125rem;
  line-height: 1em;
  opacity: 0.55;
  padding: 5px 0 5px;
  transition: .125s ease-out;
}
.projects_list h2 span {
  flex: 1;
}
.fade-enter .projects_list h2 {
  opacity: 0;
  transform: translateY(100%);
}
.fade-enter-active .projects_list h2 {
  transition: .65s cubic-bezier(0.1, 0.6, 0.25, 1);
  transition-delay: var(--delay);
}
.projects_list_item > a:hover h2,
.projects_list_item > a:focus h2 {
  opacity: 1;
}
.projects_list_item_image {
  margin-bottom: 25px;
  opacity: 0.4;
  transition: .125s ease-out;
  width: 100%;
}
.fade-enter .projects_list_item_image {
  opacity: 0;
  transform: translateY(50%);
}
.fade-enter-active .projects_list_item_image {
  transition: 1.1s cubic-bezier(0.1, 0.6, 0.25, 1);
  transition-delay: var(--delay);
}
.projects_list_item > a:hover .projects_list_item_image,
.projects_list_item > a:focus .projects_list_item_image {
  opacity: .8;
}
.projects_list_item_location {
  display: block;
  font-size: 0.625rem;
  letter-spacing: 0.14em;
  line-height: 1.55em;
  margin-top: 7px;
  opacity: 0.45;
  text-transform: uppercase;
}
.fade-enter .projects_list_item_location {
  opacity: 0;
  transform: translateY(100%);
}
.fade-enter-active .projects_list_item_location {
  transition: .65s cubic-bezier(0.1, 0.6, 0.25, 1);
  transition-delay: calc(var(--delay) + 0.1s);
}
.projects_list_item_info {
  position: relative;
}
.projects_list_item_arrow {
  flex-shrink: 0;
  opacity: 0.4;
  margin-left: 30px;
  margin-top: 7px;
  transform: translateX(-15px);
  transition: .325s cubic-bezier(0, 0, 0, 1.65);
}
[dir="rtl"] .projects_list_item_arrow {
  margin-left: 0;
  margin-right: 30px;
  transform: translateX(15px) scaleX(-1);
}
.fade-enter .projects_list_item_arrow {
  opacity: 0;
  transform: translateX(-300%);
}
[dir="rtl"] .fade-enter .projects_list_item_arrow {
  opacity: 0;
  transform: translateX(300%) scaleX(-1);
}
.fade-enter-active .projects_list_item_arrow {
  /* transition: 0.55s cubic-bezier(0.1, 0.6, 0.25, 1.2); */
  transition-delay: calc(var(--delay) + .75s);
}
.projects_list_item > a:hover .projects_list_item_arrow,
.projects_list_item > a:focus .projects_list_item_arrow {
  opacity: 1;
  transform: translateX(0);
}
[dir="rtl"] .projects_list_item > a:hover .projects_list_item_arrow,
[dir="rtl"] .projects_list_item > a:focus .projects_list_item_arrow {
  transform: translateX(0) scaleX(-1);
}
@media screen and (max-width: 800px) {
  h1 {
    font-size: 3rem;
    margin-top: 50px;
  }
  .projects_list h2 {
    font-size: 2rem;
  }
  .projects_list {
    grid-template-columns: 1fr;
  }
  .projects_list_item:nth-child(even) > a {
    margin-top: 0;
  }
  .projects_filters {
    margin: 0 -20px;
  }
  .projects_filters li {
    margin: 0 10px;
    padding: 0 10px;
  }
}
@media screen and (max-width: 650px) {
  .projects_list {
    padding-bottom: 80px;
  }
}
</style>
