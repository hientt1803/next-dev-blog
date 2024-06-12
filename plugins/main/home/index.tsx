import { Overview } from "@/plugins/main/home/_components/overview/overview";
import HomeContentWrapper from "./_components/content-wrapper";

const IndexHomePage = () => {
  return (
    <div className="mt-[50px]">
      <Overview />

      <div className="container mt-[50px] w-full h-auto">
        <div id="home-list-post">
          <HomeContentWrapper />
        </div>
      </div>
    </div>
  );
};

export default IndexHomePage;
