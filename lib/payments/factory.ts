import { PaymentProvider } from "./provider";
import { PayFastProvider } from "./providers/payfast";

export function createPaymentProvider(): PaymentProvider {
  return new PayFastProvider();
}