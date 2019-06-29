<template>
<div class="relative">
  <div class="vx-navbar-wrapper">
    <vs-navbar class="vx-navbar navbar-custom" :color="navbarColor" :class="classObj">

      <!-- SM - OPEN SIDEBAR BUTTON -->
      <feather-icon class="sm:inline-flex xl:hidden cursor-pointer mr-1" icon="MenuIcon" @click.stop="showSidebar"></feather-icon>

      <template v-if="breakpoint != 'md'">
        <div class="bookmark-container">
          <feather-icon icon="StarIcon" :svgClasses="['stoke-current text-warning', {'text-white': navbarColor != '#fff'}]" class="cursor-pointer p-2" @click="showBookmarkPagesDropdown = !showBookmarkPagesDropdown" />  <div v-click-outside="outside" class="absolute bookmark-list w-1/3 xl:w-1/4 mt-4" v-if="showBookmarkPagesDropdown">
            <case-auto-suggest :autoFocus="true" :data="navbarSearchAndPinList" @selected="selected" @actionClicked="actionClicked" inputClassses="w-full" show-action show-pinned background-overlay></case-auto-suggest>
          </div>
        </div>
      </template>


      <vs-spacer></vs-spacer>

      <!-- NOTIFICATIONS -->
      <vs-dropdown vs-custom-content vs-trigger-click>
        <feather-icon icon="BellIcon" class="cursor-pointer mx-6 mt-1" :badge="unreadNotifications.length"></feather-icon>
        <vs-dropdown-menu class="notification-dropdown">
          <div class="notification-top text-center p-5 bg-primary text-white">
            <h3 class="text-white">{{ unreadNotifications.length }} New</h3>
            <p class="opacity-75">App Notifications</p>
          </div>
          <VuePerfectScrollbar ref="mainSidebarPs" class="scroll-area--nofications p-0" :settings="settings">
          <ul class="bordered-items">
            <li v-for="ntf in unreadNotifications" :key="ntf.index" class="flex justify-between px-4 py-4 notification cursor-pointer">
              <div class="flex items-start">
                <feather-icon :icon="ntf.icon" :svgClasses="[`text-${ntf.category}`, 'stroke-current mr-1 h-6 w-6']"></feather-icon>
                <div class="mx-2">
                  <span class="font-medium block notification-title" :class="[`text-${ntf.category}`]">{{ ntf.title }}</span>
                  <small>{{ ntf.msg }}</small>
                </div>
              </div>
              <small class="mt-1 whitespace-no-wrap">{{ elapsedTime(ntf.time) }}</small>
            </li>
            <li class="flex justify-around p-3 notification cursor-pointer">
              <small>View All Notifications</small>
            </li>
          </ul>
          </VuePerfectScrollbar>
        </vs-dropdown-menu>
      </vs-dropdown>

      <!-- SEARCHBAR -->
      <div class="search-full-container w-full h-full absolute pin-l rounded-lg" :class="{'flex': showFullSearch}" v-show="showFullSearch">
        <case-auto-suggest :autoFocus="showFullSearch" :data="navbarSearchAndPinList" @selected="selected" ref="navbarSearch" @closeSearchbar="showFullSearch = false" placeholder="Search..." class="w-full" inputClassses="w-full input-no-border no-icon-border" icon="SearchIcon" background-overlay></case-auto-suggest>
        <div class="absolute pin-r h-full z-50">
          <feather-icon icon="XIcon" class="px-4 cursor-pointer h-full close-search-icon" @click="showFullSearch = false"></feather-icon>
        </div>
      </div>
      <feather-icon icon="SearchIcon" @click="showFullSearch = true" class="cursor-pointer"></feather-icon>

      <!-- USER META -->
      <div class="the-navbar__user-meta flex items-center sm:ml-5 ml-2">
        <div class="text-right leading-tight hidden sm:block">
          <p class="font-semibold">John Doe</p>
          <small>Available</small>
        </div>
        <vs-dropdown vs-custom-content vs-trigger-click>
          <div class="con-img ml-3"><img :src="require(`@/assets/images/portrait/small/${activeUserInfo.img}`)" alt="" width="40" height="40" class="rounded-full shadow-md cursor-pointer block"></div>
          <vs-dropdown-menu>
            <ul style="min-width: 9rem">
              <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="$router.push('/pages/profile')"><feather-icon icon="UserIcon" svgClasses="w-4 h-4"></feather-icon> <span class="ml-2">Profile</span></li>
              <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="$router.push('/apps/email')"><feather-icon icon="MailIcon" svgClasses="w-4 h-4"></feather-icon> <span class="ml-2">Inbox</span></li>
              <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="$router.push('/apps/todo')"><feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4"></feather-icon> <span class="ml-2">Tasks</span></li>
              <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="$router.push('/apps/chat')"><feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4"></feather-icon> <span class="ml-2">Chat</span></li>
              <vs-divider class="m-1"></vs-divider>
              <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="$router.push('/pages/login')"><feather-icon icon="LogOutIcon" svgClasses="w-4 h-4"></feather-icon> <span class="ml-2">Logout</span></li>
            </ul>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>

    </vs-navbar>
  </div>
</div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import CaseAutoSuggest from '../auto-suggest/AutoSuggest.vue';

export default {
  name: 'case-header',
  props: {
    navbarColor: {
      type: String,
      default: '#fff',
    },
  },
  data() {
    return {
      navbarSearchAndPinList: {},
      searchQuery: '',
      showFullSearch: false,
      unreadNotifications: [
        { index: 0, title: 'New Message', msg: 'Are your going to meet me tonight?', icon: 'MessageSquareIcon', time: 'Wed Jan 30 2019 07:45:23 GMT+0000 (GMT)', category: 'primary' },
        { index: 1, title: 'New Order Recieved', msg: 'You got new order of goods.', icon: 'PackageIcon', time: 'Wed Jan 30 2019 07:45:23 GMT+0000 (GMT)', category: 'success' },
        { index: 2, title: 'Server Limit Reached!', msg: 'Server have 99% CPU usage.', icon: 'AlertOctagonIcon', time: 'Thu Jan 31 2019 07:45:23 GMT+0000 (GMT)', category: 'danger' },
        { index: 3, title: 'New Mail From Peter', msg: 'Cake sesame snaps cupcake', icon: 'MailIcon', time: 'Fri Feb 01 2019 07:45:23 GMT+0000 (GMT)', category: 'primary' },
        { index: 4, title: 'Bruce\'s Party', msg: 'Chocolate cake oat cake tiramisu marzipan', icon: 'CalendarIcon', time: 'Fri Feb 02 2019 07:45:23 GMT+0000 (GMT)', category: 'warning' },
      ],
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.60,
      },
      autoFocusSearch: false,
      showBookmarkPagesDropdown: false,
    };
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    '$route'() {
      if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false;
    },
  },
  computed: {
    data() {
      return this.$store.state.navbarSearchAndPinList;
    },
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
    sidebarWidth() {
      return this.$store.state.sidebarWidth;
    },
    breakpoint() {
      return this.$store.state.breakpoint;
    },
    classObj() {
      if (this.sidebarWidth === 'default') return 'navbar-default';
      if (this.sidebarWidth === 'reduced') return 'navbar-reduced';
      return 'navbar-full';
    },
    starredPages() {
      return this.$store.getters.starredPages;
    },
    starredPagesLimited() { return this.starredPages.slice(0, 10); },
    starredPagesMore() { return this.starredPages.slice(10); },
  },
  methods: {
    updateLocale(locale) {
      this.$i18n.locale = locale;
    },
    showSidebar() {
      this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
    },
    selected(item) {
      this.$router.push(item.url);
      this.showFullSearch = false;
    },
    actionClicked(item) {
      // e.stopPropogation();
      this.$store.dispatch('updateStarredPage', { index: item.index, val: !item.highlightAction });
    },
    showNavbarSearch() {
      this.showFullSearch = true;
    },
    showSearchbar() {
      this.showFullSearch = true;
    },
    elapsedTime(startTime) {
      const x = new Date(startTime);
      const now = new Date();
      let timeDiff = now - x;
      timeDiff /= 1000;

      const seconds = Math.round(timeDiff);
      timeDiff = Math.floor(timeDiff / 60);

      const minutes = Math.round(timeDiff % 60);
      timeDiff = Math.floor(timeDiff / 60);

      const hours = Math.round(timeDiff % 24);
      timeDiff = Math.floor(timeDiff / 24);

      const days = Math.round(timeDiff % 365);
      timeDiff = Math.floor(timeDiff / 365);

      const years = timeDiff;

      if (years > 0) {
        return `${years} ${years > 1 ? 'Years' : 'Year'} ago`;
      }
      if (days > 0) {
        return `${days} ${days > 1 ? 'Days' : 'day'} ago`;
      }
      if (hours > 0) {
        return `${hours} ${hours > 1 ? 'Hours' : 'Hour'} ago`;
      }
      if (minutes > 0) {
        return `${minutes} ${minutes > 1 ? 'Mins' : 'Min'} ago`;
      }
      if (seconds > 0) {
        return `${seconds} ${seconds > 1 ? 'Seconds' : 'Second'} ago`;
      }

      return 'Just Now';
    },
    outside() {
      this.showBookmarkPagesDropdown = false;
    },
  },
  directives: {
    'click-outside': {
      bind(el, binding) {
        const { bubble } = binding.modifiers;
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;
        document.addEventListener('click', handler);
      },

      unbind(el) {
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      },
    },
  },
  components: {
    CaseAutoSuggest,
    VuePerfectScrollbar,
  },
};
</script>
