<template lang="pug">
    .pharmacies
        .pharmacies__header
            h1.pharmacies__title.title 2: Select Pharmacies
            span.pharmacies__entity for {{entity ? entities.find(item => item.legalEntityID == entity).legalEntityName : ''}}
        .table.pharmacies__table
            .table__caption
                .table__caption-cell Pharmacy
                .table__caption-cell Street
                .table__caption-cell City
                .table__caption-cell Country
            .table__button(v-for='item in pharmacies' v-if='item.legalEntityID == entity', :class='{"table__button_active": checkedPharmacies.includes(item.pharmaID)}')
                svg.table__ok
                    use(href='icons/icons.svg#check')
                label.table__item
                    input(type='checkbox', :value='item.pharmaID', v-model='checkedPharmacies')
                    .table__item-cell {{item.pharmaName}}
                    .table__item-cell {{item.address_1 + item.address_2}}
                    .table__item-cell {{item.city}}
                    .table__item-cell {{item.country}}
        .pharmacies__buttons
            button.pharmacies__button.button.button_back(@click='back()') Back
            button.pharmacies__button.button.button_next(:disabled='!checkedPharmacies.length', @click='next()') Enter Contract Terms
</template>
<script>
import entities from '../../../../json/legalentity.json';
import data from '../../../../json/pharmacy.json'
export default {
    props: {
        'entity': {}
    },
    data() {
        return {
            pharmacies: data,
            entities: entities,
            checkedPharmacies: [],
        }
    },
    methods: {
        back() {
            this.checkedPharmacies = [];
            this.$parent.active = "entity";
        },
        next() {
            this.$parent.pharmacies = this.checkedPharmacies;
            this.$parent.active = 'contract-terms';
        }
    }
    
}
</script>