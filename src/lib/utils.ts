import { clsx, type ClassValue } from "clsx"
import { jwtDecode, JwtPayload } from "jwt-decode";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isValidJwtToken(accessToken?: string): boolean {
  if (!accessToken) {
    return false;
  }

  const decoded: JwtPayload = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  if (!decoded.exp) {
    return false;
  }

  return decoded.exp > currentTime;
}

export function getJwtSub(accessToken?: string): string | null {
  if (!accessToken) {
    return null;
  }

  const decoded: JwtPayload = jwtDecode(accessToken);

  if (!decoded.sub) {
    return null;
  }

  return decoded.sub;
}

export function getJwtUser(accessToken?: string) {
  if (!accessToken) {
    return null;
  }

  interface UserFromJwt {
    sub: string;
    email: string,
    name: string,
    family_name: string
  };

  return jwtDecode<UserFromJwt>(accessToken);
}

export function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}