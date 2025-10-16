"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Car, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface CarFormData {
  brand: string
  model: string
  year: string
  category: string
  price: string
  engine: string
  horsepower: string
  fuelConsumption: string
  transmission: string
  seats: string
  safetyRating: string
  dealershipName: string
  dealershipUrl: string
  description: string
  imageUrl: string
}

export default function AddCarPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<CarFormData>({
    brand: "",
    model: "",
    year: "",
    category: "",
    price: "",
    engine: "",
    horsepower: "",
    fuelConsumption: "",
    transmission: "",
    seats: "",
    safetyRating: "",
    dealershipName: "",
    dealershipUrl: "",
    description: "",
    imageUrl: "",
  })

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    if (user.role !== "dealer") {
      toast({
        title: "Acceso denegado",
        description: "Solo los concesionarios pueden añadir vehículos",
        variant: "destructive",
      })
      router.push("/")
      return
    }
  }, [user, router, toast])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call to save car data
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, this would save to your database
      console.log("Car data to save:", formData)

      toast({
        title: "¡Vehículo añadido!",
        description: "El vehículo ha sido añadido exitosamente al catálogo",
      })

      // Reset form
      setFormData({
        brand: "",
        model: "",
        year: "",
        category: "",
        price: "",
        engine: "",
        horsepower: "",
        fuelConsumption: "",
        transmission: "",
        seats: "",
        safetyRating: "",
        dealershipName: "",
        dealershipUrl: "",
        description: "",
        imageUrl: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo añadir el vehículo. Inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!user || user.role !== "dealer") {
    return null
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-accent/10 rounded-full">
              <Plus className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-balance">Añadir Nuevo Vehículo</h1>
          <p className="text-muted-foreground mt-2">Completa la información del vehículo para añadirlo al catálogo</p>
        </div>

        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Asegúrate de completar toda la información correctamente. Los datos serán visibles para todos los usuarios.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Información Básica
              </CardTitle>
              <CardDescription>Datos principales del vehículo</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brand">Marca *</Label>
                <Input
                  id="brand"
                  name="brand"
                  placeholder="Toyota, Honda, Ford..."
                  value={formData.brand}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">Modelo *</Label>
                <Input
                  id="model"
                  name="model"
                  placeholder="Camry, Civic, F-150..."
                  value={formData.model}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Año *</Label>
                <Select value={formData.year} onValueChange={(value) => handleSelectChange("year", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar año" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => 2024 - i).map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoría *</Label>
                <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedán</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="hatchback">Hatchback</SelectItem>
                    <SelectItem value="pickup">Pickup</SelectItem>
                    <SelectItem value="electric">Eléctrico</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Precio (USD) *</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="25000"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">URL de la imagen</Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  type="url"
                  placeholder="https://ejemplo.com/imagen.jpg"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Especificaciones Técnicas</CardTitle>
              <CardDescription>Detalles técnicos del vehículo</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="engine">Motor *</Label>
                <Input
                  id="engine"
                  name="engine"
                  placeholder="2.5L 4-cilindros"
                  value={formData.engine}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="horsepower">Potencia (HP) *</Label>
                <Input
                  id="horsepower"
                  name="horsepower"
                  type="number"
                  placeholder="203"
                  value={formData.horsepower}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fuelConsumption">Consumo (L/100km) *</Label>
                <Input
                  id="fuelConsumption"
                  name="fuelConsumption"
                  type="number"
                  step="0.1"
                  placeholder="7.8"
                  value={formData.fuelConsumption}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="transmission">Transmisión *</Label>
                <Select
                  value={formData.transmission}
                  onValueChange={(value) => handleSelectChange("transmission", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar transmisión" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="automatic">Automática</SelectItem>
                    <SelectItem value="cvt">CVT</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="seats">Asientos *</Label>
                <Select value={formData.seats} onValueChange={(value) => handleSelectChange("seats", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Número de asientos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="safetyRating">Calificación de Seguridad *</Label>
                <Select
                  value={formData.safetyRating}
                  onValueChange={(value) => handleSelectChange("safetyRating", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Calificación (1-5 estrellas)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 estrellas</SelectItem>
                    <SelectItem value="4">4 estrellas</SelectItem>
                    <SelectItem value="5">5 estrellas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información del Concesionario</CardTitle>
              <CardDescription>Datos de contacto y enlace al concesionario</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dealershipName">Nombre del Concesionario *</Label>
                  <Input
                    id="dealershipName"
                    name="dealershipName"
                    placeholder="AutoMax Motors"
                    value={formData.dealershipName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dealershipUrl">Sitio Web del Concesionario *</Label>
                  <Input
                    id="dealershipUrl"
                    name="dealershipUrl"
                    type="url"
                    placeholder="https://automaxmotors.com"
                    value={formData.dealershipUrl}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción Adicional</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Información adicional sobre el vehículo, características especiales, promociones..."
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4 justify-end">
            <Button type="button" variant="outline" onClick={() => router.push("/")}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Añadiendo vehículo..." : "Añadir vehículo"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
