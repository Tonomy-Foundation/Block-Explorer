<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import { Token } from 'src/types';

export default defineComponent({
    name: 'CoinSelectorDialog',
    props: {
        availableTokens: {
            required: true,
            type: Array as PropType<Token[]>,
        },
        updateSelectedCoin: {
            type: Function,
            required: true,
        },
    },
    setup(props) {
        const search = ref('');
        const filteredTokens = ref<Token[]>([]);

        const filterTokens = () => {
            if (search.value.length > 0) {
                filterByText(tokensWithBalance());
            } else {
                filteredTokens.value = tokensWithBalance();
            }
        };

        const filterByText = (tokens: Token[]) => {
            filteredTokens.value = tokens.filter(token => (
                token.symbol.toLowerCase().includes(search.value.toLowerCase()) ||
                token.contract.toLowerCase().includes(search.value.toLowerCase())
            ));
        };

        const tokensWithBalance = () => props.availableTokens.filter(token => token.amount > 0);

        watch(search, () => {
            void filterTokens();
        });

        return {
            search,
            filteredTokens,
            filterTokens,
            filterByText,
        };
    },
});
</script>

<template>

<q-dialog class="dialogContainer" @show="filterTokens">
    <q-card class="dialogCard">
        <div class="dialogHeader">
            <div class="row justify-between items-center q-pt-sm-center">
                <div class="text-h6 q-pl-md">Select a token</div>
                <div class="q-pr-sm">
                    <q-btn
                        v-close-popup
                        size="12px"
                        flat
                        dense
                        round
                        icon="clear"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-12 q-pa-sm">
                    <q-input
                        v-model="search"
                        debounce="500"
                        outlined
                        dark
                        round="round"
                        placeholder="Search contract name or symbol"
                    />
                </div>
            </div>
        </div>
        <q-separator/>
        <q-list class="dialogList">
            <q-item
                v-for="token in filteredTokens"
                :key="`${token.contract}-${token.symbol}`"
                v-close-popup
                clickable
                @click="updateSelectedCoin(token);"
            >
                <q-item-section>
                    <q-item-label>{{ token.symbol }}</q-item-label>
                    <q-item-label>{{ token.contract }}</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{ token.amount }}</q-item-label>
                </q-item-section>
            </q-item>
            <q-item v-if="availableTokens.length == 0">No tokens found</q-item>
        </q-list>
    </q-card>
</q-dialog>
</template>

<style lang="sass" scoped>
.dialogCard
  flex: 0 1 350px
  height: 80vh

.greyItem
  background: rgba($grey-4, 20%)

.addToken
  text-decoration: underline
  cursor: pointer

.addBtn
  color: white
  background-image: linear-gradient(to right, $deep-purple-2 20%, $light-blue-6 80% )

  &:hover
    background-image: linear-gradient(to left, $deep-purple-2 20%, $light-blue-6 80%)

.dialogCard
  background: radial-gradient(circle at 48% 100%, rgba(108, 35, 255, 1) 0%, rgba(84, 0, 253, 1) 20%, rgba(2, 27, 100, 1) 92%)
  color: white

  // Hide scrollbar for Chrome, Safari and Opera
  &::-webkit-scrollbar
    display: none

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none // IE and Edge
  scrollbar-width: none // Firefox

.dialogHeader
  position: sticky
  position: -webkit-sticky
  top: 0
  z-index: 1
  background: inherit

.dialogList
  z-index: -1
</style>
