import { useState } from 'react'
import { Link } from 'react-router-dom'

const inputClass =
  'mt-1 w-full rounded-lg border bg-background px-3 py-2 focus:border-primary focus:outline-none'

function ItemForm({ onSave }) {
  const [title, setTitle] = useState('')
  const [evaluation, setEvaluation] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const [errors, setErrors] = useState({
      title: null,
      evaluation: null,
    })

function validate() {
    const newErrors = {
      title: null,
      evaluation: null,
    }
    if (title.trim() === '') {
      newErrors.title = 'Informe o nome do Anime.'
    } else if (title.trim().length < 2) {
      newErrors.title = 'O nome precisa de pelo menos 2 letras.'
    }
    if (evaluation === '') {
      newErrors.evaluation = 'Que nota você da pra esse anime?.'
    } else if (Number(evaluation) < 0 || Number(evaluation) > 5) {
  newErrors.evaluation = 'A avaliação deve ser um número entre 0 e 5.';
    }
    return newErrors
  }

function handleSubmit(event) {
    event.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (newErrors.title || newErrors.evaluation) return
    onSave({
      title: title.trim(),
      evaluation: Number(evaluation),
      isCompleted: isCompleted,
    })
  }

  return (
      <form onSubmit={handleSubmit} className="grid gap-4 md:max-w-xl">

      <div>
        <label htmlFor="anime-title" className="font-bold">
          Nome do anime
        </label>
        <input
          id="anime-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? 'anime-title-error' : undefined}
          className={`${inputClass} ${errors.title ? 'border-danger' : 'border-border'}`}
        />
        {errors.title && (
          <p id="anime-title-error" className="mt-1 text-sm text-danger">
            {errors.title}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="anime-hours" className="font-bold">
          Horas jogadas
        </label>
        <input
          id="anime-hours"
          type="number"
          value={evaluation}
          onChange={(event) => setEvaluation(event.target.value)}
          aria-invalid={Boolean(errors.evaluation)}
          aria-describedby={errors.evaluation ? 'anime-hours-error' : undefined}
          className={`${inputClass} ${errors.evaluation ? 'border-danger' : 'border-border'}`}
        />
        {errors.evaluation && (
          <p id="anime-hours-error" className="mt-1 text-sm text-danger">
            {errors.evaluation}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          id="anime-completed"
          type="checkbox"
          checked={isCompleted}
          onChange={(event) => setIsCompleted(event.target.checked)}
          className="size-5 accent-primary"
        />
        <label htmlFor="anime-completed">Já zerei este jogo</label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-lg bg-primary px-4 py-2 font-bold text-background hover:opacity-90"
        >
          Salvar
        </button>
        <Link to="/lista" className="text-muted hover:text-primary">
          Cancelar
        </Link>
      </div>
    </form>
  );
}

export default ItemForm
