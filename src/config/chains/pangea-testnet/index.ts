/*
NETWORK_CHAIN_ID=
NETWORK_HOST=testnet.telos.net
NETWORK_PORT=443
NETWORK_PROTOCOL=https
NETWORK_EVM_RPC=https://testnet.telos.net/evm
NETWORK_EVM_ENDPOINT=https://testnet.telos.net
NETWORK_EVM_CONTRACT=eosio.evm
NETWORK_EVM_CHAIN_ID=41
HYPERION_ENDPOINT=https://testnet.telos.net
TELOS_API_ENDPOINT=https://api-dev.telos.net/v1

# TELOS_API_ENDPOINT=localhost:9999/v1
APP_NAME=OBE
PRODUCER_BUCKET_URL=

 */

import BaseChain, { baseUiConfiguration } from 'src/config/BaseChain';
import { RpcEndpoint } from 'universal-authenticator-library';
import { PriceChartData } from 'src/types/PriceChartData';
import { getEmptyPriceChartData } from 'src/api/price';
import { Theme } from 'src/types/Theme';
import { Token } from 'src/types';
import { FooterLink } from 'src/types/UiCustomization';

const customHeaderSettings = {
    hideLoginHandler: false,
    hideNetworkTab: false,
    hideWalletTab: false,
    hideVoteTab: false,
    hideProposalTab: false,
};

// Extend baseUiConfiguration and override the headerSettings
const customUiConfiguration = {
    ...baseUiConfiguration,
    headerSettings: customHeaderSettings,
};

const CHAIN_ID =
  '8a34ec7df1b8cd06ff4a8abbaa7cc50300823350cadc59ab296cb00d104d2b8f';
const NAME = 'pangea-testnet';
const DISPLAY = 'Pangea Testnet';
const TOKEN = {
    symbol: 'SYS',
    precision: 4,
    amount: 0,
    contract: 'eosio.token',
} as Token;
const HYPERION_ENDPOINT = 'https://test.pangea.eosusa.io';
const S3_PRODUCER_BUCKET = '#';
const RPC_ENDPOINT = {
    protocol: 'https',
    host: 'test.pangea.eosusa.io',
    port: 443,
};
const API_ENDPOINT = 'https://blockchain-api-testnet.pangea.web4.world/';
const DISPLAY_MAP = false;
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
    'color-header-support-background': 'linear-gradient(180deg, #D2F3FA 0%, #D2F3FA 147.34%)',
    'color-graph-shadow': '#571aff28',
    'color-footer-background': '#67D7ED',
};
console.log(customUiConfiguration);

export default class PangeaTestnet extends BaseChain {
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
        return null;
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
        return 'chains/telos/telos_logo.svg';
    }

    getSmallLogoPath(): string {
        return 'chains/telos/tlos.png';
    }

    getMapDisplay(): boolean {
        return DISPLAY_MAP;
    }

    getTheme(): Theme {
        return THEME;
    }

    getFiltersSupported(prop: string): boolean {
        if (prop === 'notified') {
            return false;
        }
        return true;
    }

    isTestnet(): boolean {
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
