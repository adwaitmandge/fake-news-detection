import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeroHome from "../../components/HeroHome";
import FeaturesHome from "../../components/Features";
import FeaturesBlocks from "../../components/FeaturesBlocks";
import Testimonials from "../../components/Testimonials";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import ReactECharts from "echarts-for-react";
const Home = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const submitHandler = async () => {
    console.log("The entered data is ");
  };

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: [
        "politics",
        "entertainment",
        "religion",
        "healthcare",
        "science & tech",
        "sports",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [189, 72, 8, 278, 220, 318, 16],
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden width:100%">
      {/*  Site header */}
      <Header />

      <main className="flex-grow mt-28 ">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-[100px]">
          <ReactECharts option={options} />
          <table class="w-full mt-[100px] mb-[80px] text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Twitter-Id
                </th>
                <th scope="col" class="px-6 py-3">
                  Polititcal View
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  L/R Index
                </th>
                <th scope="col" class="px-6 py-3">
                  Activity_On_Retweets
                </th>
                <th scope="col" class="px-6 py-3">
                  Echo-Category
                </th>
                <th scope="col" class="px-6 py-3">
                  No of users retweeted
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  939265361869930496
                </th>
                <td class="px-6 py-4">established liberal</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">0.01199</td>
                <td class="px-6 py-4">
                  937349434668498944,937379378006282240 ,937380068590055425,
                  937384406511005696 ,937387493451862016, 937400766024896512{" "}
                </td>
                <td class="px-6 py-4"> 1</td>
                <td class="px-6 py-4"> 27</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  332173071689588737
                </th>
                <td class="px-6 py-4">established liberal</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">0.010727</td>
                <td class="px-6 py-4">
                  972666281441878016 972678396575559680 972827819993595904
                  972828014269448192 972828016647663616{" "}
                </td>
                <td class="px-6 py-4"> 3</td>
                <td class="px-6 py-4"> 30</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  959412404894519297
                </th>
                <td class="px-6 py-4"> progressive left </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">0.012247</td>
                <td class="px-6 py-4">
                  886941526458347521 887011300278194176 887023043121434625
                  887071646376448000
                </td>
                <td class="px-6 py-4">0</td>
                <td class="px-6 py-4">11</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  276416936387158016
                </th>
                <td class="px-6 py-4">progressive left </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">0.010543</td>
                <td class="px-6 py-4">
                  923126512458616832 923135295070990341 923189780476780544
                  923240820429467649 923280801088892930{" "}
                </td>
                <td class="px-6 py-4">4</td>
                <td class="px-6 py-4">24</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  322319475733065728
                </th>
                <td class="px-6 py-4">populist right</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">0.010862</td>
                <td class="px-6 py-4">
                  915205698212040704 915242076681506816 915249879341060096
                  915282584648781824{" "}
                </td>
                <td class="px-6 py-4">5</td>
                <td class="px-6 py-4">13</td>
              </tr>
            </tbody>
          </table>
        </div>


        
      </main>
      {/*  Page content */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
