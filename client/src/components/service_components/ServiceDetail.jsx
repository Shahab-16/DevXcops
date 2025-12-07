"use client"

import { useParams, Navigate } from "react-router-dom"
import ServiceDetailLayout from "./ServiceDetailLayout"
import { servicesData } from "../../utils/servicesData"

export default function ServiceDetailPage() {
    const { serviceName } = useParams()
    const service = servicesData[serviceName]

    if (!service) {
        return <Navigate to="/" replace />
    }

    return <ServiceDetailLayout service={service} />
}
