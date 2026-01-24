class AuthTokens {
  private accessTokenValue: string | undefined;

  constructor() {
    this.accessTokenValue = undefined;
  }

  public set accessToken(token: string | undefined) {
    this.accessTokenValue = token;
  }

  public get accessToken(): string | undefined {
    return this.accessTokenValue;
  }
}

export const authTokens = new AuthTokens();
