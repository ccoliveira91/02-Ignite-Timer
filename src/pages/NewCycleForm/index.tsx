import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(1, 'O ciclo precisa ser de no mínimo 1 minutos')
      .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
  });
  
  interface NewCycleFormData {
    task: string;
    minutesAmount: number;
  }
  
  // * Extraindo a tipagem com zod.infer * //
  // type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema> 

export function NewCycleForm() {
    const { register, handleSubmit, watch, reset } = useForm({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
          task: '',
          minutesAmount: 0,
        },
      });

    return (
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput
            id="task"
            disabled={!!activeCycle}
            placeholder="Dê um nome para o seu projeto"
            list="task-history"
            {...register('task')}
          />
          <datalist id="task-history">
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 1" />
            <option value="Tarefa 1" />
          </datalist>

          <label htmlFor=" minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={1}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
            disabled={!!activeCycle}
          />

          <span>minutos.</span>
        </FormContainer>
    )
}