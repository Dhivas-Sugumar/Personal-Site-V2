import { SocialSection } from "@/contact/src/components/SocialSection";
import { Header, PageContainer } from "@/design-system";

export default function Page() {
  return (
    <PageContainer
      displayHeader={true}
      displayNavBar={true}
      currentPage={"Contact"}
    >
      <h1 className="text-accent300 header text-center mb-6">Contact Me</h1>
      <SocialSection />
    </PageContainer>
  );
}
