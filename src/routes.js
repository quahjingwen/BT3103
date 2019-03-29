import SearchModules from "./components/searchModules.vue";
import ProfilePage from "./components/ProfilePage.vue";
import singleModule from "./components/singleModule.vue";
import Recommendations from "./components/Recommendations.vue"

export default [
  {
    path: '/profilePage',
    component: ProfilePage
  },
  {
    path: '/searchModule',
    component: SearchModules
  },
  {
    path:"/module/:id",
    name: 'SingleModule',
    component: singleModule
  },
  {
    path:"/recommendations",
    name: 'Recommendations',
    component: Recommendations
  }
]