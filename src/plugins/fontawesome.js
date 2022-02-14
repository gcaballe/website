import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'

library.add(fas)
library.add(faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)
