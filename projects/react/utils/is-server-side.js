export const isServerSide = (typeof window === 'undefined' || typeof CanvasRenderingContext2D === 'undefined');