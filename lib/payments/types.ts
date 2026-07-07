export type PaymentStatus =
  | "pending"
  | "paid"
  | "failed"
  | "cancelled";

export interface PaymentRequest {
  orderId: string;
  amount: number;
  customerName: string;
  customerEmail: string;
  description: string;
}

export interface PaymentResponse {
  success: boolean;
  paymentUrl: string;
  reference: string;
}

export interface PaymentVerification {
  success: boolean;
  status: PaymentStatus;
  reference: string;
}