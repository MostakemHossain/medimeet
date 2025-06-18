import { getPendingDoctors, getVerifiedDoctors } from "@/actions/admin";
import { TabsContent } from "@/components/ui/tabs";
import { PendingDoctors } from "./components/pending-doctors";
import VerifiedDoctors from "./components/verified-doctors";


export default async function AdminPage() {
    const [pendingDoctorsData, verifiedDoctorsData] =
    await Promise.all([
      getPendingDoctors(),
      getVerifiedDoctors(),
    
    ]);

  return (
    <>
      <TabsContent value="pending" className="border-none p-0">
      <PendingDoctors doctors={pendingDoctorsData.doctors || []} />
      </TabsContent>

      <TabsContent value="doctors" className="border-none p-0">
      <VerifiedDoctors doctors={pendingDoctorsData.doctors || []} />
      </TabsContent>

      <TabsContent value="payouts" className="border-none p-0">
        payouts
      </TabsContent>
    </>
  );
}