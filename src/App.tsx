import Beautify from "./components/Beautify"
import BrowseTheRange from "./components/BrowseTheRange"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Inspiration from "./components/Inspiration"
import Layout from "./components/Layout/Layout"
import HowItWorks from "./components/HowItWorks"

import AfricanMan from './assets/images/african-man.png';
import ShipsWarehouse from './assets/images/ships-warehouse.png';
import SofaTable from './assets/images/sofa-table.png';
import LivingRoom from './assets/images/living-room.png';
import Dinning from './assets/images/dining.png';
import Bedroom from './assets/images/bedroom.png';
import JoinWithUs from "./components/JoinWithUs"
import { useDocumentTitle } from "./lib/hooks"

function App() {
  useDocumentTitle('Landing Page');
  
  return (
    <Layout>
      <Hero />
      <Features />
      <Inspiration />
      <Beautify 
        title="Beautify your space"
        description="Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      />
      <BrowseTheRange 
        title="Browse The Range"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        catalogs={[
          {
            title: 'Dinning',
            image: Dinning,
          },
          {
            title: 'Living',
            image: LivingRoom
          },
          {
            title: 'Bedroom',
            image: Bedroom
          }
        ]}
      />
      <hr className="h-2 w-full mb-10" />
      <HowItWorks 
        title="How It Works"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        items={[
          {
            id: 1,
            image: AfricanMan,
            text: 'Purchase Securely',
            description:
             "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            id: 2,
            image: ShipsWarehouse,
            text: 'Ships From Warehouse',
            description:
             "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },

          {
            id: 3,
            image: SofaTable,
            text: 'Style Your Room',
            description:
             "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
        ]}
      />
      <JoinWithUs />
    </Layout>
  )
}

export default App