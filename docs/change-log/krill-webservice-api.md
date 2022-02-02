# Krill WebService (API)

## 2021-12-30
Version 20.8.2

### Some fixes

<ul><li>Fixed reset action from Shinken page.</li></ul>

---

## 2021-12-09
Version 20.7.19

### Some fixes

<ul><li>PBX changes did not launch the asterisk playbook.</li><li>It was not allowed to leave the address_profile field empty, now it is.</li></ul>

---

## 2021-11-08
Version 20.7.12

### Some fixes

<ul><li>In pbx serializers, created a decoded jump serializer for swagger and refactored the result of receptionist options (added decoded_jump property in model and removed to_representation.</li></ul>

---

## 2021-11-08
Version 20.7.11

### Some fixes

<ul><li>Fixed error 500 in post customer/pbx/ddi&groups.</li></ul>

---

## 2021-11-04
Version 20.7.6

### Some fixes

<ul><li>The pool attribute was not assigned when generating a PPPoE user via API.</li></ul>

---

## 2021-10-22
Version 20.4.1

### Some improvements

<ul><li>Created new endpoints type REST.</li></ul>

---

## 2021-10-18
Version 20.3.9

### Some fixes

<ul><li>The endpoint for PTP did not return the ITFS service.</li></ul>

---

## 2021-10-15
Version 20.3.6

### Some improvements

<ul><li>When a CPE is registered, the model field appears blank as well as the speed.</li></ul>

---

## 2021-10-14
Version 20.3.5

### Some fixes

<ul><li>Fixes considerable load average increase caused by Krill-ws.</li></ul>

