/**
 * 사이드바에 들어갈 아이템 리스트 설정
 *
 * 헤더 구조
 * header: 헤더 이름
 * --------------------
 * 아이템 구조
 * url: 라우터 경로 null이면 라우터로 이동안함 (children이 있을 때 null로)
 * name: 사이드바에 표시할 이름
 * slug: 라우터 이름
 * icon: 사이드바에 표시할 아이콘 src/components/FeatherIcon.vue 참고
 * tag: 뱃지에 표시할 내용
 * tagColor: 뱃지 컬러
 * submenu: 자식 아이템 리스트 (배열)
 * isDisabled: disable 여부
 */
export default [
  {
    url: null,
    name: '메인',
    slug: 'main',
    icon: 'HomeIcon',
    submenu: [
      {
        url: '/home',
        name: '홈 화면',
      },
      {
        url: '/test',
        name: '테스트 화면',
      },
      {
        url: '/hello',
        name: '테스트 화면2',
      },
    ],
  },
  {
    header: '헤더 테스트',
  },
  {
    url: null,
    name: '풀페이지',
    slug: 'fullpage',
    icon: 'HomeIcon',
    submenu: [
      {
        url: '/fullpage',
        name: '풀 페이지 테스트',
      },
    ],
  },
];
