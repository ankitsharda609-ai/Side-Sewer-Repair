
import React from 'react';

export const PHONE_NUMBER = "(844) 340-6413";
export const ADDRESS = "400 108th Ave NE, Bellevue, WA 98004";

export const SERVICES = [
  {
    title: "Side Sewer Repair",
    description: "Expert repair for root intrusion, bellies, and pipe collapse using Bellevue-approved SDR 35 PVC.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Public Connections",
    description: "Installing secondary public sewer connections for ADUs and subdivisions with full Romac-style mechanical couplings.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Right of Way Digs",
    description: "Handling complex street excavations, traffic control plans, and restoration to City of Bellevue standards.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export const FAQS = [
  {
    question: "What is a 'Side Sewer' responsibility in Bellevue?",
    answer: "In Bellevue, the property owner is responsible for the entire length of the side sewer pipe, from the building to the connection at the public sewer main, including the portion within the public Right-of-Way."
  },
  {
    question: "Do I need a permit for minor repairs?",
    answer: "Yes, a Side Sewer (UA) permit is typically required for any repair or replacement of the side sewer pipe. If the work occurs in the street, a Right-of-Way (ROW) permit is also necessary."
  },
  {
    question: "What materials are allowed for side sewers?",
    answer: "Bellevue Utilities Engineering standards generally require PVC SDR 35 pipe for gravity side sewers. Joints must be made with approved couplings."
  },
  {
    question: "How long does a typical ROW dig take?",
    answer: "A standard street dig usually takes 2-3 days: one for excavation and repair, one for inspection and backfill with crushed rock, and a final stage for asphalt/concrete restoration."
  }
];
