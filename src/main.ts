import { createApp } from "vue"
import App from "./App.vue"
import router from "./helpers/router"
import "./assets/index.css"
import "material-design-icons-iconfont/dist/material-design-icons.css"
import {createVuetify, ThemeDefinition} from "vuetify"
import "vuetify/dist/vuetify.css"
import "vuetify/styles"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { aliases, md } from "vuetify/iconsets/md"

import {
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter,
	faYoutube
} from "@fortawesome/free-brands-svg-icons"

import {
	faChevronUp,
	faChevronDown,
	faHeart
} from "@fortawesome/free-solid-svg-icons"

library.add(
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter,
	faYoutube,
	faChevronDown,
	faChevronUp,
	faHeart
)


const myCustomLightTheme: ThemeDefinition = {
	dark: false,
	colors: {
		background: "#FFFFFF",
		surface: "#FFFFFF",
		primary: "#9b9b9b",
		secondary: "#03DAC6",
		"es-theme-col":"#426B85",
		"es-theme-col-2":"#B00835",
		error: "#B00020",
		info: "#2196F3",
		success: "#419844",
		warning: "#FB8C00",
		anchor: "#2c2c2c", // defaults to 'primary', overrided to another color
	}
}

const myCustomDarkTheme: ThemeDefinition = {
	dark: true,
	colors: {
		//Here we are just appending at the default theme colors.
		"es-theme-col":"#426B85",
		"es-theme-col-2":"#B00835",
		anchor: "#e0e0e0", // defaults to 'primary', overrided to another color
	}
}


const vuetify = createVuetify({
	components,
	directives,
	ssr: true,
	icons: {
		defaultSet: "md",
		aliases,
		sets: {
			md,
		},
	},
	theme: {
		defaultTheme: "myCustomLightTheme",
		themes: {
			myCustomLightTheme,
			myCustomDarkTheme
		},
	},
})

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.use(router)
	.use(vuetify)
	.mount("#app")

