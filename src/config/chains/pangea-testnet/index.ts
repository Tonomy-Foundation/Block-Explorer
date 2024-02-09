/*
# MAINNET VALUES
# NETWORK_CHAIN_ID=4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11
# NETWORK_HOST=mainnet.telos.net
# NETWORK_PORT=443
# NETWORK_PROTOCOL=https
# NETWORK_EVM_RPC=https://mainnet.telos.net/evm
# NETWORK_EVM_ENDPOINT=https://mainnet.telos.net
# NETWORK_EVM_CONTRACT=eosio.evm
# NETWORK_EVM_CHAIN_ID=40
# HYPERION_ENDPOINT=https://mainnet.telos.net
# TELOS_API_ENDPOINT=https://api.telos.net/v1

 */

import BaseChain, { baseUiConfiguration } from 'src/config/BaseChain';
import { RpcEndpoint } from 'universal-authenticator-library';
import {
    getEmptyPriceChartData,
} from 'src/api/price';
import { PriceChartData } from 'src/types/PriceChartData';
import { Theme } from 'src/types/Theme';
import { Token } from 'src/types';
import { FooterLink } from 'src/types/UiCustomization';

const customHeaderSettings = {
    hideLoginHandler: true,
    hideNetworkTab: false,
    hideWalletTab: true,
    hideVoteTab: true,
    hideProposalTab: false,
};

// Extend baseUiConfiguration and override the headerSettings
const customUiConfiguration = {
    ...baseUiConfiguration,
    headerSettings: customHeaderSettings,
    accountPageSettings: {
        hideCpuInfo: false,
        hideNetInfo: false,
        hideRamInfo: false,
        hideRexInfo: true,
        hideRefundingInfo: true,
        hideDelegatedInfo: true,
        hideLiquidInfo: true,

        hideResourcesControl: false,
        hideRexControl: false,

        hideTransactionTab: false,
        hideTokensTab: false,
        hideKeysTab: false,
        hideChildrenTab: false,
        hideContractsTab: false,
    },
};

const CHAIN_ID =
  '8a34ec7df1b8cd06ff4a8abbaa7cc50300823350cadc59ab296cb00d104d2b8f';
const NAME = 'pangea-testnet';
const DISPLAY = 'pangea-testnet';
const TOKEN = {
    symbol: 'SYS',
    precision: 4,
    amount: 0,
    contract: 'eosio.token',
} as Token;

const HYPERION_ENDPOINT = 'https://test.pangea.eosusa.io';

const RPC_ENDPOINT = {
    protocol: 'https',
    host: '#',
    port: 443,
};
const FUEL_RPC_ENDPOINT = {
    protocol: 'https',
    host: '#',
    port: 443,
};
const API_ENDPOINT = 'https://blockchain-api-testnet.pangea.web4.world/';
const S3_PRODUCER_BUCKET = '#';
const DISPLAY_MAP = true;
const THEME = {
    primary: '#67D7ED',
    secondary: '#E76773',
    accent: '#9C27B0',
    dark: '#1d1d1d',
    positive: '#21BA45',
    negative: '#ff0000',
    info: '#31CCEC',
    warning: '#F2C037',
    'color-map': '#4325c2',
    'color-primary-gradient': 'linear-gradient(90deg, #071A5F 0%, #571AFF 100%)',
    'color-secondary-gradient':
    'linear-gradient(180deg, #071A5F 0%, #571aff 147.34%)',
    'color-tertiary-gradient':
    'linear-gradient(90deg, #CBCAF5 0%, #A9CAF3 56.77%, #63C9EF 100%)',
    'color-progress-gradient': '#571aff',
    'color-producer-card-background': '#f5f4fe',
    'color-select-box-background': '#e0dffb',
    'color-header-background': '#67D7ED',
    'color-header-border': '#8a65d41a',
    'color-header-support-background': 'linear-gradient(180deg, #000000 0%, #ffffff 147.34%)',
    'color-graph-shadow': '#571aff28',
    'color-footer-background': '#67D7ED',
};

export default class Telos extends BaseChain {
    getName(): string {
        return NAME;
    }

    getChainId(): string {
        return CHAIN_ID;
    }

    getDisplay(): string {
        return DISPLAY;
    }

    getHyperionEndpoint(): string {
        return HYPERION_ENDPOINT;
    }

    getRPCEndpoint(): RpcEndpoint {
        return RPC_ENDPOINT;
    }

    getFuelRPCEndpoint(): RpcEndpoint | null {
        return FUEL_RPC_ENDPOINT;
    }

    getApiEndpoint(): string {
        return API_ENDPOINT;
    }

    getS3ProducerBucket(): string {
        return S3_PRODUCER_BUCKET;
    }

    getPriceData(): Promise<PriceChartData> {
        return getEmptyPriceChartData();
    }

    getSystemToken(): Token {
        return TOKEN;
    }

    getUsdPrice(): Promise<number> {
        return Promise.resolve(0);
    }

    getLargeLogoPath(): string {
        return 'chains/pangea/telos_logo.png';
    }

    getSmallLogoPath(): string {
        return 'chains/pangea/tlos.png';
    }

    getMapDisplay(): boolean {
        return DISPLAY_MAP;
    }

    getTheme(): Theme {
        return THEME;
    }

    getFiltersSupported(prop: string): boolean {
        if (prop === 'notified') {
            return true;
        }
        return true;
    }

    getFooterLinks(): FooterLink[] {
        return [
            { label: 'LEGAL', url: 'https://pangea.web4.world' },
            { label: 'PRIVACY', url: 'https://pangea.web4.world' },
            { label: 'REPOSITORY', url: 'https://github.com/Tonomy-Foundation/Block-Explorer' },
        ];
    }
    getUiCustomization() {
        return customUiConfiguration;
    }
}
