import type { ReactNode } from "react";
import { ExpandableTextBox } from './../components/ExpandableTextBox';

export function Experience(): ReactNode {
    return (
        <section className="w-full sm:min-h-[calc(100svh-72px)] min-h-full h-fit items-start flex flex-col pb-8 sm:max-w-5xl mx-auto my-8">
            <div className="w-full flex flex-col gap-8 h-fit">
                <h1 className="text-6xl">Experience</h1>
                <ExpandableTextBox>
                    <div className="flex flex-col">
                        <p className="font-bold">DB SCHENKER VIETNAM</p>
                        <p className="font-bold">(SCHENKER X DSV ROAD VIETNAM)</p>
                        <p className="font-bold">Mar 2023 – Sep 2025</p>
                        <p className="font-bold">Position: Business Development Specialist ROAD Dept Vietnam</p>
                        <ul className="list-disc list-outside pl-5">
                            <li>Responsible for developing a business sales plan for ROAD Product, primarily focusing on 70% Cross-border and 30% Domestic Road (including Customs Clearance) (Exceeded 125% KPI Revenue)</li>
                            <li>Responsible for developing logistics solution and Road strategy (maintain 3 MEUR pipeline annually)</li>
                            <li>Responsible for bringing in new business for the company (Won 2 new customers/month)</li>
                            <li>Penetrate new geographies and new segments (Eg. Consumer& Retail, Energy and Industrial) and service offerings in Vietnam (Achieved 40 customers visits/month)</li>
                        </ul>
                    </div>
                </ExpandableTextBox>
                <ExpandableTextBox>
                    <div className="flex flex-col">
                        <p className="font-bold">CJ Gemadept Logistics One Member Company Limited (North Branch)</p>
                        <p className="font-bold">May 2022 – Feb 2023</p>
                        <p className="font-bold">Position: Senior Business Development Contract Logistics Lead</p>
                        <ul className="list-disc list-outside pl-5">
                            <li>Evaluate the Logistics’ Business Development Strategy for Contract Logistics and Trucking Inland solution (Achieved 100% KPI Rev)</li>
                            <li>Consultant clients in Logistics solution (Warehouse, In-house Logistics, Distribution, Supply Chain Management) in FMCG and E-commerce market</li>
                            <li>Ensure up to date KPI for inbound/outbound with customer which corporation with Warehouse team and Transportation team (90% just in time KPI)</li>
                            <li>Joining Mega bidding for long-term contract negotiation (10 bidding/month)</li>
                            <li>Conducting Logistics solution in technology approach (OMS, WMS, TMS)</li>
                        </ul>
                    </div>
                </ExpandableTextBox>
                <ExpandableTextBox>
                    <div className="flex flex-col">
                        <p className="font-bold">ATT Vietnam Logistics JSC (Hanoi Headquarter & HCM Branch)</p>
                        <p className="font-bold">Jan 2020 – Apr 2022</p>
                        <p className="font-bold">Position: Senior Business Development</p>
                        <ul className="list-disc list-outside pl-5">
                            <li>Evaluating the Logistics’ Business Development Strategy on Supply Chain conducting such as Ocean Freight, Air Freight, Inland Trucking, Factory Relocation, and Oversea Logistics Agent connecting (Create strategy twice/year)</li>
                            <li>Develop new customers and consult on key account (Won 2 opportunities/month)</li>
                            <li>Conducting Logistics Solution, Create Pricing Strategy for customers</li>
                            <li>Manage Sales Contract, and Maintain Client’s relationship</li>
                            <li>Evaluate the Business strategy for developing ATT Logistics in the US market</li>
                            <li>Creating a new business model for ATT in setting up a new service (E-commerce Logistics) which co-operates with Amazon (AWS)</li>
                            <li>Develop strategy for opening an overseas network of Logistics Agent (Korea, China)</li>
                        </ul>
                    </div>
                </ExpandableTextBox>
                <ExpandableTextBox>
                    <div className="flex flex-col">
                        <p className="font-bold">1byone Products Inc. (UK Department)</p>
                        <p className="font-bold">Nov 2018 – Dec 2019</p>
                        <p className="font-bold">Position: Warehouse Supervisor (Part-time)</p>
                        <ul className="list-disc list-outside pl-5">
                            <li>Organized the Fulfilment by Amazon (FBA): plan, picks, sorts, packs, ships, tracks and handles returns and refunds shipments</li>
                            <li>Received and organized return products (manage warehouse data for return product, relabeling for FBA, and re-export to FBA warehouse)</li>
                            <li>Utilized company’s software to efficiently control inventory by collecting stock location orders, printing requests, recording amounts of materials or items received or distributed</li>
                            <li>Observed and monitored warehouse’s working process and develop solutions for any faults occurred</li>
                        </ul>
                    </div>
                </ExpandableTextBox>
            </div>
        </section>
    )
}