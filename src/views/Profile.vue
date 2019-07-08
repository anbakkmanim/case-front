<!-- =========================================================================================
    File Name: Profile.vue
    Description: Profile Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="profile-page">

        <!-- PROFILE HEADER -->
        <div class="profile-header">
            <div class="relative">
                <div class="cover-container rounded-t-lg">
                    <img :src="require(`@/assets/images/profile/user-uploads/${userCoverImg}`)" alt="user-profile-cover" class="responsive block">
                </div>
                <div class="profile-img-container pointer-events-none">
                    <div>
                        <vs-avatar class="user-profile-img" :src="require(`@/assets/images/profile/user-uploads/${userInfo.profileImg}`)" size="85px" />
                    </div>
                    <div class="profile-actions pointer-events-auto flex">
                        <vs-button icon-pack="feather" radius icon="icon-edit-2"></vs-button>
                        <vs-button icon-pack="feather" radius icon="icon-settings" class="ml-2 lg:ml-4"></vs-button>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-end flex-wrap profile-header-nav p-6">

                <div class="block sm:hidden">
                    <feather-icon @click="isNavOpen = !isNavOpen" icon="AlignJustifyIcon" v-show="!isNavOpen" class="vx-navbar-toggler" />
                    <feather-icon icon="XIcon" v-show="isNavOpen" @click="isNavOpen = !isNavOpen" class="vx-navbar-toggler" />
                </div>
                <div :class="isNavOpen ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                    <div class="text-sm sm:flex-grow">
                        <ul class="sm:flex justify-around mt-8 w-full md:mt-0 md:ml-auto md:w-3/4">
                            <li class="p-2 sm:p-0"><router-link to="/pages/profile">Timeline</router-link></li>
                            <li class="p-2 sm:p-0"><router-link to="/pages/profile">About</router-link></li>
                            <li class="p-2 sm:p-0"><router-link to="/pages/profile">Photos</router-link></li>
                            <li class="p-2 sm:p-0"><router-link to="/pages/profile">Friends</router-link></li>
                            <li class="p-2 sm:p-0"><router-link to="/pages/profile">Videos</router-link></li>
                            <li class="p-2 sm:p-0"><router-link to="/pages/profile">Events</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- <vx-navbar> -->
            <!-- </vx-navbar> -->
        </div>

        <!-- COL AREA -->
        <div class="vx-row">
          <!-- COL 1 -->
          <div class="vx-col w-full lg:w-1/3 mt-8">
            <vs-card title="About" class="mt-base text-left">
                <template slot="actions">
                    <feather-icon icon="MoreHorizontalIcon"></feather-icon>
                </template>
                <div class="user-bio text-xl font-bold m-5">
                    <p>보유현황</p>
                </div>
                <hr>
              <div class="text-lg text-yellow-500 m-8 float-right">0원</div>
              <div class="text-lg text-gray-800 m-8">나의 크레딧</div>
              <div class="mt-5">
                  <vs-button class="ml-8 mb-4" type="border" color="#CE9FFC">충전하기</vs-button>
              </div>
            </vs-card>
          </div>

            <!-- COL 2 -->
            <div class="vx-col w-full lg:w-2/3 mt-8">
                <vs-card class="mt-base" v-for="(post, index) in userPosts" :key="index">
                    <div>
                        <!-- POST HEADER -->
                        <div class="post-header flex justify-between mb-4">
                            <div class="flex items-center">
                                <div>
                                    <vs-avatar class="m-0" :src="require(`@/assets/images/profile/user-uploads/${userLatestPhotos[0]}`)" size="45px"></vs-avatar>
                                </div>
                                <div class="ml-4">
                                    <h6>{{ post.author }}</h6>
                                    <small>{{ post.time | date(true) }} at {{ post.time | time }}</small>
                                </div>
                            </div>
                            <div class="flex">
                                <feather-icon class="ml-4" icon="HeartIcon" :svgClasses="{'text-danger fill-current stroke-current': post.isLiked}"></feather-icon>
                            </div>
                        </div>

                        <!-- POST CONTENT -->
                        <div class="post-content">
                            <p>{{ post.text }}</p>
                        </div>
                        <div class="post-media-container mb-6 mt-4">
                            <ul class="flex post-media-list">
                                <li class="post-media m-1 w-full" v-for="(media, mediaIdex) in post.media.slice(0, 2)" :key="mediaIdex">
                                    <img class="responsive rounded" :src="require(`@/assets/images/profile/post-media/${media.img}`)" alt="user-upload" v-if="mediaType(media) == 'image'">
                                    <video-player ref="player" class="media-video-player" :options="playerOptions(media)" v-else-if="mediaType(media) == 'video'" />
                                    <span class="text-lg text-primary" v-else>Unknown Media Type</span>
                                </li>
                            </ul>
                            <span class="flex justify-end" v-if="post.media.length > 2">
                                <a class="inline-flex items-center text-sm" href=""><span>View All</span> <feather-icon icon="ChevronsRightIcon" svgClasses="h-4 w-4"></feather-icon></a>
                            </span>
                        </div>


                    </div>
                </vs-card>
            </div>

        </div>

    </div>
</template>

<script>
// import { videoPlayer } from 'vue-video-player';
// import 'video.js/dist/video-js.css';

export default {
  data() {
    return {
      isNavOpen: false,
      userPoll: '',
      userInfo: {
        profileImg: 'user-13.jpg',
      },
      mediaExtensions: { img: ['jpg', 'jpeg', 'png', 'bmp', 'gif', 'exif', 'tiff'], video: ['avi', 'flv', 'wmv', 'mov', 'mp4', '3gp'] },
      suggestedFriends: [
        { name: 'Carissa Dolle', avatar: 'avatar-s-5.png', mutualFriends: 6 },
        { name: 'Liliana Pecor', avatar: 'avatar-s-6.png', mutualFriends: 3 },
        { name: 'Isidra Strunk', avatar: 'avatar-s-7.png', mutualFriends: 2 },
        { name: 'Gerald Licea', avatar: 'avatar-s-8.png', mutualFriends: 1 },
        { name: 'Kelle Herrick', avatar: 'avatar-s-9.png', mutualFriends: 1 },
        { name: 'Cesar Lee', avatar: 'avatar-s-10.png', mutualFriends: 1 },
        { name: 'John Doe', avatar: 'avatar-s-11.png', mutualFriends: 1 },
        { name: 'Tonia Seabold', avatar: 'avatar-s-12.png', mutualFriends: 1 },
      ],
      userCoverImg: 'cover.jpg',
      userLatestPhotos: ['user-01.jpg', 'user-02.jpg', 'user-04.jpg', 'user-03.jpg', 'user-05.jpg', 'user-06.jpg', 'user-07.jpg', 'user-08.jpg', 'user-09.jpg'],
      userPosts: [{
        author: 'Leeanna Alvord',
        time: 'Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)',
        isLiked: true,
        text: 'I love jujubes wafer pie ice cream tiramisu. Chocolate I love pastry pastry sesame snaps wafer. Pastry topping biscuit lollipop topping I love lemon drops sweet roll bonbon. Brownie donut icing.',
        media: [{ img: '2.jpg' }],
        likes: 145,
        comments: 77,
        usersLiked: [
          { name: 'Trina Lynes', img: 'avatar-s-1.png' },
          { name: 'Lilian Nenez', img: 'avatar-s-2.png' },
          { name: 'Alberto Glotzbach', img: 'avatar-s-3.png' },
          { name: 'George Nordick', img: 'avatar-s-4.png' },
          { name: 'Vennie Mostowy', img: 'avatar-s-5.png' },
        ],
        commentbox: '',
        usersCommented: [
          { comment: 'orthoplumbate morningtide naphthaline exarteritis', author: 'Kitty Allanson', img: 'avatar-s-6.png', time: 'Mon Dec 10 2018 08:56:05 GMT+0000 (GMT)' },
          { comment: 'blockiness pandemy metaxylene speckle coppy', author: 'Jeanie Bulgrin', img: 'avatar-s-8.png', time: 'Mon Dec 10 2018 08:55:00 GMT+0000 (GMT)' },
        ],
      },
      ],
      suggestedPages: [
        { img: 'page-09.jpg', title: 'Rockose', type: 'Company' },
        { img: 'page-08.jpg', title: 'The Devil\'s', type: 'Clothing Store' },
        { img: 'page-03.jpg', title: 'The Magician', type: 'Public Figure' },
        { img: 'page-02.jpg', title: 'AC/DC', type: 'Music' },
        { img: 'page-07.jpg', title: 'eat hard', type: 'restaurant / bar' },
        { img: 'page-04.jpg', title: 'B4B', type: 'Beauty Store' },
        { img: 'page-05.jpg', title: 'Kylie Jenner', type: 'Public Figure' },
        { img: 'page-01.jpg', title: 'RDJ', type: 'Actor' },
        { img: 'page-06.jpg', title: 'Taylor Swift', type: 'Music' },
      ],
      polls: [{
        id: 59,
        title: 'Who is the best actor in Marvel Cinematic Universe?',
        options: [{
          text: 'RDJ',
          value: 'rdj',
          voted: 58,
          usersVoted: [
            { name: 'Tonia Seabold', avatar: 'avatar-s-12.png' },
            { name: 'Carissa Dolle', avatar: 'avatar-s-5.png' },
            { name: 'Kelle Herrick', avatar: 'avatar-s-9.png' },
            { name: 'Len Bregantini', avatar: 'avatar-s-10.png' },
            { name: 'John Doe', avatar: 'avatar-s-11.png' },
            { name: 'Tonia Seabold', avatar: 'avatar-s-12.png' },
            { name: 'Dirk Fornili', avatar: 'avatar-s-2.png' },
          ],
        },
        {
          text: 'Chris Hemsworth',
          value: 'chris hemsworth',
          voted: 16,
          usersVoted: [
            { name: 'Liliana Pecor', avatar: 'avatar-s-6.png' },
            { name: 'Kasandra Nalevanko', avatar: 'avatar-s-1.png' },
          ],
        },
        {
          text: 'mark ruffalo',
          value: 'mark ruffalo',
          voted: 8,
          usersVoted: [
            { name: 'Lorelei Lacsamana', avatar: 'avatar-s-4.png' },
          ],
        },
        {
          text: 'Chris Evans',
          value: 'chris evans',
          voted: 16,
          usersVoted: [
            { name: 'Jeanie Bulgrin', avatar: 'avatar-s-8.png' },
            { name: 'Graig Muckey', avatar: 'avatar-s-3.png' },
          ],
        },
        ],

      }],
      twitterFeeds: [{
        authorAvatar: 'avatar-s-12.png',
        authorUsername: 'tiana59',
        authorDisplayName: 'Tiana Vercetti',
        content: 'I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups.',
        tags: ['js', 'vuejs'],
        time: 'Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)',
      },
      {
        authorAvatar: 'avatar-s-12.png',
        authorUsername: 'tiana59',
        authorDisplayName: 'Tiana Vercetti',
        content: 'Carrot cake cake gummies I love I love tiramisu. Biscuit marzipan cookie lemon drops.',
        tags: ['python'],
        time: 'Mon Dec 11 2018 01:05:05 GMT+0000 (GMT)',
      },
      {
        authorAvatar: 'avatar-s-12.png',
        authorUsername: 'tiana59',
        authorDisplayName: 'Tiana Vercetti',
        content: 'I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups .',
        tags: [],
        time: 'Mon Dec 10 2018 03:33:05 GMT+0000 (GMT)',
      },
      {
        authorAvatar: 'avatar-s-12.png',
        authorUsername: 'tiana59',
        authorDisplayName: 'Tiana Vercetti',
        content: 'Muffin candy caramels. I love caramels tiramisu jelly. Pie I love wafer. Chocolate cake lollipop tootsie roll cake.',
        tags: ['django', 'vuejs'],
        time: 'Mon Dec 9 2018 08:47:05 GMT+0000 (GMT)',
      },

      ],
      wasSidebarOpen: null,
    };
  },
  computed: {
    mediaType() {
      return (media) => {
        if (media.img) {
          const ext = media.img.split('.').pop();
          if (this.mediaExtensions.img.includes(ext)) return 'image';
        } else if (media.sources && media.poster) {
          // other validations
          return 'video';
        }
      };
    },
    playerOptions() {
      return media => ({
        height: '360',
        fluid: true,
        autoplay: false,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: media.sources,
        poster: media.poster,
      });
    },
  },
  methods: {
    loadContent() {
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: '#button-load-more-posts',
        scale: 0.45,
      });
      setTimeout(() => {
        this.$vs.loading.close('#button-load-more-posts > .con-vs-loading');
      }, 3000);
    },
  },
  // components: {
  //   videoPlayer,
  // },
  mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton;
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true);
  },
  beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/profile.scss";
</style>
