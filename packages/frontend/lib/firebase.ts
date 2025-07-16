// This is a mock firebase auth object for development purposes.
// In a real application, this would be replaced with the actual Firebase SDK.

export const auth = {
  createUserWithEmailAndPassword: async (email: string, password: string) => {
    console.log('Attempting to create user with:', { email, password });
    // Simulate a successful user creation
    if (email && password) {
      return Promise.resolve({
        user: {
          uid: 'mock-uid-123',
          email: email,
        },
      });
    } else {
      // Simulate an error
      return Promise.reject(new Error('Mock Auth Error: Email and password are required.'));
    }
  },
};
