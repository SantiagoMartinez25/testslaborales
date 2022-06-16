import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, Grid, TextField } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";

const questions = [
  "Frecuentemente me siento tenso/a e inquieto/a",
  "Realmente disfruto hablando con la gente",
  "Soy de fantasear mucho",
  "Me mantengo informado/a y generalmente tomo decisiones inteligentes",
  "Mi primera reacción es confiar en la gente",
  "A veces me he sentido enojado/a",
  "Las reuniones sociales me resultan generalmente aburridas",
  "La poesía tiene poco o ningún efecto en mi",
  "Mantengo mis cosas ordenadas y limpias",
  "A veces engaño a la gente para que hagan lo que yo quiero",
  "A veces las cosas se ven bastante desalentadoras y sin sentido para mí",
  "Habitualmente en las reuniones dejo que los demás hablen",
  "Me resulta fácil sentir lo que otros están sintiendo",
  "Trato de hacer mis tareas cuidadosamente de manera que no tengan que volverse a hacer",
  "En la medida que pueda, dejo mis cosas de lado para ayudar a otro",
  "A veces hago cosas impulsivamente, de las que después me arrepiento",
  "Soy una persona muy activa",
  "A menudo pruebo comidas nuevas y exóticas",
  "Trabajo duro para conseguir mis objetivos",
  "Prefiero cooperar con los demás que competir con ellos",
  "A menudo me siento inferior a los demás",
  "Me gusta estar donde está la acción",
  "Las discusiones filosóficas me resultan aburridas",
  "Tengo mucha autodisciplina",
  "Trato de ser humilde",
  "Cuando estoy bajo presión, a veces siento como si me rompiera en pedazos",
  "Me río con facilidad",
  "Creo que deberíamos recurrir a nuestras autoridades religiosas para las decisiones sobre temas morales",
  "Pienso bien las cosas antes de tomar una decisión",
  "Las necesidades humanas deben tener prioridad sobre las consideraciones económicas",
  "Tengo menos temores que la mayoría de la gente",
  "No encuentro mucho placer al charlar con la gente",
  "No me gusta perder mi tiempo soñando despierto/a",
  "Soy eficiente y efectivo/a en mi trabajo",
  "Creo que la mayoría de las personas con las que trato son honestas y confiables",
  "Cuesta mucho hacerme enojar",
  "Me gusta tener muchas personas a mi alrededor",
  "Algunas veces, cuando estoy leyendo poesía o mirando una obra de arte me emociono mucho",
  "Pierdo mucho tiempo buscando cosas que no dejé en su lugar",
  "Si es necesario, estoy dispuesto a manipular a las personas para obtener lo que quiero",
  "Rara vez estoy triste o deprimido/a ",
  "En las conversaciones tiendo a ser el/la que más habla",
  "Presto poca atención a mis sentimientos del momento",
  "Tengo que estar verdaderamente enfermo para faltar un día al trabajo",
  "Me considero una persona caritativa",
  "Siempre puedo mantener mis emociones bajo control",
  "A menudo siento como si explotara de energía",
  "Sigo el mismo camino cuando voy a algún lugar",
  "Soy despreocupado/a y quedado/a",
  "Si alguien empieza una pelea estoy listo/a para pelear",
  "Me siento cómodo/a en presencia de mis jefes u otras autoridades",
  "A menudo busco estimulación y emociones fuertes",
  "Tengo mucha curiosidad intelectual",
  "Una vez que comienzo un proyecto casi siempre lo termino",
  "Pienso que soy mejor que la mayoría de la gente",
  "Mantengo el control ante emergencias",
  "No me considero una persona alegre",
  "Creo que la lealtad hacia los propios ideales es más importante que tener una “mente abierta”",
  "A menudo hago cosas impulsivamente",
  "Creo que todos los seres humanos merecen respeto",
];
function NeoPIR() {
     const [answer, setAnswer] = useState([]);
     let neuroticism = 0;
     let extraversion = 0;
     let opening = 0;
     let amiability =0;
     let responsibility =0;

    function handleAnswer(value, index) {
        let answerTemp = answer;
        answerTemp[index + 1] = value;
        setAnswer(answerTemp);
    } 

    function duplicateQuestions() {
      return questions.map((question, index) => {
        return (
          <Grid item>
            <FormControl required>
              <FormLabel id={index + 1}>
                {index + 1}: {question}
              </FormLabel>
              <RadioGroup
                name="radio-buttons-group"
                row
                onChange={(e) => handleAnswer(e.target.value, index)}
              >
                <FormControlLabel value="0" control={<Radio />} label="TD" />
                <FormControlLabel value="1" control={<Radio />} label="D" />
                <FormControlLabel value="2" control={<Radio />} label="N" />
                <FormControlLabel value="3" control={<Radio />} label="A" />
                <FormControlLabel value="4" control={<Radio />} label="TA" />
              </RadioGroup>
            </FormControl>
          </Grid>
        );
      });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      for (let i = 1; i < answer.length; i=i+5) {
        
         if(i!==31 && i!==36 && i!==41) neuroticism += parseInt(answer[i])
         else if (answer[i] == 0) {
          neuroticism += 4
         }
         else if (answer[i] == 1) {
          neuroticism += 3
         }
         else if (answer[i] == 4) {
          neuroticism += 0
         }

      }

      for (let i = 2; i < answer.length; i=i+5) {
        
        if(i!==7 && i!==12 && i!==32 && i!==57) extraversion += parseInt(answer[i])
        else if (answer[i] == 0) {
         extraversion += 4
        }
        else if (answer[i] == 1) {
         extraversion += 3
        }
        else if (answer[i] == 4) {
         extraversion += 0
        }

     }

     for (let i = 3; i < answer.length; i=i+5) {
        
      if(i!==8 && i!==13 && i!==23 && i!==28 && i!==33 && i!==43 && i!==58) opening += parseInt(answer[i])
      else if (answer[i] == 0) {
       opening += 4
      }
      else if (answer[i] == 1) {
       opening += 3
      }
      else if (answer[i] == 4) {
       opening += 0
      }

   }

   for (let i = 4; i < answer.length; i=i+5) {
        
    if(i!==39 && i!==49 && i!==59) amiability += parseInt(answer[i])
    else if (answer[i] == 0) {
     amiability += 4
    }
    else if (answer[i] == 1) {
     amiability += 3
    }
    else if (answer[i] == 4) {
     amiability += 0
    }

 }

 for (let i = 5; i < answer.length; i=i+5) {
        
  if(i!==10 && i!==40 && i!==50) responsibility += parseInt(answer[i])
  else if (answer[i] == 0) {
   responsibility += 4
  }
  else if (answer[i] == 1) {
   responsibility += 3
  }
  else if (answer[i] == 4) {
   responsibility += 0
  }

}

      return console.log('Neurotisismo: ' + neuroticism, 'Extraversion: ' + extraversion,'Apertura: ' + opening,'Amabilidad: ' + amiability,'Responsabilidad: ' + responsibility)        
    };

    function formNeoPIR() {
        return(
            <form autoComplete="off" onSubmit={handleSubmit}>
                {duplicateQuestions()}
                {
                    <Button
                        type="submit"
                        variant="contained"
                    >
                        Ver resultados
                    </Button>
                }
            </form>
        )
    }
  
  return (
    <Grid
      container
      spacing={2}
      alignItems="flex-start"
      direction="column"
      marginLeft="20px"
      marginRight="20px"
      marginTop="30px"
    >
      <Grid item>
        <TextField
          label="Nombre completo"
          placeholder="Santiago Martinez"
          required
        ></TextField>
      </Grid>

      <Grid item>
        <TextField
          label="Número de documento"
          placeholder="81544670"
          required
          type="number"
        ></TextField>
      </Grid>

      <Grid
        container
        item
        spacing={2}
        alignItems="flex-start"
        direction="column"
      >
        {formNeoPIR()}
      </Grid>
    </Grid>
  );
}

export default NeoPIR;
