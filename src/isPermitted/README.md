# isPermitted `es6`

Checks if the given user role have permission

## Examples

```js
isPermitted("normal"); // true
isPermitted("normal", "normal", "premium"); // true
isPermitted("anonymous", "normal", "premium"); // false
```

```js
const Roles = {
  SYSTEM_ADMIN: "SYSTEM_ADMIN",
  SUPERVISOR: "SUPERVISOR",
  SUPERVISOR_ADMIN: "SUPERVISOR_ADMIN",

  CITIZEN: "CITIZEN",
  ANONYMOUS: "ANONYMOUS",
  PERSONEL: "PERSONEL",

  UNAUTHORIZED: "UNAUTHORIZED",

  WEB: ["SUPERVISOR", "SUPERVISOR_ADMIN", "SYSTEM_ADMIN"],
  MOBILE: ["CITIZEN", "ANONYMOUS", "PERSONEL"],
  ALL: ["WEB", "MOBILE"],
};

isPermitted("SUPERVISOR", Roles.ALL); // true
isPermitted("SUPERVISOR", Roles.WEB); // true
isPermitted("UNAUTHORIZED", Roles.ALL, "UNAUTHORIZED"); // true
```
