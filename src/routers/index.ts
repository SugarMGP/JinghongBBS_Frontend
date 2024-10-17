import { createRouter, createWebHistory } from 'vue-router'
import { loginStore } from '../stores/store';
import RegisterPage from '../pages/registerPage.vue';
import LoginPage from '../pages/loginPage.vue';
import MainPage from '../pages/mainPage.vue';
import CommunityPage from '../pages/mainPages/communityPage.vue';
import MyPostsPage from '../pages/mainPages/myPostsPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/Main'
  },
  {
    path: '/Login',
	name: 'Login',
    component: LoginPage,
  },
  {
    path: '/Register',
	name: 'Register',
    component: RegisterPage,
  },
  {
	path:'/Main',
	name:'Main',
	component:MainPage,
	children:[
	  {
		path:'Community',
		name:'Community',
		component:CommunityPage,
	  },
	  {
		path:'MyPosts',
		name:'MyPosts',
		component:MyPostsPage,
	  },
	]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, _, next) => {
	const login = loginStore().loginStatus
	if (login === false) {
		if (to.path === "/Login" || to.path === "/Register") {
			next();
		}
		else {
			next("/Login");
		}
	}
	else {
		if (to.path === "/Login" || to.path === "/Register") {
			next("/Main");
		} else {
			next();
		}
	}
});

export default router