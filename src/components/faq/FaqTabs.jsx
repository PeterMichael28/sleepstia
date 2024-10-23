/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import AllFaqs from "./SingleFaq";
import { melatoninFaqData, orderFaqData, productFaqData } from "@/lib/data";

const FaqTabs = ({ searchValue = "" }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentTab = searchParams.get("faqTabs") || "product";

  const filterFaqs = (faqData) => {
    if (!searchValue.trim()) return faqData;

    return faqData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchValue.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchValue.toLowerCase()),
    );
  };

  return (
    <section className="w-full py-10 md:py-20">
      <div className="mx-auto max-w-[1116px] px-4">
        <Tabs
          defaultValue="product"
          className="w-full"
          value={currentTab}
          onValueChange={(value) => setSearchParams({ faqTabs: value })}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-12">
            <TabsList className="flex h-full gap-x-7 gap-y-10 bg-transparent md:w-[222px] md:flex-col md:items-start">
              <TabsTrigger
                value="product"
                className="relative flex h-[47px] items-center text-sm font-normal leading-[150%] text-primary400 ring-0 data-[state=active]:font-bold data-[state=active]:shadow-none max-md:data-[state=active]:rounded-md max-md:data-[state=active]:bg-[rgba(255,215,35,0.10)] md:text-lg"
              >
                Sleepstiq Product
                {currentTab == "product" && (
                  <div className="absolute right-0 top-0 hidden h-[47px] w-[100px] bg-[rgba(255,215,35,0.10)] md:block"></div>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="orders"
                className="relative h-[47px] bg-transparent text-sm font-normal leading-[150%] text-primary400 ring-0 data-[state=active]:font-bold data-[state=active]:shadow-none max-md:data-[state=active]:rounded-md max-md:data-[state=active]:bg-[rgba(255,215,35,0.10)] md:text-lg"
              >
                Order
                {currentTab == "orders" && (
                  <div className="absolute -right-[70px] top-0 hidden h-[47px] w-[100px] bg-[rgba(255,215,35,0.10)] md:block"></div>
                )}
              </TabsTrigger>

              <TabsTrigger
                value="Melantonin"
                className="relative h-[47px] text-sm font-normal leading-[150%] text-primary400 ring-0 data-[state=active]:font-bold data-[state=active]:shadow-none max-md:data-[state=active]:rounded-md max-md:data-[state=active]:bg-[rgba(255,215,35,0.10)] md:text-lg"
              >
                Melantonin
                {currentTab == "Melantonin" && (
                  <div className="absolute -right-9 top-0 hidden h-[47px] w-[100px] bg-[rgba(255,215,35,0.10)] md:block"></div>
                )}
              </TabsTrigger>
            </TabsList>

            <div className="h-full">
              <TabsContent value="product">
                <AllFaqs
                  faqData={filterFaqs(productFaqData)}
                  searchValue={searchValue}
                />
              </TabsContent>

              <TabsContent value="orders">
                <AllFaqs
                  faqData={filterFaqs(orderFaqData)}
                  searchValue={searchValue}
                />
              </TabsContent>
              <TabsContent value="Melantonin">
                <AllFaqs
                  faqData={filterFaqs(melatoninFaqData)}
                  searchValue={searchValue}
                />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default FaqTabs;
