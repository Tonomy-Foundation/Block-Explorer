import EOS from 'src/config/chains/eos';
import Telos from 'src/config/chains/telos';
import UX from 'src/config/chains/ux';
import Wax from 'src/config/chains/wax';

import PangeaTestnet from 'src/config/chains/pangea-testnet';
import Jungle from 'src/config/chains/jungle';

import { ChainsConfig } from 'src/types/ChainsConfig';

const chains: ChainsConfig = {
    mainnets: [new EOS('eos'), new Telos('telos'), new UX('ux'), new Wax('wax')],
    testnets: [new Jungle('jungle'), new PangeaTestnet('pangea-testnet')],
};

export default chains;
