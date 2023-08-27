import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useData from "../Hooks/useData";
import PostCard from "./PostCard";

const PostTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [data] = useData();
  const aritcles = data.filter((dta) => dta.category == "article");
  const educations = data.filter((dta) => dta.category == "education");
  const jobs = data.filter((dta) => dta.category == "job");
  return (
    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className="mb-6 ">
        <Tab>All Post ({data.length})</Tab>
        <Tab>Article</Tab>

        <Tab>education</Tab>

        <Tab>Job</Tab>
      </TabList>
      <hr />
      <TabPanel>
        <div className="mx-auto text-center flex flex-col gap-1 justify-center items-center w-full">
          {data.map((item, i) => (
            <PostCard key={i} item={item}></PostCard>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="mx-auto text-center flex flex-col gap-1 justify-center items-center w-full">
          {aritcles.map((item, i) => (
            <PostCard key={i} item={item}></PostCard>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="mx-auto text-center flex flex-col gap-1 justify-center items-center w-full">
          {educations.map((item, i) => (
            <PostCard key={i} item={item}></PostCard>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="mx-auto text-center flex flex-col gap-1 justify-center items-center w-full">
          {jobs.map((item, i) => (
            <PostCard key={i} item={item}></PostCard>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default PostTab;
