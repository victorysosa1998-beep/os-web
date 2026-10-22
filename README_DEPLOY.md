# OS Dating Website — refreshed Netlify / Vercel package

This package refreshes the original dark purple/pink OS Dating design, improves mobile navigation and readability, and adds a Trust & Safety Center plus dedicated, directly addressable public policy pages. It is a static website; no app source, backend, signing key or Play Console settings are modified.

## Pages
- `/` — landing page and policy directory
- `/safety-center/` — central Trust & Safety Center
- `/privacy-policy/` — privacy policy
- `/account-deletion/` — external account-deletion request instructions and email CTA
- `/child-safety/` — child-safety standards and contact
- `/data-practices/` — plain-language data-practices overview (does not replace Play Console Data safety)
- `/terms/` — terms of service
- `/community-guidelines/` — community rules
- `/safety-tips/` — practical safety guidance

## Deploy on Netlify
1. Extract the ZIP. Upload the extracted folder contents so `index.html`, `assets/`, `_redirects`, and each route folder are at the published root.
2. Choose manual deploy or connect the repository. No build command is required; publish directory is `.`.
3. Open the deployed URL in a private/incognito browser and test every route below.

## Deploy on Vercel
1. Commit the extracted files to a Git repository and import it in Vercel.
2. Choose framework preset **Other**, with no build command and output directory `.` if requested.
3. Deploy and test every route below.

## URLs to use after deployment
Replace the host with the exact URL shown by your hosting provider:
- Privacy: `https://YOUR-LIVE-DOMAIN/privacy-policy/`
- Account deletion: `https://YOUR-LIVE-DOMAIN/account-deletion/`
- Child Safety Standards: `https://YOUR-LIVE-DOMAIN/child-safety/`
- Terms: `https://YOUR-LIVE-DOMAIN/terms/`
- Trust & Safety Center: `https://YOUR-LIVE-DOMAIN/safety-center/`
- Community Guidelines: `https://YOUR-LIVE-DOMAIN/community-guidelines/`
- Safety Tips: `https://YOUR-LIVE-DOMAIN/safety-tips/`
- Data Practices: `https://YOUR-LIVE-DOMAIN/data-practices/`

## Before using this for Google Play
- The Google Play listing URL is intentionally not invented. Add the exact listing URL to `PLAY_URL` in `index.html` after the listing exists.
- The account deletion email link only submits a request to `sosatechnologies.support@gmail.com`; it does not delete data automatically. Monitor the inbox, verify requests, delete account-associated data in the real backend and relevant storage, and communicate completion. Verify the in-app deletion path too.
- **Operational confirmation required:** the child-safety page names the support email as the contact. Ensure this inbox is actively monitored by someone trained to handle child-safety reports, and that the published process matches actual moderation and escalation procedures.
- **Accuracy review required:** privacy and data-practice language must match the production app, backend, SDKs, actual retention and deletion behavior. Review the claims about verification media, messages, location, service providers, security and retention before publishing. The website cannot determine your Play Console Data safety answers by itself.
- Ensure report/block mechanisms and moderation workflows exist and are actually staffed. A public policy alone does not implement these features.
- Complete Data safety, content rating, target audience, app access, ads and permission declarations in Play Console using verified app behavior.
- Add the live privacy policy in Play Console and provide an in-app link to it.

## Route smoke test
Confirm each route loads without sign-in and with no 404: `/`, `/safety-center/`, `/privacy-policy/`, `/account-deletion/`, `/child-safety/`, `/data-practices/`, `/terms/`, `/community-guidelines/`, `/safety-tips/`. Click the deletion email CTA and verify recipient and subject.

## Notes
The Play Store CTA remains disabled until a real listing URL is entered. This package is prepared but not deployed by this build step. It does not certify the app or Play Console as compliant.
