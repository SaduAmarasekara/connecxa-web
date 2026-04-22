"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CardShowcase from "@/components/CardShowcase";
import CorporateCTA from "@/components/CorporateCTA";


export default function AllProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow pt-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-24">

          {/* Header */}
          <div className="mb-16 " style={{ margin: "0 auto", textAlign: "center" }} >
            <h1 className="text-[42px] md:text-[60px] font-[900] text-[#111827] leading-tight mb-8">
              Your Gateway to Smarter Connections
            </h1>
            <p className="text-gray-500 text-lg md:text-xl font-medium">
              Explore our selection of Smart Digital Name Cards and accessories designed to elevate your networking game and build lasting connections.
            </p>
          </div>

          {/* Product Grid */}
          <CardShowcase />
 

        <CorporateCTA />
        </div>
             <div className="w-full h-24 lg:h-32 bg-white" />
      </main>
    </div>
  );
}
