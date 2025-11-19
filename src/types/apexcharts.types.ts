export interface BarChartProps {
    series: { name: string, data: number[] }[],
    colors?: string[],
    categories: string[],
    title?: string,
    distributed: boolean,
    maxY?: number,
}

export interface RadialChartProps {
    percent: number,
    colors?: string[],
    title?: string,
    hollowSize: string
}