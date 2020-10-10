const API_URLS = {
  56: 'https://api.bscscan.com/api',
  97: 'https://api-testnet.bscscan.com/api',
}

const EXPLORER_URLS = {
  56: 'https://bscscan.com/address',
  97: 'https://testnet.bscscan.com/address'
}

const RequestStatus = {
  OK: '1',
  NOTOK: '0'
}

const VerificationStatus = {
  FAILED: 'Fail - Unable to verify',
  SUCCESS: 'Pass - Verified',
  PENDING: 'Pending in queue',
  ALREADY_VERIFIED: 'Contract source code already verified'
}

const BscScanLicense = {
  NONE: 1,
  UNLICENSE: 2,
  MIT: 3,
  GPL2: 4,
  'GPL-2.0-ONLY': 4,
  GPL3: 5,
  'GPL-3.0-ONLY': 5,
  'LGPL2.1': 6,
  'LGPL-2.1-ONLY': 6,
  LGPL3: 7,
  'LGPL-3.0-ONLY': 7,
  'BSD-2-CLAUSE': 8,
  'BSD-3-CLAUSE': 9,
  MPL2: 10,
  'MPL-2.0': 10,
  OSL3: 11,
  'OSL-3.0': 11,
  APACHE2: 12,
  'APACHE-2.0': 12,
  AGPL3: 13,
  'AGPL-3.0-ONLY': 13
}

module.exports = {
  API_URLS,
  EXPLORER_URLS,
  RequestStatus,
  VerificationStatus,
  BscScanLicense
}
