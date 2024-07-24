import { env } from '@/environment';

describe('env', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('should throws when invalid .env is provided', async () => {
    process.env.NODE_ENV = 'invalid_env';
    try {
      vi.spyOn(console, 'error').mockImplementationOnce(vi.fn());
      await import('@/environment');
      assert.fail();
    } catch (error) {
      expect(error).instanceOf(Error);
      expect((error as Error).message).toMatchInlineSnapshot(
        `"Invalid environment variables."`,
      );
    }
  });

  it('should return .env with valid data', () => {
    expect(env).toHaveProperty('NODE_ENV');
  });
});
