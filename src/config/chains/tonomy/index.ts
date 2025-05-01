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
    hideLoginHandler: false,
    hideNetworkTab: false,
    hideWalletTab: false,
    hideVoteTab: true,
    hideProposalTab: false,
};

// Extend baseUiConfiguration and override the headerSettings
const customUiConfiguration = {
    ...baseUiConfiguration,
    headerSettings: customHeaderSettings,
    accountPageSettings: {
        hideCpuInfo: true,
        hideNetInfo: true,
        hideRamInfo: true,
        hideRexInfo: true,
        hideRefundingInfo: true,
        hideDelegatedInfo: true,
        hideLiquidInfo: true,

        hideResourcesControl: true,
        hideRexControl: true,

        hideTransactionTab: false,
        hideTokensTab: false,
        hideKeysTab: false,
        hideChildrenTab: false,
        hideContractsTab: false,
    },
};

const CHAIN_ID =
    '66d565f72ac08f8321a3036e2d92eea7f96ddc90599bdbfc2d025d810c74c248';
const NAME = 'tonomy';
const DISPLAY = 'Tonomy';
const TOKEN = {
    symbol: 'TONO',
    precision: 6,
    amount: 0,
    contract: 'eosio.token',
} as Token;
const TOKEN_PRICE = 0.012;
const HYPERION_ENDPOINT = 'https://pangea.eosusa.io';

const RPC_ENDPOINT = {
    protocol: 'https',
    host: 'pangea.eosusa.io',
    port: 443,
};
const API_ENDPOINT = 'https://pangea.eosusa.io';
const S3_PRODUCER_BUCKET = '#';
const DISPLAY_MAP = true;
const THEME = {
    primary: '#5833BC',
    secondary: '#FF505F',
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
    'color-header-background': '#5833BC',
    'color-header-border': '#8a65d41a',
    'color-header-support-background': 'linear-gradient(180deg, #313938 0%, #313938 147.34%)',
    'color-graph-shadow': '#571aff28',
    'color-footer-background': '#5833BC',
};

export default class Tonomy extends BaseChain {
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
        return Promise.resolve(TOKEN_PRICE);
    }

    getLargeLogoPath(): string {
        return 'chains/tonomy-testnet/tonomy-large-logo.png';
    }

    getSmallLogoPath(): string {
        return 'chains/tonomy-testnet/tonomy-large-logo.png';
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
            { label: 'LEGAL', url: 'https://tonomy.io' },
            { label: 'PRIVACY', url: 'https://tonomy.io' },
            { label: 'REPOSITORY', url: 'https://github.com/Tonomy-Foundation/Block-Explorer' },
        ];
    }
    getUiCustomization() {
        return customUiConfiguration;
    }
}
