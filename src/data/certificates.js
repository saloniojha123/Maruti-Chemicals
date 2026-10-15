// src/data/certificates.js
// ------------------------------------------------------------------
// List ONLY certificates and documents that Maruti Chemicals has
// actually supplied. Do not add anything that is not verified.
//
// How to add one:
//   1. Copy the PDF into  public/documents/   (e.g. iso-9001.pdf)
//   2. Add an entry below. `file` must match the PDF name.
//
// Required: id, title, file
// Optional: issuer, validUntil, description
// ------------------------------------------------------------------

const certificates = [
  {
    id: "first-certificate",
    title: "Name of the First Certificate",
    issuer: "Name of the issuing body",
    validUntil: "31 Dec 2027",
    description: "One short line about what this document covers.",
    file: "/documents/first-certificate.pdf",
  },

 
];



export default certificates;