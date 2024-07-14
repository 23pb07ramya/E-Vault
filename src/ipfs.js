import { create } from 'ipfs-http-client';

const ipfs = create({ host: 'localhost', port: '5001', protocol: 'http' });

export default ipfs;


// const IPFS = require('ipfs-api');
// const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});

// export default ipfs;