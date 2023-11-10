# EdDSA RDFC 2022 Data Integrity Cryptosuite _(@digitalbazaar/eddsa-rdfc-2022-cryptosuite)_

[![Build status](https://img.shields.io/github/actions/workflow/status/digitalbazaar/eddsa-rdfc-2022-cryptosuite/main.yml)](https://github.com/digitalbazaar/eddsa-rdfc-2022-cryptosuite/actions?query=workflow%3A%22Node.js+CI%22)
[![Coverage status](https://img.shields.io/codecov/c/github/digitalbazaar/eddsa-rdfc-2022-cryptosuite)](https://codecov.io/gh/digitalbazaar/eddsa-rdfc-2022-cryptosuite)
[![NPM Version](https://img.shields.io/npm/v/@digitalbazaar/eddsa-rdfc-2022-cryptosuite.svg)](https://npm.im/@digitalbazaar/eddsa-rdfc-2022-cryptosuite)

> EdDSA 2022 Data Integrity Cryptosuite for use with jsonld-signatures.

## Table of Contents

- [Background](#background)
- [Security](#security)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

For use with https://github.com/digitalbazaar/jsonld-signatures v11.0 and above.

See also related specs:

* [Verifiable Credential Data Integrity](https://w3c.github.io/vc-data-integrity/)

## Security

TBD

## Install

- Browsers and Node.js 16+ are supported.

To install from NPM:

```
npm install @digitalbazaar/eddsa-rdfc-2022-cryptosuite
```

To install locally (for development):

```
git clone https://github.com/digitalbazaar/eddsa-rdfc-2022-cryptosuite.git
cd eddsa-rdfc-2022-cryptosuite
npm install
```

## Usage

The following code snippet provides a complete example of digitally signing
a verifiable credential using this library:

```javascript
import * as Ed25519Multikey from '@digitalbazaar/ed25519-multikey';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import {cryptosuite as eddsaRdfc2022CryptoSuite} from
  '@digitalbazaar/eddsa-rdfc-2022-cryptosuite';
import jsigs from 'jsonld-signatures';
const {purposes: {AssertionProofPurpose}} = jsigs;


// create the unsigned credential
const unsignedCredential = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    {
      AlumniCredential: 'https://schema.org#AlumniCredential',
      alumniOf: 'https://schema.org#alumniOf'
    }
  ],
  id: 'http://example.edu/credentials/1872',
  type: [ 'VerifiableCredential', 'AlumniCredential' ],
  issuer: 'https://example.edu/issuers/565049',
  issuanceDate: '2010-01-01T19:23:24Z',
  credentialSubject: {
    id: 'https://example.edu/students/alice',
    alumniOf: 'Example University'
  }
};

// create the keypair to use when signing
const controller = 'https://example.edu/issuers/565049';
const keyPair = await Ed25519Multikey.from({
  '@context': 'https://w3id.org/security/multikey/v1',
  type: 'Multikey',
  controller,
  id: controller + '#z6MkwXG2WjeQnNxSoynSGYU8V9j3QzP3JSqhdmkHc6SaVWoT',
  publicKeyMultibase: 'z6MkwXG2WjeQnNxSoynSGYU8V9j3QzP3JSqhdmkHc6SaVWoT',
  secretKeyMultibase: 'zrv3rbPamVDGvrm7LkYPLWYJ35P9audujKKsWn3x29EUiGwwhdZQd' +
    '1iHhrsmZidtVALBQmhX3j9E5Fvx6Kr29DPt6LH'
});

// export public key and add to document loader
const publicKey = await keyPair.export({publicKey: true, includeContext: true});
addDocumentToLoader({url: publicKey.id, document: publicKey});

// create key's controller document
const controllerDoc = {
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/multikey/v1'
  ],
  id: controller,
  assertionMethod: [publicKey]
};
addDocumentToLoader({url: controllerDoc.id, document: controllerDoc});

// create suite
const suite = new DataIntegrityProof({
  signer: keyPair.signer(), cryptosuite: eddsaRdfc2022CryptoSuite
});

// create signed credential
const signedCredential = await jsigs.sign(unsignedCredential, {
  suite,
  purpose: new AssertionProofPurpose(),
  documentLoader
});

// results in the following signed VC
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    {
      "AlumniCredential": "https://schema.org#AlumniCredential",
      "alumniOf": "https://schema.org#alumniOf"
    },
    "https://w3id.org/security/data-integrity/v2"
  ],
  "id": "http://example.edu/credentials/1872",
  "type": [
    "VerifiableCredential",
    "AlumniCredential"
  ],
  "issuer": "https://example.edu/issuers/565049",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "https://example.edu/students/alice",
    "alumniOf": "Example University"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "created": "2022-09-06T21:29:24Z",
    "verificationMethod": "https://example.edu/issuers/565049#z6MkwXG2WjeQnNxSoynSGYU8V9j3QzP3JSqhdmkHc6SaVWoT",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "proofValue": "z4uwHCobmxKqQfZb7i8QRnNR9J4TR6u4Wkm4DB3ms337gfSpL4UwhTD7KKdPjyAaVJQ4y896FEnB1Vz3uEz14jWoC"
  }
}
```

## Contribute

See [the contribute file](https://github.com/digitalbazaar/bedrock/blob/master/CONTRIBUTING.md)!

PRs accepted.

If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

[New BSD License (3-clause)](LICENSE) © 2023 Digital Bazaar
