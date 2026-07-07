import { PaymentProvider } from "../provider";
import {
  PaymentRequest,
  PaymentResponse,
  PaymentVerification,
} from "../types";

export class PayFastProvider
  implements PaymentProvider
{
  async createPayment(
    request: PaymentRequest
  ): Promise<PaymentResponse> {
    throw new Error(
      "createPayment() not implemented."
    );
  }

  async verifyPayment(
    reference: string
  ): Promise<PaymentVerification> {
    throw new Error(
      "verifyPayment() not implemented."
    );
  }
}