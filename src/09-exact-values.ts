let autoComplete: "on" | "off" = "on";

const textx: string = autoComplete;

type NumberBase = 2 | 8 | 10 | 16;
let base: NumberBase;
base = 2;
base = 3;

let autoFocus: true | false = true;

autoFocus = false;

enum Protocols {
  HTTP,
  HTTPS,
  FTP
}

type HyperTextProtocol = Protocols.HTTP | Protocols.HTTPS
let protocol: HyperTextProtocol
protocol = Protocols.HTTPS
protocol = Protocols.HTTP
protocol = Protocols.FTP
