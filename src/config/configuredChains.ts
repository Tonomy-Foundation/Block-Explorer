import EOS from 'src/config/chains/eos';
import Telos from 'src/config/chains/telos';
import UX from 'src/config/chains/ux';
import Wax from 'src/config/chains/wax';
import TelosTestnet from 'src/config/chains/telos-testnet';
import PangeaTestnet from 'src/config/chains/pangea-testnet';
import Pangea from 'src/config/chains/pangea';
import Jungle from 'src/config/chains/jungle';

import { ChainsConfig } from 'src/types/ChainsConfig';

const chains: ChainsConfig = {
    mainnets: [new EOS('eos'), new Telos('telos'), new UX('ux'), new Wax('wax'), new Pangea('pangea')],
    testnets: [new Jungle('jungle'), new TelosTestnet('telos-testnet'), new PangeaTestnet('pangea-testnet')],
};

export default chains;
