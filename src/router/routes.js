import SearchModules from "../components/searchModules.vue";
import ProfilePage from "../components/ProfilePage.vue";

export const routes = [
    {
        path: "/searchModules",
        name: "searchModules",
        component: SearchModules
      },
      {
        path: "/ProfilePage",
        name: "ProfilePage",
        component: ProfilePage
      }
    ];