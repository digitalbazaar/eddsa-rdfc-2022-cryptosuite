/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
import * as rdfCanonize from 'rdf-canonize';
import jsonld from 'jsonld';

export async function canonize(input, options) {
  // convert to RDF dataset and do canonicalization
  options = {
    algorithm: 'RDFC-1.0',
    format: 'application/n-quads',
    base: null,
    safe: true,
    ...options
  };
  const opts = {...options, produceGeneralizedRdf: false};
  delete opts.format;
  opts.produceGeneralizedRdf = false;
  const dataset = await jsonld.toRDF(input, opts);
  return rdfCanonize.canonize(dataset, options);
}
