import Vue from 'vue';
import Vuex from 'vuex'
import aut from './aut'
import kunstwerken from './kunstwerken'
import ontleningen from './ontleningen'
import artiesten from './artiesten'
import types from './types'
import lidkaarten from './lidkaarten'
import gebruikers from './gebruikers'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        aut,
        kunstwerken,
        ontleningen,
        artiesten,
        types,
        lidkaarten,
        gebruikers
    }
})
