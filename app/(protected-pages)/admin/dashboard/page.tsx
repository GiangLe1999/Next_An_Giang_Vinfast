// import AnalyticsBlocks from "@/components/admin-dashboard-home-page/analytics-blocks";
import QuickConsultListTable from "@/components/admin-dashboard-home-page/quick-consult-list-table";
import TestDriveListTable from "@/components/admin-dashboard-home-page/test-drive-list-table";

const DashboardPage = () => {
  return (
    <div className="admin-page-container">
      <QuickConsultListTable />
      <TestDriveListTable />
      {/* <AnalyticsBlocks /> */}
    </div>
  );
};

export default DashboardPage;
