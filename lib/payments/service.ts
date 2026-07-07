import { PaymentProvider } from "./provider";
import {
  PaymentRequest,
  PaymentResponse,
  PaymentVerification,
} from "./types";

export class PaymentService {
  constructor(
    private provider: PaymentProvider
  ) {}

  async createPayment(
    request: PaymentRequest
  ): Promise<PaymentResponse> {
    return this.provider.createPayment(request);
  }

  async verifyPayment(
    reference: string
  ): Promise<PaymentVerification> {
    return this.provider.verifyPayment(reference);
  }
}