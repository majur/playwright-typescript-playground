export class RandomCredentialGenerator {
    private static readonly emailDomains: string[] = ['example.com', 'test.com', 'mail.com', 'demo.net'];
  
    public static generateRandomEmail(): string {
      const randomName = this.generateRandomString(8);
      const randomDomain = this.emailDomains[Math.floor(Math.random() * this.emailDomains.length)];
      return `${randomName}@${randomDomain}`;
    }
  
    public static generateRandomPassword(length: number = 12): string {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
      let password = '';
      for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return password;
    }
  
    public static generateRandomString(length: number): string {
      const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    }
  }
  