<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { OptionsObj, TableByScope } from 'src/types';
import { api } from 'src/api';
import { isValidTransactionHex } from 'src/utils/string-utils';
import { useQuasar } from 'quasar';
import { debounce } from 'src/utils/time';

export default defineComponent({
    name: 'HeaderSearch',
    setup() {
        const router = useRouter();
        const $q = useQuasar();

        const inputValue = ref('');
        const options = ref<OptionsObj[]>([]);
        const isLoading = ref(false);

        const fetchData = async () => {
            if (inputValue.value === '') {
                options.value = [];
                return;
            }

            isLoading.value = true;
            const queryValue = inputValue.value.toLowerCase();

            await Promise.all([
                searchAccounts(queryValue),
                searchProposals(queryValue),
                searchTransactions(queryValue),
            ]).then((results) => {
                options.value = ([] as OptionsObj[]).concat.apply([], results);
            });

            isLoading.value = false;
        };

        const onInput = debounce(fetchData, 200);

        watch(inputValue, onInput);

        function searchAccounts(value: string): OptionsObj[] {
            try {
                const results = [] as OptionsObj[];
                const accounts = [{ payer: cleanSearchInput(value) }] as TableByScope[];

                if (value.includes('eosio')) {
                    accounts.unshift({
                        payer: 'eosio',
                    } as TableByScope);
                }

                if (accounts.length > 0) {
                    results.push({
                        label: 'Accounts',
                        to: '',
                        isHeader: true,
                    });

                    accounts.forEach((user) => {
                        if (user.payer.includes(value)) {
                            results.push({
                                label: user.payer,
                                to: `/account/${user.payer}`,
                                isHeader: false,
                            });
                        }
                    });
                }
                return results;
            } catch (error) {
                return;
            }
        }

        async function searchProposals(value: string): Promise<OptionsObj[]> {
            try {
                const results = [] as OptionsObj[];
                const { proposals } = await api.getProposals({
                    proposal: value,
                });
                if (proposals.length > 0) {
                    results.push({
                        label: 'Proposals',
                        to: '',
                        isHeader: true,
                    });

                    proposals.forEach((item) => {
                        results.push({
                            label: item.proposal_name,
                            to: `/proposal/${item.proposal_name}`,
                            isHeader: false,
                        });
                    });
                }
                return results;
            } catch (error) {
                return;
            }
        }

        function cleanSearchInput(value: string): string {
            // remove leading and trailing spaces and periods from search input for query
            return value.replace(/^[\s.]+|[\s.]+$/g, '');
        }

        async function searchTransactions(value: string): Promise<OptionsObj[]> {
            const results = [] as OptionsObj[];

            if (value.length !== 64) {
                return results;
            }

            try {
                const transactions = await api.getTransaction(value);

                if (transactions?.actions) {
                    results.push({
                        label: 'Transactions',
                        to: '',
                        isHeader: true,
                    });

                    results.push({
                        label: value,
                        to: `/transaction/${value}`,
                        isHeader: false,
                    });
                }
                return results;
            } catch (error) {
                return;
            }
        }

        async function handleGoTo(path?: string) {
            if (!inputValue.value) {
                return;
            }

            // if clicked/selected from dropdown search results
            if (typeof path === 'string') {
                await router.push(path);
                router.go(0);
            }

            // transaction validation
            if (isValidTransactionHex(inputValue.value)) {
                await router.push({
                    name: 'transaction',
                    params: { transaction: inputValue.value },
                });
                router.go(0);

                // key validation
            } else if (
                (inputValue.value.length === 53 && inputValue.value.startsWith('EOS')) ||
        (inputValue.value.length === 57 && inputValue.value.startsWith('PUB_K1'))
            ) {
                await router.push({
                    name: 'key',
                    params: { key: inputValue.value },
                });
                router.go(0);

                // default to 'account'
            } else if (inputValue.value.length <= 13) {
                try {
                    await api.getAccount(inputValue.value.toLowerCase());
                    await router.push({
                        name: 'account',
                        params: {
                            account: inputValue.value.toLowerCase(),
                        },
                    });
                    router.go(0);
                    return;
                } catch (error) {
                    $q.notify(`account ${inputValue.value} not found!`);
                }
            }
        }

        return {
            inputValue,
            options,
            isLoading,
            handleGoTo,
        };
    },
});
</script>

<template>
<q-select
    borderless
    dense
    filled
    use-input
    hide-selected
    fill-input
    hide-bottom-space
    input-style="color:#666666"
    color="#666666"
    :loading="isLoading"
    :model-value="inputValue"
    :options="options"
    :option-disable="(item) => item.isHeader"
    class="search-input"
    @input-value="(value) => inputValue = value"
    @keyup.enter="handleGoTo"
>
    <template #prepend>
        <q-icon
            class="rotate-90"
            name="search"
            color="#666666"
            size="20px"
        />
    </template>
    <template #no-option>
        <q-item>
            <q-item-section class="text-center">
                <q-item-label v-if="isLoading">Searching...</q-item-label>
                <q-item-label v-else>{{ inputValue ? 'Nothing found' : 'Search by accounts, keys, proposals and transactions' }}</q-item-label>
            </q-item-section>
        </q-item>
    </template>
    <template #option="scope">

        <q-item-label v-if="scope.opt.isHeader" header>{{ scope.opt.label }}</q-item-label>
        <q-item
            v-else
            v-bind="scope.itemProps"
            exact="exact"
            clickable="clickable"
            @click="handleGoTo(scope.opt.to)"
        >
            <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
            </q-item-section>
        </q-item>
    </template>
</q-select>
</template>

<style lang="sass">
.search-input
  background: rgba(255, 255, 255, 0.45)
  border-radius: 4px

.search-input .q-select__dropdown-icon
  color: #666666

.q-field--filled .q-field__control
    background: #FAFAFA
    border-radius: 4px
    border: 1px solid #F0F0F0

.q-field--focused.q-field--filled .q-field__control
  border-radius: 4px
  border: 1px solid #5833BC
  background: #FAFAFA

.q-field--filled.q-field--highlighted .q-field__control:before
    background: none

.q-field--filled .q-field__control:after
    background: transparent

.q-field--filled .q-field__control:before
    border-bottom: none
    background: transparent
</style>
