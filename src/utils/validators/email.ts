const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email: string): boolean {
  return emailRegex.test(email);
}

export { validateEmail };
