/**
 * input value to positive integer
 * @param value 
 * @returns integer
 */
export function toInteger(value: string | number): number {
  return parseInt(`${value ?? ''}`.replace(/[^\d]+/, ''), 10) || 0;
}
