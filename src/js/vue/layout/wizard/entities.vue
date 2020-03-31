<template lang="pug">
    .entities
        h1.entities__title.title 1: Select Legal Entity
        .entities__table.table
            .table__caption
                .table__caption-cell Legal Entity
                .table__caption-cell Street
                .table__caption-cell City
                .table__caption-cell Country
            .table__button(v-for='item in legalEntities', :class='{"table__button_active": checkedEntity == item.legalEntityID}')
                svg.table__ok
                    use(href='icons/icons.svg#check')
                label.table__item
                    input(type='radio', name='entities', :value='item.legalEntityID', v-model='checkedEntity')
                    .table__item-cell {{item.legalEntityName}}
                    .table__item-cell {{item.address1 + item.address2}}
                    .table__item-cell {{item.city}}
                    .table__item-cell {{item.country}}
        .entities__buttons
            button.entities__button.button.button_next(:disabled='!checkedEntity', @click='next()') Select Pharmacies

</template>
<script>
import data from '../../../../json/legalentity.json';
export default {
    data() {
        return {
            legalEntities: data,
            checkedEntity: null,
        }
    },
    methods: {
        next() {
            this.$parent.entity = this.checkedEntity;
            this.$parent.active = 'pharmacies';
        }
    }
    
}
</script>