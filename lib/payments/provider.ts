import {
  PaymentRequest,
  PaymentResponse,
  PaymentVerification,
} from "./types";

export interface PaymentProvider {
  createPayment(
    request: PaymentRequest
  ): Promise<PaymentResponse>;

  verifyPayment(
    reference: string
  ): Promise<PaymentVerification>;
}