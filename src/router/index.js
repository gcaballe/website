import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import scrollSpy from '@sidsbrmnn/scrollspy'

window.onload = function () {
	scrollSpy('#link-list', {
		sectionSelector: 'section',
		targetSelector: 'a',
		offset: 0, // in pixels
		hrefAttribute: 'href',
		activeClass: 'active'
	});
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
  base: "/website/"
})

export default router
