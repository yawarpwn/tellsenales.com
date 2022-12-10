export function getdiscountPorcent(price: number, offert: number): string {
    return (((price - offert) * 100) / price).toFixed(0)
}
