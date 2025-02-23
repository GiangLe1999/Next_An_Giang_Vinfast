import FirstBanner from "@/components/first-banner";
import FilterList from "@/components/news-page/filter-list";

const Page = () => {
  return (
    <div>
      <FirstBanner
        heading="TIN TỨC & ƯU ĐÃI"
        subHeading="Thông tin mới nhất về các dòng xe của Vinfast"
        bgImg="/images/first-banners/bang-gia-xe-vinfast.webp"
        bgClasses="!bg-cover"
      />

      <div className="container mx-auto px-8 xl:px-0 pt-7">
        <FilterList />
      </div>
    </div>
  );
};

export default Page;
