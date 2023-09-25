export interface LoanModel {
  loan_id: number;
  date: Date;
  item_localisation: string | null;
  remarks: string | null;
  planned_return_date: Date | null;
  real_return_date: Date | null;
  item_id: number;
  loan_by_user_id: number;
  loan_to_user_id: number | null;
  borrower_email: string | null;
}
