/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
import {
  controllerDocEd25519Multikey,
  ed25519MultikeyKeyPair,
  mockPublicEd25519Multikey,
} from './mock-data.js';
import dataIntegrityContext from '@digitalbazaar/data-integrity-context';
import multikeyContext from '@digitalbazaar/multikey-context';
import {securityLoader} from '@digitalbazaar/security-document-loader';

export const loader = securityLoader();

loader.addStatic(
  ed25519MultikeyKeyPair.controller,
  controllerDocEd25519Multikey
);
loader.addStatic(
  mockPublicEd25519Multikey.id,
  mockPublicEd25519Multikey
);

loader.addStatic(
  dataIntegrityContext.constants.CONTEXT_URL,
  dataIntegrityContext.contexts.get(dataIntegrityContext.constants.CONTEXT_URL)
);

loader.addStatic(
  multikeyContext.constants.CONTEXT_URL,
  multikeyContext.contexts.get(multikeyContext.constants.CONTEXT_URL)
);

loader.addStatic(
  'https://www.w3.org/ns/credentials/examples/v2',
  {
    '@context': {
      '@vocab': 'https://www.w3.org/ns/credentials/examples#'
    }
  }
);

// controller document for test vectors
loader.addStatic(
  'https://vc.example/issuers/5678',
  {
    '@context': [
      'https://www.w3.org/ns/did/v1',
      'https://w3id.org/security/multikey/v1'
    ],
    id: 'https://vc.example/issuers/5678',
    assertionMethod: {
      id: 'https://vc.example/issuers/5678#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2',
      type: 'Multikey',
      controller: 'https://vc.example/issuers/5678',
      publicKeyMultibase: 'z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2'
    }
  }
);
loader.addStatic(
  'https://vc.example/issuers/5678#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2',
  {
    '@context': 'https://w3id.org/security/multikey/v1',
    id: 'https://vc.example/issuers/5678#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2',
    type: 'Multikey',
    controller: 'https://vc.example/issuers/5678',
    publicKeyMultibase: 'z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2'
  }
);
