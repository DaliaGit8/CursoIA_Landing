import { Button } from "@/components/ui/button"
import { ChevronDown, Monitor, FolderOpen, Users, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HenryLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Promo Banner */}
      <div className="bg-black text-white py-2 px-4 text-center">
        <p className="text-sm md:text-base">
          ❤️ En la Semana de la Amistad, llévate un <span className="font-bold">20% OFF</span> y una comunidad para toda
          la vida ❤️ Código: <span className="font-bold">AMISTAD20</span> ¡Reserva tu cupo!
        </p>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-black">
            <span className="bg-yellow-400 text-black px-1">H</span>
            <span className="bg-yellow-400 text-black px-1">E</span>
            <span className="bg-yellow-400 text-black px-1">N</span>
            <span className="bg-yellow-400 text-black px-1">R</span>
            <span className="bg-yellow-400 text-black px-1">Y</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
            <span>Para estudiantes</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
            <span>Para empresas</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-700 hover:text-gray-900">
            Ingresar
          </Link>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6">Aplicar</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Comienza o acelera tu carrera en tecnología
              </h1>
              <p className="text-xl text-gray-700">
                Estudia Full Stack Development, Data, Inteligencia Artificial o Ciberseguridad
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                  <Monitor className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700">Online, en vivo y flexible</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                  <FolderOpen className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700">Basado en proyectos</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700">Basado en cohortes</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                  <Shield className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700">Inversión sin riesgo</span>
              </div>
            </div>

            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 text-lg">
              Aplicar
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-image.jpg"
                alt="Mujer sonriente trabajando en una laptop en un escritorio moderno"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-gray-900">Mucho más que un bootcamp</h2>
        </div>
      </main>
    </div>
  )
}
