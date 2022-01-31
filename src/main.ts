import { createApp } from "vue"
import App from "./App.vue"
import router from "./helpers/router"
import "./index.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import {
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter,
	faYoutube
} from "@fortawesome/free-brands-svg-icons"

import {
	faChevronUp,
	faChevronDown
} from "@fortawesome/free-solid-svg-icons"

library.add(
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter,
	faYoutube,
	faChevronDown,
	faChevronUp
)

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.use(router)
	.mount("#app")
