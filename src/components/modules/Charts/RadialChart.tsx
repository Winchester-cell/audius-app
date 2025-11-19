'use client'
import { RadialChartProps } from "@/types/apexcharts.types";
import { ApexOptions } from "apexcharts";
import { FC } from "react";
import ApexChart from "react-apexcharts";

const RadialChart: FC<RadialChartProps> = ({ percent, colors = ['#1e40af'], hollowSize, title }) => {

    const options: ApexOptions = {
        series: [percent],
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: hollowSize,
                    dropShadow: { enabled: true }
                },
                track: {
                    background: 'var(--alt-text)',
                },
                dataLabels:{
                    value:{color:'var(--main-text)'}
                }
            },
        },
        labels: ['Device'],
        colors: colors,
        title: {
            text: title,
            align: 'center',
            style: { fontSize: '16px', fontFamily: 'inherit', fontWeight: '500', color: 'var(--main-text)' }
        },
    };


    return (
        <div className="w-full h-full">
            <ApexChart options={options} height={'100%'} series={options.series} type="radialBar" />
        </div>
    )
}

export default RadialChart