import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "user";

export const TransactionTitle = (record: TTransaction): string => {
  return record.user?.toString() || String(record.id);
};
