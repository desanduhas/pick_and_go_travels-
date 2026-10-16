import React from 'react';
import Calculator from '../components/Calculator';
import PricingTable from '../components/PricingTable';
import { SITE_DATA } from '../data/siteData';
import { ShieldCheck, Award, Check } from 'lucide-react';

export default function PricingPage({ selectedVehicleId, onBookPackage }) {
  return (
    <div className="page-container">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="page-pill">Transparent Rates</span>
          <h1 className="page-title">Vehicle Rental Prices &amp; Calculator</h1>
          <p className="page-subtitle">
            Zero hidden fees, 100% unlimited kilometers, and honest island-wide pricing. Calculate your exact rate below or compare our full fleet.
          </p>
        </div>

        {/* Live Interactive Calculator */}
        <div style={{ marginBottom: '4rem' }}>
          <Calculator
            selectedVehicleId={selectedVehicleId}
            onBookPackage={onBookPackage}
          />
        </div>

        {/* Comparison Table */}
        <PricingTable />

        {/* Pricing Inclusions & Policies */}
        <div className="pricing-inclusions-grid">
          <div className="ios-card pricing-inclusion-card">
            <h3 className="inclusion-title">
              100% Unlimited Kilometers
            </h3>
            <p className="inclusion-desc">
              There are no distance caps or mileage surcharges. Explore anywhere in Sri Lanka from northern Jaffna to southern beaches with peace of mind.
            </p>
          </div>

          <div className="ios-card pricing-inclusion-card">
            <h3 className="inclusion-title">
              No Security Deposit Required
            </h3>
            <p className="inclusion-desc">
              Unlike other rental agencies that hold massive credit card bonds, Pick &amp; Go Travels offers zero deposit options with our comprehensive insurance package.
            </p>
          </div>

          <div className="ios-card pricing-inclusion-card">
            <h3 className="inclusion-title">
              Official AAC Driving Permits ($40)
            </h3>
            <p className="inclusion-desc">
              We legally endorse your international license with the Automobile Association of Ceylon (AAC) before you land, keeping you fully compliant with Sri Lankan traffic police.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
