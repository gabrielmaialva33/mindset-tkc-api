import crypto from 'crypto'

export class GenerateTokenService {
  public init(size: number, amount: number): Array<string> {
    const tokens: Array<string> = []

    for (let i = 0; i < amount; i++) {
      const token = crypto.randomBytes(size).toString('hex').toUpperCase()
      tokens.push(token)
    }

    return tokens
  }
}
