<template lang="pug">
    .results
        h1.results__title Results
        .results__container
            h3.results__name Entity:
            span.results__value {{entity ? allEntities.find(item => item.legalEntityID == entity).legalEntityName : ''}}
            h3.results__name Pharmacies:
            .results__value.results__value_is-array
                span(v-for='pharmacy in pharmacies') {{pharmacy ? allPharmacies.find(item => item.pharmaID == pharmacy).pharmaName : ''}}
            h3.results__name Contract Type:
            span.results__value {{contractTerms.contractType}}
            h3.results__name Service Agreement #: 
            span.results__value {{contractTerms.serviceAgreementNum}}
            h3.results__name Contract Start Date:
            span.results__value {{contractTerms.contractStartDate}}
            h3.results__name Contract End Date:
            span.results__value {{contractTerms.contractEndDate}}
            h3.results__name Location:
            span.results__value {{contractTerms.location}}
            h3.results__name Contractor Name:
            span.results__value {{contractTerms.contractorName}}
        .results__buttons
            button.button.button_back(@click="back()") Back
</template>
<script>
import allEntities from '../../../../json/legalentity.json';
import allPharmacies from '../../../../json/pharmacy.json'
export default {
    props: {
        contractTerms: {},
        entity: null,
        pharmacies: null,
    },
    data() {
        return {
            allEntities: allEntities,
            allPharmacies: allPharmacies,
        }
    },
    methods: {
        back() {
            this.$parent.active ='contract-terms';
        }
    }
}
</script>