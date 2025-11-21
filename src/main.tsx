import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PortfolioV1 } from './pages/PortfolioV1';
import { PortfolioV2 } from './pages/PortfolioV2';
import { NavBar } from './components/NavBar';
import { EnvImp } from './env';

function getPorfolioVersion(): ReactNode {
  switch (EnvImp.version) {
    case 1:
      return <PortfolioV1 />
    case 2:
      return <PortfolioV2 />
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar/>
    {getPorfolioVersion()}
  </StrictMode>,
)
