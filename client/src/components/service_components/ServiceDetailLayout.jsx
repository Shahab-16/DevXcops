"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const AccordionItem = ({ title, description, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-300">
            <button
                onClick={onClick}
                className="w-full text-left py-5 flex items-center justify-between text-lg font-semibold text-gray-800 hover:text-purple-600 transition-colors cursor-pointer"
            >
                {title}
                <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>+</span>
            </button>
            {isOpen && <div className="pb-5 text-gray-600 leading-relaxed">{description}</div>}
        </div>
    )
}

const ServiceDetailLayout = ({ service }) => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Dark Hero Section */}
            <section className="bg-gray-900 text-white pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.heroTitle}</h1>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{service.heroSubtitle}</p>
                    <button className="bg-purple-800 hover:bg-purple-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
                        Contact Us
                    </button>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-12">
                    <Link to="/" className="hover:text-gray-700">
                        Home
                    </Link>
                    <span className="mx-2">›</span>
                    <span>{service.breadcrumb}</span>
                </div>

                {/* Section 1: Text Left, Image Right */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">{service.sectionLabel}</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{service.mainHeading}</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">{service.mainDescription}</p>
                    </div>
                    <div>
                        <img
                            src={service.mainImage || "/placeholder.svg"}
                            alt={service.title}
                            className="w-full rounded-lg shadow-xl"
                        />
                    </div>
                </div>

                {/* Section 2: Image Left, Accordion Right */}
                <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
                    <div>
                        <img
                            src={service.qualityImage || "/placeholder.svg"}
                            alt={`${service.title} solutions`}
                            className="w-full rounded-lg shadow-xl"
                        />
                    </div>
                    <div>
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">{service.qualityLabel}</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            {service.qualityHeading}
                        </h2>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.accordionTitle}</h3>
                            <div className="w-full">
                                {service.accordionItems.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                        isOpen={openIndex === index}
                                        onClick={() => toggleAccordion(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="text-center pt-12">
                    <Link to="/" className="inline-flex items-center gap-2 text-purple-600 font-semibold text-lg hover:underline">
                        <span>←</span>
                        Back to All Services
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailLayout
