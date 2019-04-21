type Result<T> =
  | { success: true; value: T }
  | { success: false; error: string };

function tryParseInt(text: string): Result<number> {
  if (/^-?\d+$/.test(text)) {
    return {
      success: true,
      value: parseInt(text, 10)
    };
  }
  return {
    success: false,
    error: "Invalid number format"
  };
}

const resulja = tryParseInt("132");
if (resulja.success) {
  resulja;
} else {
  resulja;
}

interface Cash {
  kind: "cash";
}

interface Paypal {
  kind: "paypal";
  email: string;
}

interface CreditCard {
  kind: "credit";
  securityCode: string;
}

type Payment = Cash | Paypal | CreditCard;
function printPayment(payment: Payment) {
  switch (payment.kind) {
    case "cash":
      return `Cash`;
    case "paypal":
      return `Paypal ${payment.email}`;
    case "credit":
      return `Credit ${payment.securityCode}`;
  }
}
