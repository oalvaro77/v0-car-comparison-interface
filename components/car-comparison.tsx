"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Car, Fuel, Gauge, Users, Star, ExternalLink, Truck, Zap, HelpCircle, X, ChevronRight } from "lucide-react"

interface CarData {
  id: string
  brand: string
  model: string
  year: number
  price: number
  image: string
  category: "sedan" | "suv" | "hatchback" | "pickup" | "electric"
  specs: {
    engine: string
    horsepower: number
    fuelEconomy: string
    transmission: string
    seats: number
    safety: number
  }
  dealership: {
    name: string
    phone: string
    website: string
    location: string
  }
  rating: number
}

const carsData: CarData[] = [
  // Sedanes
  {
    id: "1",
    brand: "Toyota",
    model: "Corolla HEV",
    year: 2024,
    price: 108500000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=toyota&modelFamily=corolla&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "sedan",
    specs: {
      engine: "1.8L Híbrido",
      horsepower: 122,
      fuelEconomy: "23 km/l",
      transmission: "CVT",
      seats: 5,
      safety: 95,
    },
    dealership: {
      name: "Toyota Colombia",
      phone: "+57 (1) 307-8000",
      website: "https://www.toyota.com.co/",
      location: "Bogotá",
    },
    rating: 4.7,
  },
  {
    id: "2",
    brand: "Mazda",
    model: "2 Sedán Touring",
    year: 2024,
    price: 83600000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=mazda&modelFamily=2&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "sedan",
    specs: {
      engine: "1.5L 4-Cylinder",
      horsepower: 107,
      fuelEconomy: "18 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 88,
    },
    dealership: {
      name: "Mazda Alciautos",
      phone: "+57 (1) 744-0000",
      website: "https://www.alciautosmazda.com/",
      location: "Bogotá",
    },
    rating: 4.4,
  },
  {
    id: "3",
    brand: "Kia",
    model: "K3 Sedán",
    year: 2024,
    price: 79990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=kia&modelFamily=k3&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "sedan",
    specs: {
      engine: "1.6L 4-Cylinder",
      horsepower: 123,
      fuelEconomy: "17 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 90,
    },
    dealership: {
      name: "Kia Colombia",
      phone: "+57 (1) 423-9000",
      website: "https://www.kia.com/co/",
      location: "Bogotá",
    },
    rating: 4.3,
  },
  {
    id: "4",
    brand: "Honda",
    model: "City Sedán EXL",
    year: 2024,
    price: 103900000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=honda&modelFamily=city&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "sedan",
    specs: {
      engine: "1.5L 4-Cylinder",
      horsepower: 121,
      fuelEconomy: "19 km/l",
      transmission: "CVT",
      seats: 5,
      safety: 89,
    },
    dealership: {
      name: "Honda Autos Colombia",
      phone: "+57 (1) 307-9000",
      website: "https://autos.honda.com.co/",
      location: "Bogotá",
    },
    rating: 4.5,
  },
  {
    id: "5",
    brand: "Chevrolet",
    model: "Onix Sedán",
    year: 2024,
    price: 75790000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=chevrolet&modelFamily=onix&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "sedan",
    specs: {
      engine: "1.0L Turbo",
      horsepower: 116,
      fuelEconomy: "18 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 87,
    },
    dealership: {
      name: "Chevrolet Colombia",
      phone: "+57 (1) 307-7000",
      website: "https://www.chevrolet.com.co/",
      location: "Bogotá",
    },
    rating: 4.2,
  },
  {
    id: "6",
    brand: "Kia",
    model: "K4 GT Line",
    year: 2024,
    price: 136990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=kia&modelFamily=k4&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "sedan",
    specs: {
      engine: "1.6L Turbo",
      horsepower: 180,
      fuelEconomy: "15 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 92,
    },
    dealership: {
      name: "Kia Colombia",
      phone: "+57 (1) 423-9000",
      website: "https://www.kia.com/co/",
      location: "Bogotá",
    },
    rating: 4.6,
  },
  // SUVs
  {
    id: "7",
    brand: "Toyota",
    model: "Corolla Cross HEV",
    year: 2024,
    price: 135900000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=toyota&modelFamily=corolla%20cross&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "1.8L Híbrido",
      horsepower: 122,
      fuelEconomy: "22 km/l",
      transmission: "CVT",
      seats: 5,
      safety: 94,
    },
    dealership: {
      name: "Toyota Colombia",
      phone: "+57 (1) 307-8000",
      website: "https://www.toyota.com.co/",
      location: "Bogotá",
    },
    rating: 4.7,
  },
  {
    id: "8",
    brand: "Toyota",
    model: "Fortuner GR-S",
    year: 2024,
    price: 322500000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=toyota&modelFamily=fortuner&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "2.8L Turbo Diesel",
      horsepower: 204,
      fuelEconomy: "12 km/l",
      transmission: "Automática 6-vel",
      seats: 7,
      safety: 93,
    },
    dealership: {
      name: "Toyota Colombia",
      phone: "+57 (1) 307-8000",
      website: "https://www.toyota.com.co/",
      location: "Bogotá",
    },
    rating: 4.8,
  },
  {
    id: "9",
    brand: "Honda",
    model: "CR-V",
    year: 2024,
    price: 219900000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=honda&modelFamily=cr-v&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "1.5L Turbo",
      horsepower: 190,
      fuelEconomy: "14 km/l",
      transmission: "CVT",
      seats: 5,
      safety: 92,
    },
    dealership: {
      name: "Honda Autos Colombia",
      phone: "+57 (1) 307-9000",
      website: "https://autos.honda.com.co/",
      location: "Bogotá",
    },
    rating: 4.6,
  },
  {
    id: "10",
    brand: "Mazda",
    model: "CX-5 Touring",
    year: 2024,
    price: 149810000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=mazda&modelFamily=cx-5&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "2.0L 4-Cylinder",
      horsepower: 155,
      fuelEconomy: "13 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 91,
    },
    dealership: {
      name: "Mazda Alciautos",
      phone: "+57 (1) 744-0000",
      website: "https://www.alciautosmazda.com/",
      location: "Bogotá",
    },
    rating: 4.5,
  },
  {
    id: "11",
    brand: "Mazda",
    model: "CX-30 Touring",
    year: 2024,
    price: 117550000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=mazda&modelFamily=cx-30&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "2.0L 4-Cylinder",
      horsepower: 153,
      fuelEconomy: "14 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 90,
    },
    dealership: {
      name: "Mazda Alciautos",
      phone: "+57 (1) 744-0000",
      website: "https://www.alciautosmazda.com/",
      location: "Bogotá",
    },
    rating: 4.4,
  },
  {
    id: "12",
    brand: "Kia",
    model: "Seltos",
    year: 2024,
    price: 117990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=kia&modelFamily=seltos&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "1.6L 4-Cylinder",
      horsepower: 123,
      fuelEconomy: "15 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 89,
    },
    dealership: {
      name: "Kia Colombia",
      phone: "+57 (1) 423-9000",
      website: "https://www.kia.com/co/",
      location: "Bogotá",
    },
    rating: 4.3,
  },
  {
    id: "13",
    brand: "Kia",
    model: "Sportage",
    year: 2026,
    price: 131990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=kia&modelFamily=sportage&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "2.0L 4-Cylinder",
      horsepower: 158,
      fuelEconomy: "13 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 92,
    },
    dealership: {
      name: "Kia Colombia",
      phone: "+57 (1) 423-9000",
      website: "https://www.kia.com/co/",
      location: "Bogotá",
    },
    rating: 4.5,
  },
  {
    id: "14",
    brand: "Hyundai",
    model: "Creta",
    year: 2024,
    price: 102990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=hyundai&modelFamily=creta&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "1.5L 4-Cylinder",
      horsepower: 115,
      fuelEconomy: "16 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 88,
    },
    dealership: {
      name: "Hyundai Colombia",
      phone: "+57 (1) 307-6000",
      website: "https://www.hyundaicolombia.co/",
      location: "Bogotá",
    },
    rating: 4.3,
  },
  {
    id: "15",
    brand: "Hyundai",
    model: "Venue Limited",
    year: 2025,
    price: 94990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=hyundai&modelFamily=venue&modelYear=2025&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "1.6L 4-Cylinder",
      horsepower: 123,
      fuelEconomy: "17 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 87,
    },
    dealership: {
      name: "Hyundai Colombia",
      phone: "+57 (1) 307-6000",
      website: "https://www.hyundaicolombia.co/",
      location: "Bogotá",
    },
    rating: 4.2,
  },
  {
    id: "16",
    brand: "Ford",
    model: "Escape EcoBoost",
    year: 2024,
    price: 129990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=ford&modelFamily=escape&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "1.5L Turbo",
      horsepower: 181,
      fuelEconomy: "14 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 90,
    },
    dealership: {
      name: "Ford Colombia",
      phone: "+57 (1) 307-5000",
      website: "https://www.ford.com.co/",
      location: "Bogotá",
    },
    rating: 4.4,
  },
  {
    id: "17",
    brand: "Ford",
    model: "Explorer Active",
    year: 2024,
    price: 229990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=ford&modelFamily=explorer&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "2.3L Turbo",
      horsepower: 300,
      fuelEconomy: "11 km/l",
      transmission: "Automática",
      seats: 7,
      safety: 93,
    },
    dealership: {
      name: "Ford Colombia",
      phone: "+57 (1) 307-5000",
      website: "https://www.ford.com.co/",
      location: "Bogotá",
    },
    rating: 4.6,
  },
  {
    id: "18",
    brand: "Chevrolet",
    model: "Tracker RS",
    year: 2024,
    price: 120990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=chevrolet&modelFamily=tracker&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "1.2L Turbo",
      horsepower: 133,
      fuelEconomy: "15 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 88,
    },
    dealership: {
      name: "Chevrolet Colombia",
      phone: "+57 (1) 307-7000",
      website: "https://www.chevrolet.com.co/",
      location: "Bogotá",
    },
    rating: 4.3,
  },
  {
    id: "19",
    brand: "Chevrolet",
    model: "Blazer",
    year: 2024,
    price: 210120000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=chevrolet&modelFamily=blazer&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "2.0L Turbo",
      horsepower: 228,
      fuelEconomy: "12 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 91,
    },
    dealership: {
      name: "Chevrolet Colombia",
      phone: "+57 (1) 307-7000",
      website: "https://www.chevrolet.com.co/",
      location: "Bogotá",
    },
    rating: 4.5,
  },
  {
    id: "20",
    brand: "Toyota",
    model: "Land Cruiser 300",
    year: 2024,
    price: 613500000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=toyota&modelFamily=land%20cruiser&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "suv",
    specs: {
      engine: "3.5L V6 Twin-Turbo",
      horsepower: 415,
      fuelEconomy: "9 km/l",
      transmission: "Automática 10-vel",
      seats: 7,
      safety: 96,
    },
    dealership: {
      name: "Toyota Colombia",
      phone: "+57 (1) 307-8000",
      website: "https://www.toyota.com.co/",
      location: "Bogotá",
    },
    rating: 4.9,
  },
  // Hatchbacks
  {
    id: "21",
    brand: "Kia",
    model: "Picanto GT Line",
    year: 2024,
    price: 77990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=kia&modelFamily=picanto&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "hatchback",
    specs: {
      engine: "1.2L 4-Cylinder",
      horsepower: 84,
      fuelEconomy: "20 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 85,
    },
    dealership: {
      name: "Kia Colombia",
      phone: "+57 (1) 423-9000",
      website: "https://www.kia.com/co/",
      location: "Bogotá",
    },
    rating: 4.2,
  },
  {
    id: "22",
    brand: "Hyundai",
    model: "HB20 Hatchback",
    year: 2024,
    price: 69990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=hyundai&modelFamily=hb20&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "hatchback",
    specs: {
      engine: "1.0L Turbo",
      horsepower: 120,
      fuelEconomy: "19 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 86,
    },
    dealership: {
      name: "Hyundai Colombia",
      phone: "+57 (1) 307-6000",
      website: "https://www.hyundaicolombia.co/",
      location: "Bogotá",
    },
    rating: 4.1,
  },
  {
    id: "23",
    brand: "Chevrolet",
    model: "Onix Hatchback",
    year: 2024,
    price: 90990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=chevrolet&modelFamily=onix&modelYear=2024&angle=23&paintId=pspc0007&width=800",
    category: "hatchback",
    specs: {
      engine: "1.0L Turbo",
      horsepower: 116,
      fuelEconomy: "18 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 87,
    },
    dealership: {
      name: "Chevrolet Colombia",
      phone: "+57 (1) 307-7000",
      website: "https://www.chevrolet.com.co/",
      location: "Bogotá",
    },
    rating: 4.3,
  },
  {
    id: "24",
    brand: "Honda",
    model: "City Hatchback EXL",
    year: 2024,
    price: 96990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=honda&modelFamily=city%20hatchback&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "hatchback",
    specs: {
      engine: "1.5L 4-Cylinder",
      horsepower: 121,
      fuelEconomy: "19 km/l",
      transmission: "CVT",
      seats: 5,
      safety: 89,
    },
    dealership: {
      name: "Honda Autos Colombia",
      phone: "+57 (1) 307-9000",
      website: "https://autos.honda.com.co/",
      location: "Bogotá",
    },
    rating: 4.4,
  },
  {
    id: "25",
    brand: "Kia",
    model: "Stonic",
    year: 2024,
    price: 83990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=kia&modelFamily=stonic&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "hatchback",
    specs: {
      engine: "1.4L 4-Cylinder",
      horsepower: 100,
      fuelEconomy: "17 km/l",
      transmission: "Automática",
      seats: 5,
      safety: 87,
    },
    dealership: {
      name: "Kia Colombia",
      phone: "+57 (1) 423-9000",
      website: "https://www.kia.com/co/",
      location: "Bogotá",
    },
    rating: 4.2,
  },
  // Pickups
  {
    id: "26",
    brand: "Toyota",
    model: "Hilux GR-S",
    year: 2024,
    price: 296900000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=toyota&modelFamily=hilux&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "pickup",
    specs: {
      engine: "2.8L Turbo Diesel",
      horsepower: 204,
      fuelEconomy: "11 km/l",
      transmission: "Automática 6-vel",
      seats: 5,
      safety: 90,
    },
    dealership: {
      name: "Toyota Colombia",
      phone: "+57 (1) 307-8000",
      website: "https://www.toyota.com.co/",
      location: "Bogotá",
    },
    rating: 4.7,
  },
  {
    id: "27",
    brand: "Toyota",
    model: "Hilux Básica",
    year: 2024,
    price: 175900000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=toyota&modelFamily=hilux&modelYear=2024&angle=33&paintId=pspc0007&width=800",
    category: "pickup",
    specs: {
      engine: "2.4L Diesel",
      horsepower: 150,
      fuelEconomy: "12 km/l",
      transmission: "Manual 6-vel",
      seats: 5,
      safety: 87,
    },
    dealership: {
      name: "Toyota Colombia",
      phone: "+57 (1) 307-8000",
      website: "https://www.toyota.com.co/",
      location: "Bogotá",
    },
    rating: 4.4,
  },
  {
    id: "28",
    brand: "Ford",
    model: "Ranger XL 4x4",
    year: 2024,
    price: 195990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=ford&modelFamily=ranger&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "pickup",
    specs: {
      engine: "2.0L Turbo Diesel",
      horsepower: 170,
      fuelEconomy: "11 km/l",
      transmission: "Manual 6-vel",
      seats: 5,
      safety: 89,
    },
    dealership: {
      name: "Ford Colombia",
      phone: "+57 (1) 307-5000",
      website: "https://www.ford.com.co/",
      location: "Bogotá",
    },
    rating: 4.5,
  },
  {
    id: "29",
    brand: "Chevrolet",
    model: "Colorado Z71",
    year: 2024,
    price: 220000000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=chevrolet&modelFamily=colorado&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "pickup",
    specs: {
      engine: "2.8L Turbo Diesel",
      horsepower: 200,
      fuelEconomy: "11 km/l",
      transmission: "Automática 6-vel",
      seats: 5,
      safety: 88,
    },
    dealership: {
      name: "Chevrolet Colombia",
      phone: "+57 (1) 307-7000",
      website: "https://www.chevrolet.com.co/",
      location: "Bogotá",
    },
    rating: 4.6,
  },
  {
    id: "30",
    brand: "Chevrolet",
    model: "Silverado",
    year: 2024,
    price: 270990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=chevrolet&modelFamily=silverado&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "pickup",
    specs: {
      engine: "6.2L V8",
      horsepower: 420,
      fuelEconomy: "8 km/l",
      transmission: "Automática 10-vel",
      seats: 5,
      safety: 91,
    },
    dealership: {
      name: "Chevrolet Colombia",
      phone: "+57 (1) 307-7000",
      website: "https://www.chevrolet.com.co/",
      location: "Bogotá",
    },
    rating: 4.7,
  },
  // Eléctricos
  {
    id: "31",
    brand: "Kia",
    model: "EV3 Light",
    year: 2024,
    price: 164990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=kia&modelFamily=ev3&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "electric",
    specs: {
      engine: "Motor Eléctrico",
      horsepower: 204,
      fuelEconomy: "450 km autonomía",
      transmission: "Automática",
      seats: 5,
      safety: 93,
    },
    dealership: {
      name: "Kia Colombia",
      phone: "+57 (1) 423-9000",
      website: "https://www.kia.com/co/",
      location: "Bogotá",
    },
    rating: 4.6,
  },
  {
    id: "32",
    brand: "Kia",
    model: "EV5",
    year: 2024,
    price: 179990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=kia&modelFamily=ev5&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "electric",
    specs: {
      engine: "Motor Eléctrico",
      horsepower: 218,
      fuelEconomy: "530 km autonomía",
      transmission: "Automática",
      seats: 5,
      safety: 94,
    },
    dealership: {
      name: "Kia Colombia",
      phone: "+57 (1) 423-9000",
      website: "https://www.kia.com/co/",
      location: "Bogotá",
    },
    rating: 4.7,
  },
  {
    id: "33",
    brand: "Kia",
    model: "EV6",
    year: 2024,
    price: 251990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=kia&modelFamily=ev6&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "electric",
    specs: {
      engine: "Motor Eléctrico Dual",
      horsepower: 325,
      fuelEconomy: "528 km autonomía",
      transmission: "Automática",
      seats: 5,
      safety: 95,
    },
    dealership: {
      name: "Kia Colombia",
      phone: "+57 (1) 423-9000",
      website: "https://www.kia.com/co/",
      location: "Bogotá",
    },
    rating: 4.8,
  },
  {
    id: "34",
    brand: "Kia",
    model: "EV9",
    year: 2024,
    price: 399990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=kia&modelFamily=ev9&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "electric",
    specs: {
      engine: "Motor Eléctrico Dual",
      horsepower: 385,
      fuelEconomy: "505 km autonomía",
      transmission: "Automática",
      seats: 7,
      safety: 96,
    },
    dealership: {
      name: "Kia Colombia",
      phone: "+57 (1) 423-9000",
      website: "https://www.kia.com/co/",
      location: "Bogotá",
    },
    rating: 4.9,
  },
  {
    id: "35",
    brand: "Hyundai",
    model: "Kona Eléctrica",
    year: 2024,
    price: 139990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=hyundai&modelFamily=kona&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "electric",
    specs: {
      engine: "Motor Eléctrico",
      horsepower: 201,
      fuelEconomy: "484 km autonomía",
      transmission: "Automática",
      seats: 5,
      safety: 92,
    },
    dealership: {
      name: "Hyundai Colombia",
      phone: "+57 (1) 307-6000",
      website: "https://www.hyundaicolombia.co/",
      location: "Bogotá",
    },
    rating: 4.5,
  },
  {
    id: "36",
    brand: "Chevrolet",
    model: "Bolt EUV",
    year: 2024,
    price: 159990000,
    image: "https://cdn.imagin.studio/getImage?customer=img&make=chevrolet&modelFamily=bolt%20euv&modelYear=2024&angle=23&paintId=pspc0001&width=800",
    category: "electric",
    specs: {
      engine: "Motor Eléctrico",
      horsepower: 200,
      fuelEconomy: "402 km autonomía",
      transmission: "Automática",
      seats: 5,
      safety: 91,
    },
    dealership: {
      name: "Chevrolet Colombia",
      phone: "+57 (1) 307-7000",
      website: "https://www.chevrolet.com.co/",
      location: "Bogotá",
    },
    rating: 4.4,
  },
]

const categories = [
  { id: "sedan", name: "Sedanes", icon: Car, description: "Vehículos elegantes y eficientes" },
  { id: "suv", name: "SUVs", icon: Truck, description: "Espaciosos y versátiles" },
  { id: "hatchback", name: "Hatchbacks", icon: Car, description: "Compactos y prácticos" },
  { id: "pickup", name: "Pickups", icon: Truck, description: "Potentes y robustos" },
  { id: "electric", name: "Eléctricos", icon: Zap, description: "Ecológicos y modernos" },
]

export function CarComparison() {
  const [selectedCategory, setSelectedCategory] = useState<string>("sedan")
  const [selectedCars, setSelectedCars] = useState<string[]>([])
  const [compareMode, setCompareMode] = useState(false)
  const [showAssistant, setShowAssistant] = useState(false)
  const [assistantStep, setAssistantStep] = useState(0)
  const [assistantAnswers, setAssistantAnswers] = useState<Record<string, string>>({})
  const [recommendations, setRecommendations] = useState<CarData[]>([])

  const assistantQuestions = [
    {
      id: "budget",
      question: "¿Cuál es tu presupuesto aproximado?",
      options: [
        { value: "low", label: "Menos de $100.000.000 COP", icon: "💰" },
        { value: "medium", label: "$100.000.000 - $150.000.000 COP", icon: "💵" },
        { value: "high", label: "Más de $150.000.000 COP", icon: "💎" },
      ],
    },
    {
      id: "usage",
      question: "¿Cuál será el uso principal del vehículo?",
      options: [
        { value: "city", label: "Ciudad / Trabajo diario", icon: "🏙️" },
        { value: "family", label: "Familiar / Viajes largos", icon: "👨‍👩‍👧‍👦" },
        { value: "work", label: "Trabajo pesado / Carga", icon: "🔧" },
        { value: "eco", label: "Ecológico / Eficiencia", icon: "🌱" },
      ],
    },
    {
      id: "size",
      question: "¿Qué tamaño de vehículo prefieres?",
      options: [
        { value: "compact", label: "Compacto y ágil", icon: "🚗" },
        { value: "medium", label: "Tamaño medio", icon: "🚙" },
        { value: "large", label: "Grande y espacioso", icon: "🚐" },
      ],
    },
    {
      id: "seats",
      question: "¿Cuántos asientos necesitas?",
      options: [
        { value: "5", label: "5 asientos", icon: "👥" },
        { value: "6", label: "6 asientos o más", icon: "👨‍👩‍👧‍👦" },
        { value: "any", label: "No importa", icon: "✨" },
      ],
    },
    {
      id: "priority",
      question: "¿Qué es más importante para ti?",
      options: [
        { value: "fuel", label: "Eficiencia de combustible", icon: "⛽" },
        { value: "power", label: "Potencia y rendimiento", icon: "🏎️" },
        { value: "safety", label: "Seguridad", icon: "🛡️" },
        { value: "comfort", label: "Comodidad y lujo", icon: "✨" },
      ],
    },
  ]

  const getRecommendations = () => {
    let filteredCars = [...carsData]

    if (assistantAnswers.budget === "low") {
      filteredCars = filteredCars.filter((car) => car.price < 100000000)
    } else if (assistantAnswers.budget === "medium") {
      filteredCars = filteredCars.filter((car) => car.price >= 100000000 && car.price <= 150000000)
    } else if (assistantAnswers.budget === "high") {
      filteredCars = filteredCars.filter((car) => car.price > 150000000)
    }

    if (assistantAnswers.usage === "city") {
      filteredCars = filteredCars.filter((car) => car.category === "sedan" || car.category === "hatchback")
    } else if (assistantAnswers.usage === "family") {
      filteredCars = filteredCars.filter((car) => car.category === "suv" || car.category === "sedan")
    } else if (assistantAnswers.usage === "work") {
      filteredCars = filteredCars.filter((car) => car.category === "pickup")
    } else if (assistantAnswers.usage === "eco") {
      filteredCars = filteredCars.filter((car) => car.category === "electric" || car.category === "hatchback")
    }

    if (assistantAnswers.size === "compact") {
      filteredCars = filteredCars.filter((car) => car.category === "hatchback" || car.category === "electric")
    } else if (assistantAnswers.size === "large") {
      filteredCars = filteredCars.filter((car) => car.category === "suv" || car.category === "pickup")
    }

    if (assistantAnswers.seats === "5") {
      filteredCars = filteredCars.filter((car) => car.specs.seats === 5)
    } else if (assistantAnswers.seats === "6") {
      filteredCars = filteredCars.filter((car) => car.specs.seats >= 6)
    }

    if (assistantAnswers.priority === "fuel") {
      filteredCars.sort((a, b) => {
        // Handle potential issues with fuelEconomy format like "km/l" or "MPGe"
        const parseFuelEconomy = (fe: string): number => {
          const parts = fe.split(" ")
          const value = Number.parseFloat(parts[0])
          if (isNaN(value)) return 0 // Default to 0 if parsing fails

          if (fe.includes("km/l")) return value // Higher is better
          if (fe.includes("mpg")) return value // Higher is better
          if (fe.includes("autonomía")) return value // Higher is better for electric
          return 0
        }
        return parseFuelEconomy(b.specs.fuelEconomy) - parseFuelEconomy(a.specs.fuelEconomy)
      })
    } else if (assistantAnswers.priority === "power") {
      filteredCars.sort((a, b) => b.specs.horsepower - a.specs.horsepower)
    } else if (assistantAnswers.priority === "safety") {
      filteredCars.sort((a, b) => b.specs.safety - a.specs.safety)
    } else if (assistantAnswers.priority === "comfort") {
      filteredCars.sort((a, b) => b.rating - a.rating)
    }

    return filteredCars.slice(0, 3)
  }

  const handleAssistantAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...assistantAnswers, [questionId]: answer }
    setAssistantAnswers(newAnswers)

    if (assistantStep < assistantQuestions.length - 1) {
      setAssistantStep(assistantStep + 1)
    } else {
      const recs = getRecommendations()
      setRecommendations(recs)
      setAssistantStep(assistantStep + 1)
    }
  }

  const resetAssistant = () => {
    setAssistantStep(0)
    setAssistantAnswers({})
    setRecommendations([])
    setShowAssistant(false)
  }

  const filteredCars = carsData.filter((car) => car.category === selectedCategory)

  const toggleCarSelection = (carId: string) => {
    setSelectedCars((prev) => {
      if (prev.includes(carId)) {
        return prev.filter((id) => id !== carId)
      } else if (prev.length < 3) {
        return [...prev, carId]
      }
      return prev
    })
  }

  const handleContactDealer = (dealership: CarData["dealership"]) => {
    window.open(dealership.website, "_blank")
  }

  const selectedCarsData = filteredCars.filter((car) => selectedCars.includes(car.id))

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedCars([])
    setCompareMode(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Car className="h-8 w-8 text-accent" />
          <h1 className="text-4xl font-bold text-foreground">Comparador de Automóviles</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Compara especificaciones, precios y características de diferentes vehículos en Colombia. Encuentra el auto
          perfecto para ti y contacta directamente al concesionario.
        </p>

        <div className="mt-6">
          <Button
            onClick={() => setShowAssistant(true)}
            className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white px-8 py-3 text-lg font-semibold shadow-lg"
            size="lg"
          >
            <HelpCircle className="h-5 w-5 mr-2" />
            ¿Necesitas ayuda para elegir?
          </Button>
        </div>
      </header>

      {showAssistant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-accent" />
                Asistente de Selección
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={resetAssistant}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {assistantStep < assistantQuestions.length ? (
                // Preguntas del asistente
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center gap-2">
                        {assistantQuestions.map((_, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index <= assistantStep ? "bg-accent" : "bg-muted"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Pregunta {assistantStep + 1} de {assistantQuestions.length}
                    </h3>
                    <p className="text-lg text-muted-foreground">{assistantQuestions[assistantStep].question}</p>
                  </div>

                  <div className="grid gap-3">
                    {assistantQuestions[assistantStep].options.map((option) => (
                      <Button
                        key={option.value}
                        variant="outline"
                        className="h-auto p-4 justify-start text-left hover:border-accent hover:bg-accent/5 bg-transparent"
                        onClick={() => handleAssistantAnswer(assistantQuestions[assistantStep].id, option.value)}
                      >
                        <span className="text-2xl mr-3">{option.icon}</span>
                        <span className="text-base">{option.label}</span>
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                // Resultados y recomendaciones
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-accent mb-2">¡Recomendaciones Personalizadas!</h3>
                    <p className="text-muted-foreground">
                      Basado en tus respuestas, estos son los vehículos que mejor se adaptan a tus necesidades:
                    </p>
                  </div>

                  {recommendations.length > 0 ? (
                    <div className="space-y-4">
                      {recommendations.map((car, index) => (
                        <Card key={car.id} className="border-accent/20">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <Badge className="bg-accent text-white mb-2">#{index + 1} Recomendado</Badge>
                                <img
                                  src={car.image || "/placeholder.svg"}
                                  alt={`${car.brand} ${car.model}`}
                                  className="w-24 h-16 object-cover rounded"
                                />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold">
                                  {car.brand} {car.model} {car.year}
                                </h4>
                                <p className="text-2xl font-bold text-accent mb-2">
                                  ${(car.price / 1000000).toFixed(1)}M COP
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                  <span>🏎️ {car.specs.horsepower} HP</span>
                                  <span>⛽ {car.specs.fuelEconomy}</span>
                                  <span>👥 {car.specs.seats} asientos</span>
                                  <span>🛡️ {car.specs.safety}% seguridad</span>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => {
                                    setSelectedCategory(car.category)
                                    setSelectedCars([car.id])
                                    resetAssistant()
                                  }}
                                >
                                  Ver Detalles
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => handleContactDealer(car.dealership)}>
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  Contactar
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        No encontramos vehículos que coincidan exactamente con tus criterios.
                      </p>
                      <Button onClick={() => setAssistantStep(0)}>Intentar de nuevo</Button>
                    </div>
                  )}

                  <div className="flex gap-2 justify-center">
                    <Button variant="outline" onClick={() => setAssistantStep(0)}>
                      Empezar de nuevo
                    </Button>
                    <Button onClick={resetAssistant}>Explorar todas las opciones</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Selecciona una Categoría</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon
            const isSelected = selectedCategory === category.id
            const categoryCount = carsData.filter((car) => car.category === category.id).length

            return (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  isSelected ? "ring-2 ring-accent border-accent bg-accent/5" : "hover:border-accent/50"
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <CardContent className="p-6 text-center">
                  <IconComponent
                    className={`h-8 w-8 mx-auto mb-3 ${isSelected ? "text-accent" : "text-muted-foreground"}`}
                  />
                  <h3 className={`font-semibold mb-1 ${isSelected ? "text-accent" : "text-foreground"}`}>
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {categoryCount} modelos
                  </Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{categories.find((cat) => cat.id === selectedCategory)?.name}</h2>
        <p className="text-muted-foreground">{filteredCars.length} vehículos disponibles en esta categoría</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-sm">
            {selectedCars.length}/3 seleccionados
          </Badge>
          {selectedCars.length > 0 && (
            <Button variant="outline" size="sm" onClick={() => setSelectedCars([])}>
              Limpiar selección
            </Button>
          )}
        </div>
        {selectedCars.length >= 2 && (
          <Button onClick={() => setCompareMode(!compareMode)} className="bg-accent hover:bg-accent/90">
            {compareMode ? "Ver todos" : "Comparar seleccionados"}
          </Button>
        )}
      </div>

      {/* Car Grid */}
      {!compareMode && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredCars.map((car) => (
            <Card
              key={car.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedCars.includes(car.id) ? "ring-2 ring-accent border-accent" : "hover:border-accent/50"
              }`}
              onClick={() => toggleCarSelection(car.id)}
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-accent">{car.year}</Badge>
                </div>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">
                    {car.brand} {car.model}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">{car.rating}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold text-accent">${(car.price / 1000000).toFixed(1)}M COP</div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-muted-foreground" />
                    <span>{car.specs.horsepower} HP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="h-4 w-4 text-muted-foreground" />
                    <span>{car.specs.fuelEconomy}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{car.specs.seats} asientos</span>
                  </div>
                  <div className="text-muted-foreground">{car.specs.transmission}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Seguridad</span>
                    <span>{car.specs.safety}%</span>
                  </div>
                  <Progress value={car.specs.safety} className="h-2" />
                </div>

                <div className="pt-2 border-t">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>{car.dealership.name}</strong> - {car.dealership.location}
                  </p>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleContactDealer(car.dealership)
                    }}
                    className="w-full bg-primary hover:bg-primary/90"
                    size="sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Contactar Concesionario
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Comparison View */}
      {compareMode && selectedCarsData.length >= 2 && (
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Comparación Detallada</h2>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Característica</th>
                  {selectedCarsData.map((car) => (
                    <th key={car.id} className="text-center p-4 min-w-[200px]">
                      <div className="space-y-2">
                        <img
                          src={car.image || "/placeholder.svg"}
                          alt={`${car.brand} ${car.model}`}
                          className="w-full h-32 object-cover rounded-lg mx-auto"
                        />
                        <div className="font-semibold">
                          {car.brand} {car.model}
                        </div>
                        <div className="text-2xl font-bold text-accent">${(car.price / 1000000).toFixed(1)}M COP</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Motor</td>
                  {selectedCarsData.map((car) => (
                    <td key={car.id} className="p-4 text-center">
                      {car.specs.engine}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Potencia</td>
                  {selectedCarsData.map((car) => (
                    <td key={car.id} className="p-4 text-center">
                      {car.specs.horsepower} HP
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Consumo</td>
                  {selectedCarsData.map((car) => (
                    <td key={car.id} className="p-4 text-center">
                      {car.specs.fuelEconomy}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Transmisión</td>
                  {selectedCarsData.map((car) => (
                    <td key={car.id} className="p-4 text-center">
                      {car.specs.transmission}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Asientos</td>
                  {selectedCarsData.map((car) => (
                    <td key={car.id} className="p-4 text-center">
                      {car.specs.seats}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Seguridad</td>
                  {selectedCarsData.map((car) => (
                    <td key={car.id} className="p-4 text-center">
                      <div className="space-y-1">
                        <div>{car.specs.safety}%</div>
                        <Progress value={car.specs.safety} className="h-2" />
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Calificación</td>
                  {selectedCarsData.map((car) => (
                    <td key={car.id} className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{car.rating}</span>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-medium">Concesionario</td>
                  {selectedCarsData.map((car) => (
                    <td key={car.id} className="p-4 text-center">
                      <div className="space-y-2">
                        <div className="font-medium">{car.dealership.name}</div>
                        <div className="text-sm text-muted-foreground">{car.dealership.location}</div>
                        <Button
                          onClick={() => handleContactDealer(car.dealership)}
                          size="sm"
                          className="bg-accent hover:bg-accent/90"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Contactar
                        </Button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
