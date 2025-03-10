import { GlassMorphismContainer } from "../glass-morphism/glass-morphism-container";
import { NavigationBarTab, NavigationBarTabProps } from "./NavigationBarTab";

export type NavigationBarProps = {
  tabs: NavigationBarTabProps[];
};

export const NavigationBar: React.FC<NavigationBarProps> = ({ tabs }) => {
  return (
    <GlassMorphismContainer>
      <div className="flex flex-row space-between rounded-xxl shadow-2xl">
        {tabs.map((tab) => (
          <NavigationBarTab key={tab.title} {...tab} />
        ))}
      </div>
    </GlassMorphismContainer>
  );
};
