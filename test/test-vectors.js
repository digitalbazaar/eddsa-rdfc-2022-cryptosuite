/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
/* Note: This file contains data generated from the vc-di-eddsa specification
test vectors. */

/* eslint-disable max-len */
/* eslint-disable quote-props */
/* eslint-disable quotes */
export const keyMaterial = {
  "publicKeyMultibase": "z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
  "secretKeyMultibase": "z3u2en7t5LR2WtQH5PfFqMqwVHBeXouLzo6haApm8XHqvjxq"
};

// public key above converted to multikey format + controller doc:
export const publicKey = {
  '@context': 'https://w3id.org/security/multikey/v1',
  id: 'did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2',
  type: 'Multikey',
  controller: 'did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2',
  publicKeyMultibase: 'z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2'
};
export const controllerDoc = {
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/multikey/v1'
  ],
  id: publicKey.controller,
  assertionMethod: [publicKey]
};

export const signedFixture = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://www.w3.org/ns/credentials/examples/v2"
  ],
  "id": "urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33",
  "type": [
    "VerifiableCredential",
    "AlumniCredential"
  ],
  "name": "Alumni Credential",
  "description": "A minimum viable example of an Alumni Credential.",
  "issuer": "https://vc.example/issuers/5678",
  "validFrom": "2023-01-01T00:00:00Z",
  "credentialSubject": {
    "id": "did:example:abcdefgh",
    "alumniOf": "The School of Examples"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-rdfc-2022",
    "created": "2023-02-24T23:36:38Z",
    "verificationMethod": "did:key:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2#z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ2",
    "proofPurpose": "assertionMethod",
    "proofValue": "z2YwC8z3ap7yx1nZYCg4L3j3ApHsF8kgPdSb5xoS1VR7vPG3F561B52hYnQF9iseabecm3ijx4K1FBTQsCZahKZme"
  }
};
/* eslint-enable quotes */
/* eslint-enable quote-props */
/* eslint-enable max-len */
