<script lang="ts">
import { defineComponent, ref, watch, computed, onMounted } from 'vue';
import { api } from 'src/api';
import { Name, UInt32 } from '@greymass/eosio';
import { TableByScope } from 'src/types';

interface RequiredAccounts {
    permissionName: Name;
    threshold: UInt32;
    accounts: {
        weight: string;
        actor: Name;
        permission: Name;
    }[];
}

export default defineComponent({
    name: 'ProposalAuthorization',
    props: {
        actor: {
            type: String,
            default: '',
        },
        permission: {
            type: String,
            default: '',
        },
        disabledRemoveButton: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:actor', 'update:permission', 'remove'],
    setup(props, context) {
        const actorsOptions = ref<string[]>([]);
        const permissionsOptions = ref<Name[]>([]);
        const allRequiredAccounts = ref<RequiredAccounts[]>([]);

        const isActorError = ref(false);
        const isLoading = ref(false);
        const waitToSearch = ref<ReturnType<typeof setTimeout> | null>(null);

        const actorValue = computed({
            get: () => props.actor,
            set: (value) => {
                context.emit('update:actor', value);
            },
        });

        const permissionValue = computed({
            get: () => props.permission,
            set: (value) => {
                context.emit('update:permission', value);
            },
        });

        onMounted(async () => {
            if (props.actor) {
                await searchAccounts(props.actor);
            }
        });

        watch(actorValue, (currentValue) => {
            isLoading.value = true;
            isActorError.value = false;

            if (waitToSearch.value) {
                clearTimeout(waitToSearch.value);
            }

            if (currentValue === '') {
                actorsOptions.value = [];
                isLoading.value = false;
                context.emit('update:permission', '');
                return;
            }

            waitToSearch.value = setTimeout(() => {
                waitToSearch.value = null;
            }, 1000);
        });

        watch(waitToSearch, async (currentValue) => {
            if (currentValue) {
                return;
            }

            const queryValue = props.actor.toLowerCase();
            actorsOptions.value = [];

            await searchAccounts(queryValue);

            isLoading.value = false;
        });

        async function searchAccounts(value: string): Promise<void> {
            try {
                const accounts = [{ payer: value }] as TableByScope[];

                if (accounts.length > 0) {
                    // get table by scope for userres does not include system account
                    if ('eosio'.includes(value)) {
                        actorsOptions.value.push('eosio');
                    }

                    accounts.forEach((user) => {
                        actorsOptions.value.push(user.payer);
                    });

                    const account = await api.getAccount(value);

                    if (typeof account !== 'undefined') {
                        allRequiredAccounts.value = account.permissions.map(
                            permission => ({
                                permissionName: permission.perm_name,
                                threshold: permission.required_auth.threshold,
                                accounts: permission.required_auth.accounts.map(item => ({
                                    weight: `+ ${item.weight.toString()}`,
                                    actor: item.permission.actor,
                                    permission: item.permission.permission,
                                })),
                            }),
                        );

                        permissionsOptions.value = account.permissions.map(
                            permission => permission.perm_name,
                        );
                        context.emit('update:permission', permissionsOptions.value[0]);
                    }
                } else {
                    isActorError.value = true;
                }
            } catch (error) {
                isActorError.value = true;
                context.emit('update:permission', '');
            }
        }

        const requiredAccounts = computed(() => {
            if (!permissionValue.value) {
                return null;
            }
            return allRequiredAccounts.value.find(
                item => item.permissionName.toString() === permissionValue.value,
            );
        });

        return {
            actorValue,
            permissionValue,
            isActorError,
            requiredAccounts,
            actorsOptions,
            permissionsOptions,
            isLoading,
        };
    },
});
</script>

<template>
<div class="row q-col-gutter-md q-mb-md">
    <div class="col-6 col-sm">
        <q-select
            outlined
            dense
            use-input
            hide-selected
            fill-input
            hide-bottom-space
            reactive-rules
            bg-color="white"
            label="Actor"
            :loading="isLoading"
            :model-value="actorValue"
            :options="actorsOptions"
            :error="isActorError"
            @input-value="(value) => actorValue = value"
        >
            <template #no-option>
                <q-item>
                    <q-item-section class="text-center">
                        <q-item-label v-if="isLoading">Searching...</q-item-label>
                        <q-item-label v-else>{{ actor ? 'Nothing found' : 'Search by actor' }}</q-item-label>
                    </q-item-section>
                </q-item>
            </template>
        </q-select>
    </div>
    <div class="col-6 col-sm">
        <q-select
            v-model="permissionValue"
            outlined
            dense
            hide-bottom-space
            bg-color="white"
            label="Permission"
            :loading="isLoading"
            :options="permissionsOptions"
            :rules="[value => !!value || 'Field is required']"
        >
            <template #no-option>
                <q-item>
                    <q-item-section class="text-center">
                        <q-item-label v-if="isLoading">Searching...</q-item-label>
                        <q-item-label v-else>{{ actor ? 'Nothing found' : 'Search by actor before' }}</q-item-label>
                    </q-item-section>
                </q-item>
            </template>
        </q-select>
    </div>
    <div v-if="requiredAccounts?.accounts?.length > 0" class="col-auto">
        <q-btn
            flat
            padding="sm md"
            color="white"
            text-color="primary"
            title="Required accounts"
        >
            <q-icon class="cursor-pointer" name="people" size="20px"/>
            <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-card>
                    <q-card-section>
                        <div class="text-body1 text-weight-bold text-center">{{ requiredAccounts.permissionName }} ({{ requiredAccounts.threshold }})</div>
                        <q-separator class="q-my-sm"/>
                        <table>
                            <tr v-for="(item, index) in requiredAccounts.accounts" :key="index" class="q-pb-xs">
                                <td class="text-body2">{{ item.weight }}</td>
                                <td class="text-body2 text-weight-bold q-px-md">{{ item.actor }}</td>
                                <td class="text-body2">{{ item.permission }}</td>
                            </tr>
                        </table>
                    </q-card-section>
                </q-card>
            </q-popup-proxy>
        </q-btn>
    </div>
    <div class="col-auto">
        <q-btn
            outline
            padding="sm md"
            color="white"
            text-color="primary"
            label="Remove"
            :disabled="disabledRemoveButton"
            @click="$emit('remove')"
        />
    </div>
</div>
</template>
