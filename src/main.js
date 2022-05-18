import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/scss/style.scss"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapLocationDot, faAt, faLink, faArrowLeft, faArrowRight, faArrowTurnUp, faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin }from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
app.use(router)

library.add(faMapLocationDot, faGithub, faLinkedin, faAt, faLink, faArrowLeft, faArrowRight, faArrowTurnUp, faArrowTurnDown)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
