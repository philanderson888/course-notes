# ids

## contents

- [ids](#ids)
  - [contents](#contents)
  - [securityonion ids](#securityonion-ids)
  - [sguil ids](#sguil-ids)
  - [sgutil ids](#sgutil-ids)


## securityonion ids

Download the signing key:

wget [https://raw.githubusercontent.com/Security-Onion-Solutions/security-onion/master/KEYS](https://raw.githubusercontent.com/Security-Onion-Solutions/security-onion/master/KEYS)

Import the signing key:

gpg --import KEYS

Download ISO signature

wget [https://github.com/Security-Onion-Solutions/security-onion/raw/master/sigs/securityonion-14.04.5.2.iso.sig](https://github.com/Security-Onion-Solutions/security-onion/raw/master/sigs/securityonion-14.04.5.2.iso.sig)

Download ISO

wget [https://github.com/Security-Onion-Solutions/security-onion/releases/download/v14.04.5.2/securityonion-14.04.5.2.iso](https://github.com/Security-Onion-Solutions/security-onion/releases/download/v14.04.5.2/securityonion-14.04.5.2.iso)

Verify ISO 

gpg --verify securityonion-14.04.5.2.iso.sig securityonion-14.04.5.2.iso

The output should show "Good signature" and the Primary key fingerprint should match what's shown below:

gpg: Signature made Mon 30 Jan 2017 02:44:55 PM EST using RSA key ID ED6CF680
gpg: Good signature from "Doug Burks [doug.burks@gmail.com](mailto:doug.burks@gmail.com)"
gpg: WARNING: This key is not certified with a trusted signature!
gpg: There is no indication that the signature belongs to the owner.
Primary key fingerprint: BD56 2813 E345 A068 5FBB 91D3 788F 62F8 ED6C F680

## sguil ids

sudo nano - run text editor

sudo rule-update : updates rules in IDS so they no longer generate an alert

zenmap and run scan on a host. This will be detected in the IDS as a threat

## sgutil ids
