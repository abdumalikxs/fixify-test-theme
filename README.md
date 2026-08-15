# fixify-test-theme

Sandbox repo used to test the Fixify.AI autopilot.

The CI workflow runs `node --check assets/theme.js`. The file currently has a
missing closing brace in `updateCartCount`, so the build fails on purpose.
