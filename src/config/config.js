module.exports = {
  env: 'prod',
  network: {
    explorer: 'https://goerli.etherscan.io',
    api: 'http://api-goerli.etherscan.io/api',
  },
  ipfs: {
    browser: 'https://ipfs.io/ipfs/',
  },
  sounds: {
    newMessage: 'QmV7bZ3RSppXePC299kfUjpdLBsAptmSDrtvvSmBJh1cmB',
    call: 'QmRdxeQF53abUesaFC8qmoNJ5FLS8LBuSyCmcXT5VhuKSm',
    hangup: 'QmWrRi5tdKZy3iqcR8mum9hFBbZ8qgvekhEM3Y4PD1TK28',
    mute: 'QmVk362FGmwfsXBj5zMv4x1Hp7Mp9RbYDMxsDXRAx5vyUo',
    unmute: 'QmWxv18LqpcaMhXVd1BLm9z9k1MfWDNexJ22dC6vLkdyro',
    deafen: 'Qmf4QinBSDk9AgvqsiaaZ2ZmhCfTwcSRpAgSCTxLGyZkyg',
    undeafen: 'QmSHtz5kSvX8JNZKMfkm6PjqScxoC864bmGd2g3ycwRqK1',
    upload: 'QmSHtz5kSvX8JNZKMfkm6PjqScxoC864bmGd2g3ycwRqK1',
  },
  registry: '0x7d867225d2927da8c98f5110b6589b53895e09df',
  debug: false,
  cacher: {
    dwellerLifespan: 900000,
  },
  peer: {
    network: {
      prod: {
        secure: true,
        host: '0.vault74.io',
        port: 443,
        path: '/',
        key: 'vault74',
        iceServers: [
          { url: 'stun:stun.l.google.com:19302' },
        ],
      },
      dev: {
        secure: false,
        host: '0.vault74.io',
        port: 80,
        path: '/',
        key: 'vault74',
        iceServers: [
          { url: 'stun:stun.l.google.com:19302' },
        ],
      },
    },
    heartbeat_timeout: 15000,
    check_heartbeat: 500,
    timeout: 500,
    reconnect: 3000,
    ping_interval: 5000,
  },
};
