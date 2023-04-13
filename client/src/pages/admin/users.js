import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeroHome from "../../components/HeroHome";
import FeaturesHome from "../../components/Features";
import FeaturesBlocks from "../../components/FeaturesBlocks";
import Testimonials from "../../components/Testimonials";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
const Home = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setHasMounted(true);


    // return () => {
    //   chart.dispose();
    // };
  }, []);


  // const [chartdata, setChartData] = useState();
  // const chart = echarts.init(document.getElementById("chart"));

  // const option = {
  //   tooltip: {
  //     trigger: "axis",
  //     axisPointer: {
  //       type: "shadow",
  //       label: {
  //         show: true,
  //       },
  //     },
  //   },
  //   toolbox: {
  //     show: true,
  //     feature: {
  //       mark: { show: true },
  //       dataView: { show: true, readOnly: false },
  //       magicType: { show: true, type: ["line", "bar"] },
  //       restore: { show: true },
  //       saveAsImage: { show: true },
  //     },
  //   },
  //   calculable: true,
  //   legend: {
  //     data: ["12/4", "13/4"],
  //     itemGap: 5,
  //   },
  //   grid: {
  //     top: "12%",
  //     left: "1%",
  //     right: "10%",
  //     containLabel: true,
  //   },
  //   xAxis: [
  //     {
  //       type: "category",
  //       data: [
  //         "politics",
  //         "entertainment",
  //         "religion",
  //         "healthcare",
  //         "science & tech",
  //         "sports",
  //       ],
  //     },
  //   ],
  //   yAxis: [
  //     {
  //       type: "value",
  //       name: "L/R",
  //       axisLabel: {
  //         formatter: function (a) {
  //           a = +a;
  //           return isFinite(a) ? echarts.format.addCommas(a) : "";
  //         },
  //       },
  //     },
  //   ],
  //   dataZoom: [
  //     {
  //       show: true,
  //       start: 94,
  //       end: 100,
  //     },
  //     {
  //       type: "inside",
  //       start: 94,
  //       end: 100,
  //     },
  //     {
  //       show: true,
  //       yAxisIndex: 0,
  //       filterMode: "empty",
  //       width: 30,
  //       height: "80%",
  //       showDataShadow: false,
  //       left: "93%",
  //     },
  //   ],
  //   series: [
  //     {
  //       name: "13/4",
  //       type: "bar",
  //       data: [47, 15, 30, 11, 6, 9, 10, 6],
  //     },
  //     {
  //       name: "12/4",
  //       type: "bar",
  //       data: [45, 15, 16, 21, 58, 20, 23],
  //     },
  //   ],
  // };

  // chart.setOption(option);

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['politics', 'entertainment', 'religion', 'healthcare', 'science & tech', 'sports']
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [45, 15, 16, 21, 58, 20, 23],
        type: 'bar',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  
  if (!hasMounted) return null;

  const submitHandler = async () => {
    console.log("The entered data is ");
  };

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden" >
      
        <Header />

        <main className="flex-grow mt-28">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-[100px]">
          <ReactECharts option={options} />
            <table class="w-full text-sm mt-[100px] text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    UserName
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Latest Search
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Output
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Political Affiliation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Sheezy
                  </th>
                  <td class="px-6 py-4">Sports</td>
                  <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <a>speedtalk.com/forum/viewtopic.php?t=51650</a>
                  </td>
                  <td class="px-6 py-4">1</td>
                  <td class="px-6 py-4">established liberal</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    DavdBurnett
                  </th>
                  <td class="px-6 py-4">business</td>
                  <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    politics2020.info/index.php/2018/03/13/court-orders-obama-to-pay-400-million-in-restitution/
                  </td>
                  <td class="px-6 py-4">1</td>
                  <td class="px-6 py-4">populist right</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    lwtprettylaugh
                  </th>
                  <td class="px-6 py-4"> politics</td>
                  <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    UPDATE: Second Roy Moore Accuser Works For Michelle Obama
                    Right NOW -
                  </td>
                  <td class="px-6 py-4">1</td>
                  <td class="px-6 py-4">established liberal</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    douggarland
                  </th>
                  <td class="px-6 py-4">sports</td>
                  <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Oscar Pistorius Attempts To Commit Suicide
                  </td>
                  <td class="px-6 py-4">1</td>
                  <td class="px-6 py-4">progressive left </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    WilfordGemma
                  </th>
                  <td class="px-6 py-4">politics</td>
                  <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Trump Votes For Death Penalty For Being Gay
                  </td>
                  <td class="px-6 py-4">1</td>
                  <td class="px-6 py-4">populist right</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
