<script>
export default {
    data() {
        return {
            contractTerms: {
                contractType: '',
                serviceAgreementNum: '',
                contractStartDate: '',
                contractEndDate: '',
                location: '',
                contractorName: '',
            }
        }
    },
    methods: {
        back() {
            this.$parent.active = 'pharmacies';
            this.resetForm();
        },
        resetForm() {
            this.contractTerms.contractType = ''; 
            this.contractTerms.serviceAgreementNum = ''; 
            this.contractTerms.contractStartDate = ''; 
            this.contractTerms.contractEndDate = ''; 
            this.contractTerms.location = ''; 
            this.contractTerms.contractorName = ''; 
        },
        next() {
            this.$parent.contractTerms = this.contractTerms;
            this.$parent.active = 'results';
        }
    }
}
</script>
<template lang="pug">
    .contract-terms
        h1.contract-terms__title 3: Enter Contract Terms
        .contract-terms__container
            label.contract-terms__label(for='contract-type') Contract type
            select.contract-terms__input(id='contract-type', v-model='contractTerms.contractType')
                option Charter
                option Order
                option Proxy
                option Certificate
            label.contract-terms__label(for='servise-agreement-num') Servise Agreement #
            input.contract-terms__input(id='servise-agreement-num', type="number", min="0", v-model='contractTerms.serviceAgreementNum')
            label.contract-terms__label(for='contract-start-date') Contract Start Date
            input.contract-terms__input(id='contract-start-date', type="date", :max='contractTerms.contractEndDate', v-model='contractTerms.contractStartDate' onkeydown='return false;')
            label.contract-terms__label(for='contract-end-date') Contract End Date
            input.contract-terms__input(id='contract-end-date', type="date", :min='contractTerms.contractStartDate' v-model='contractTerms.contractEndDate' onkeydown='return false;')
            label.contract-terms__label(for='contract-end-date') Location
            input.contract-terms__input(id='contract-end-date', type="text", v-model='contractTerms.location')
            label.contract-terms__label(for='contract-end-date') Contractor Name
            input.contract-terms__input(id='contract-end-date', type="text", v-model='contractTerms.contractorName')
        
        .contract-terms__buttons
            button.pharmacies__button.button.button_back(@click='back()') Back
            button.pharmacies__button.button.button_next(
                :disabled='contractTerms.contractType == "" || contractTerms.serviceAgreementNum < 0 || contractTerms.serviceAgreementNum == "" || contractTerms.contractStartDate == "" || contractTerms.contractEndDate == "" || contractTerms.location == "" || contractTerms.contractorName == ""', 
                @click='next()'
            ) Show Results
</template>