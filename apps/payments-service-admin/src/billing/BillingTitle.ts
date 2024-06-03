import { Billing as TBilling } from "../api/billing/Billing";

export const BILLING_TITLE_FIELD = "address";

export const BillingTitle = (record: TBilling): string => {
  return record.address?.toString() || String(record.id);
};
