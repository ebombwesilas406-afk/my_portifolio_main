import ServiceSection from "@/components/Services";
import SiteFrame from "@/components/SiteFrame";
import { getServices } from "@/lib/queries";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main>
      <SiteFrame>
        <ServiceSection services={services} />
      </SiteFrame>
    </main>
  );
}
