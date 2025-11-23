'use client'
import { BarChartProps } from "@/types/apexcharts.types";
import { ApexOptions } from "apexcharts";
import { FC } from "react";
import ApexChart from "react-apexcharts";

const BarChart: FC<BarChartProps> = ({ series, colors, categories, title, distributed, maxY }) => {

  const options: ApexOptions = {
    chart: {
      fontFamily: 'inherit',
      toolbar: { show: false },
      height:'100%',
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
      axisBorder: { show: true },
      labels: { style: { colors: 'var(--main-text)', fontSize: '10px', fontWeight: '500' } }
    },
    title: {
      text: title,
      align: 'center',
      style: { fontSize: '16px', fontFamily: 'inherit', fontWeight: '600', color: 'var(--main-text)' }
    },
    plotOptions: {
      bar: {
        distributed: distributed,
        borderRadius: 10
      },
    },
  }

  return (
    <div className="w-full h-full">
      <ApexChart options={options} series={series} type="bar" height={'100%'} />
    </div>
  )
}

export default BarChart