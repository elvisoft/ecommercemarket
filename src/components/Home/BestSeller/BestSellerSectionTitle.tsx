import { CartBegIcon } from '@/assets/icons'

export default function BestSellerSectionTitle() {
  return (
    <div className="mb-30 flex items-center justify-between">
      <div>
        <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
          <CartBegIcon className="w-4 h-4 text-blue" />
          Este mes
        </span>
        <hr/>
        <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
          Cursos de programacion más vendidos
        </h2>
      </div>
    </div>
  )
}
