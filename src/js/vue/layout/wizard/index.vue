<template lang="pug">
    .wizard
        entities(v-show='active == "entity"')
        pharmacies(v-show='active == "pharmacies"' :entity='entity')
        contract-terms(v-show='active == "contract-terms"')
        results(v-if='active == "results"', :entity='entity', :pharmacies='pharmacies', :contractTerms='contractTerms')
</template>
<script>
import Entities from './entities.vue';
import Pharmacies from './pharmacies.vue';
import ContractTerms from './contract-terms.vue';
import Results from './results.vue';
export default {
    data() {
        return {
            entity: null,
            pharmacies: [],
            active: 'entity',
            contractTerms: {},
        }
    },
    components: {
        'entities': Entities,
        'pharmacies': Pharmacies,
        'contract-terms': ContractTerms,
        'results': Results,
    }
}
</script>

