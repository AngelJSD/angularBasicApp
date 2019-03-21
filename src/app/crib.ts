/*
    Interfaces give us a really nice way of knowing
    exactly how something should be used. See their
    usage and the error in:
    
        crib-card/crib-card.component.ts
*/

export interface Crib {
    id: number,
    type: string,
    price: number,
    address: string,
    description: string,
    bedrooms: number,
    bathroom: number,
    area: number,
    image: string
}
