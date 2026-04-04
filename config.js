// Lobster代币网站配置
const LOBSTER_CONFIG = {
  // 合约地址
  CONTRACT_ADDRESS: '0xb30139594b85aa0cfad2b4abe2328886fdbfe92b',
  USDC_ADDRESS: '0x20c000000000000000000000b9537d11c60e8b50',
  TREASURY_ADDRESS: '0x2015800fd076abc424b8ed446483bcf674cde629',
  
  // 网络配置
  NETWORK: {
    NAME: 'Tempo Mainnet',
    CHAIN_ID: 4217,
    HEX_CHAIN_ID: '0x1079',
    RPC_URL: 'https://rpc.tempo.xyz',
    EXPLORER: 'https://explore.tempo.xyz',
    SYMBOL: 'pathUSD',
    DECIMALS: 18
  },
  
  // 购买配置
  PURCHASE: {
    PRICE: '10000', // 0.01 USDC.e (6 decimals)
    REWARD: '10000000000000000000000', // 10,000 LOBSTER (18 decimals)
    PRICE_DISPLAY: '0.01 USDC.e',
    REWARD_DISPLAY: '10,000 LOBSTER'
  },
  
  // 网站信息
  SITE: {
    TITLE: 'Lobster代币购买',
    DESCRIPTION: '使用USDC.e购买LOBSTER代币 - Tempo主网',
    KEYWORDS: 'LOBSTER,代币,购买,Tempo,USDC.e,加密货币',
    AUTHOR: 'Lobster Token'
  },
  
  // 社交媒体
  SOCIAL: {
    TWITTER: '#',
    TELEGRAM: '#',
    DISCORD: '#',
    GITHUB: '#'
  },
  
  // 功能开关
  FEATURES: {
    AUTO_NETWORK_SWITCH: true,
    AUTO_BALANCE_REFRESH: true,
    TRANSACTION_TRACKING: true,
    ERROR_RECOVERY: true
  }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LOBSTER_CONFIG;
} else {
  window.LOBSTER_CONFIG = LOBSTER_CONFIG;
}