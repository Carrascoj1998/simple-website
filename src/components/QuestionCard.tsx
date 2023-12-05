import React from "react";
import {AnswerObject} from "../App";
import {Wrapper, ButtonWrapper} from "./QuestionCard.styles";


type Props ={
    question: string;
    answers: string[];
    callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestion: number;
}
const QuestionCard: React.FC<Props> = ({question, answers, callBack,
                                       userAnswer, questionNumber, totalQuestion}) => (
 <Wrapper>
     <p className="number">
         Question: {questionNumber} / {totalQuestion}
     </p>
     <p dangerouslySetInnerHTML={{ __html: question}}/>
     <div>
         {answers.map(answer => (
             <ButtonWrapper key={answer}
                            correct={userAnswer?.correctAnswer === answer}
                            userClicked={userAnswer?.answer === answer}
             >
                 <button disabled={!!userAnswer} value={answer} onClick={callBack}>
                     <span dangerouslySetInnerHTML={{ __html: answer}}></span>
                 </button>
             </ButtonWrapper>
         ))}
     </div>
 </Wrapper>
);



export default QuestionCard;