import jwt from 'jsonwebtoken';

export const getUserdata = (token: string) => {
  const decoded = jwt.decode(token);
  if (decoded && typeof decoded === "object" && "firstName" in decoded) {
    // Return only the part that matches User interface
    return { firstName: (decoded as any).firstName };
  }
  return null;
};
