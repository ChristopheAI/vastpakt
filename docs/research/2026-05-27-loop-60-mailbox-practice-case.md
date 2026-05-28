# Loop 60 - Mailbox Practice Case

## Question

Can the three-mailbox email-address extraction become a second practical homepage case?

## Sources read

- `/Users/christophe/Documents/Codex/2026-05-27/files-mentioned-by-the-user-korte/korte-kwikaardweg-16/05_outputs/project_brief.md`
- `/Users/christophe/Documents/Codex/2026-05-27/files-mentioned-by-the-user-korte/korte-kwikaardweg-16/04_analysis/facts.md`
- `/Users/christophe/Documents/Codex/2026-05-27/files-mentioned-by-the-user-korte/korte-kwikaardweg-16/04_analysis/interpretation.md`
- `/Users/christophe/Projects/Triscalis/scripts/studio_tornado_extract_mail_addresses.py`
- `/Users/christophe/Projects/Triscalis/output/studio-tornado-export/mail_addresses.json`
- `/Users/christophe/Projects/Triscalis/output/studio-tornado-export/StudioTornado_mailadressen_export.xlsx`

## Facts

- The job was to extract email addresses from three individual mailboxes under the same domain.
- Output shape: workbook with one sheet per mailbox.
- The extraction used Microsoft Graph mailbox messages.
- Output columns included the address, incoming/outgoing tag, counts, first seen, and last seen.
- Final JSON showed:
  - 76.307 messages scanned.
  - 4.119 unique addresses for mailbox 1.
  - 2.400 unique addresses for mailbox 2.
  - 3.224 unique addresses for mailbox 3.
  - 9.743 unique-address rows when counted per mailbox.
- The final XLSX exists and is about 190 KB.

## Verdict

Yes, but only anonymized.

This is stronger than the previous `Sarah weet het` example because it is a real work object with a concrete input, output, and boundary.

## Public boundary

- Do not publish client name, mailbox names, domains, or real email addresses.
- Do not frame this as CRM enrichment, marketing-data enrichment, lead generation, or deliverability work.
- Do not imply legal/privacy advice.
- Keep it as a narrow visibility case: three mailbox histories became one workbook with one tab per mailbox.
