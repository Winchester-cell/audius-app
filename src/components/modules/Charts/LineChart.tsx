'use client'
import { LineChartProps } from "@/types/apexcharts.types";
import { ApexOptions } from "apexcharts";
import { FC } from "react";
import ApexChart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const LineChart: FC<LineChartProps> = ({ series, categories, colors, title, maxY, minY }) => {

    const { i18n } = useTranslation()

    const options: ApexOptions = {
        chart: {
            fontFamily: 'inherit',
            toolbar: { show: false },
            height: '100%',
            animations: {
                enabled: true,
                speed: 700,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 400
                },
            }
        },
        colors: colors,
        xaxis: {
            categories: categories,
            labels: { style: { colors: 'var(--main-text)', fontSize: '10px', fontWeight: '500' } }
        },
        yaxis: {
            max: maxY ? maxY : undefined,
            min: minY ? minY : 0,
            axisBorder: { show: true },
            labels: { style: { colors: 'var(--main-text)', fontSize: '10px', fontWeight: '500' } }
        },
        title: {
            text: title,
            align: 'center',
            style: { fontSize: '16px', fontFamily: 'inherit', fontWeight: '600', color: 'var(--main-text)' }
        },
        markers: {
            strokeColors: 'var(--main-bg)',
            shape: "circle",
            size: 7
        },
    }

    return (
        <div className="w-full h-full">
            <ApexChart key={i18n.language} options={options} series={series} type="line" height={'100%'} />
        </div>
    )
}

export default LineChart